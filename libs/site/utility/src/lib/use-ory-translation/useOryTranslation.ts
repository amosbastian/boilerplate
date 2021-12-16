import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

export const useOryTranslation = () => {
  const { t } = useTranslation("ory");
  const router = useRouter();

  const flow = router.pathname.includes("settings") ? "settings" : router.pathname.replace("/", "");

  const oryT = (messageId: number, context?: Record<string, any>) => {
    switch (messageId) {
      case 1060001:
        return t(`${messageId}-${flow}`, context);
      case 1070001:
        return t(`${messageId}-${flow}`, context);
      case 4000012:
        return t(`${messageId}-${flow}`, context);
      case 4000005:
        // if (context?.reason.contains("length")) {
        //   //FIXME:
        //   // return t(`${messageId}`, { reason: t("common:email") });
        // }
        return t(messageId.toString(), context);
      case 4000002:
        if (context?.property === "password_identifier" || context?.property === "email") {
          return t(`${messageId}-email`);
        }

        if (context?.property === "password") {
          return t(`${messageId}-password`);
        }

        return t(`${messageId}`, context);
      default:
        return t(messageId.toString(), context);
    }
  };

  return { oryT };
};
