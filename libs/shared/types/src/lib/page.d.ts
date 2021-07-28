import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type Page<T> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
