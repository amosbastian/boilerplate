import { CustomError } from "@boilerplate/shared/ui";
import type { NextPageContext } from "next";
import * as React from "react";

function Error({ statusCode }) {
  return <CustomError statusCode={statusCode} />;
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
