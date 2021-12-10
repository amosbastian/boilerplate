// https://github.com/ory/kratos-selfservice-ui-react-native/blob/master/src/helpers/sdk.tsx
import { Configuration, V0alpha2Api } from "@ory/kratos-client";
import axiosFactory, { AxiosInstance } from "axios";

const axios = axiosFactory.create();

const resilience = (axios: AxiosInstance) => {
  axios.interceptors.response.use(
    (v) => Promise.resolve(v),
    (error) => {
      if (!error.config) {
        console.error("Received network error without axios details", error);
        return Promise.reject(error);
      }

      if (
        error.response &&
        (error.response.status == 400 || error.response.status == 401 || error.response.status == 403)
      ) {
        console.debug("Network request failed but this is ok", {
          config: error.config,
          error,
        });
        return Promise.reject(error);
      }

      if (error.response && (error.response.status >= 400 || error.response.status < 500)) {
        // 4xx status means we should not retry
        console.error("Network request failed", { config: error.config, error });
        return Promise.reject(error);
      }

      const config = {
        ...error.config,
        timeout: 1000,
        count: (error?.config?.count || 0) + 1,
      };

      if (config.count > 60) {
        const newError = new Error(
          "Unable to reach network, gave up after 60 retries. Please restart the app and try again.",
        );
        console.error(newError, { config: error.config, error });
        return Promise.reject(newError);
      }

      console.debug("Retrying due to network error", {
        count: error.config.count,
        error,
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          axios.request(config).then(resolve).catch(reject);
        }, 1000);
      });
    },
  );
};

resilience(axios); // Adds retry mechanism to axios

export const oryApiClient = new V0alpha2Api(
  new Configuration({
    basePath: process.env.ORY_SDK_URL,
    baseOptions: {
      // Setting this is very important as axios will send the CSRF cookie otherwise
      // which causes problems with ORY Kratos' security detection
      withCredentials: false,

      // Timeout after 10 seconds
      timeout: 10000,
    },
  }),
  "",
  // Ensure that we are using the axios client with retry
  axios,
);
