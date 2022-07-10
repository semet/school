import "../styles/globals.css";
import "swiper/css";
import "react-loading-skeleton/dist/skeleton.css";
import Head from "next/head";
import Script from "next/script";
import { ReactNode } from "react";
import NextNProgress from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";
import type { AppProps, AppPropsWithLayout } from "next/app";
import { QueryClient, QueryClientProvider as QueryProvider } from "react-query";
import { Provider as BusProvider } from "react-bus";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	});
	const getLayout = Component.getLayout || ((page: ReactNode) => page);
	return (
		<QueryProvider client={queryClient}>
			<BusProvider>
				<Head>
					<meta charSet="utf-8" />
					<meta name="description" content="Abu darda boarding school" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<link
						rel="shortcut icon"
						type="image/x-icon"
						href="/images/x-icon/01.png"
					></link>
				</Head>
				<Script
					src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
					integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
					crossOrigin="anonymous"
				/>
				<NextNProgress
					color="#3d6ce7"
					startPosition={0.3}
					stopDelayMs={200}
					height={4}
					showOnShallow={true}
				/>
				{getLayout(<Component {...pageProps} />)}
			</BusProvider>
		</QueryProvider>
	);
}

export default MyApp;
