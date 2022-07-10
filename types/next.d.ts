import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";

declare module "next" {
	type NextPageWithLayout<P = {}> = NextPage<P> & {
		getLayout?: (page: ReactElement) => ReactNode;
	};
}

declare module "next/app" {
	type AppPropsWithLayout<P = {}> = AppProps & {
		Component: NextPageWithLayout;
	};
}
