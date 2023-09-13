import {
	Experimental_CssVarsProvider as CssVarsProvider,
	getInitColorSchemeScript,
} from '@mui/material/styles';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	isRouteErrorResponse,
	useRouteError,
} from '@remix-run/react';
import { useContext, useEffect, useRef } from 'react';

import ClientStyleContext from '~/styles/client.context';
import CssBaseline from '@mui/material/CssBaseline';
import type { LinksFunction } from '@remix-run/node';
import ServerStyleContext from '~/styles/server.context';
import fnt300 from '@fontsource/montserrat/300.css';
import fnt500 from '@fontsource/montserrat/500.css';
import fnt700 from '@fontsource/montserrat/700.css';
import { theme } from './theme';
import { withEmotionCache } from '@emotion/react';

export const links: LinksFunction = () => {
	return [
		{ rel: 'stylesheet', href: fnt300 },
		{ rel: 'stylesheet', href: fnt500 },
		{ rel: 'stylesheet', href: fnt700 },
	];
};

interface DocumentProps {
	children: React.ReactNode;
	title?: string;
}

const Document = withEmotionCache(
	({ children, title }: DocumentProps, emotionCache) => {
		const serverStyleData = useContext(ServerStyleContext);
		const clientStyleData = useContext(ClientStyleContext);
		const reinjectStylesRef = useRef(true);

		useEffect(() => {
			if (!reinjectStylesRef.current) {
				return;
			}
			emotionCache.sheet.container = document.head;

			const tags = emotionCache.sheet.tags;
			emotionCache.sheet.flush();
			tags.forEach((tag) => {
				(emotionCache.sheet as any)._insertTag(tag);
			});

			clientStyleData.reset();
			reinjectStylesRef.current = false;
		}, [clientStyleData, emotionCache.sheet]);

		return (
			<html lang='zh-Hans'>
				<head>
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
					/>
					<Meta />
					<Links />
					{serverStyleData?.map(({ key, ids, css }) => (
						<style
							key={key}
							data-emotion={`${key} ${ids.join(' ')}`}
							dangerouslySetInnerHTML={{ __html: css }}
						/>
					))}
				</head>
				<body>
					{children}
					<ScrollRestoration />
					<Scripts />
					<LiveReload />
				</body>
			</html>
		);
	},
);

export default function App() {
	return (
		<Document>
			<CssVarsProvider theme={theme}>
				{getInitColorSchemeScript()}
				<CssBaseline />
				<Outlet />
			</CssVarsProvider>
		</Document>
	);
}

export function ErrorBoundary() {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		return (
			<div>
				<h1>
					{error.status} {error.statusText}
				</h1>
				<p>{error.data}</p>
			</div>
		);
	} else if (error instanceof Error) {
		return (
			<div>
				<h1>Error</h1>
				<p>{error.message}</p>
				<p>The stack trace is:</p>
				<pre>{error.stack}</pre>
			</div>
		);
	} else {
		return <h1>Unknown Error</h1>;
	}
}

