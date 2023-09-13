import { useCallback, useState } from 'react';

import { CacheProvider } from '@emotion/react';
import ClientStyleContext from '~/styles/client.context';
import { RemixBrowser } from '@remix-run/react';
import createEmotionCache from '~/styles/createEmotionCache';
import { hydrateRoot } from 'react-dom/client';

interface ClientCacheProviderProps {
	children: React.ReactNode;
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
	const [cache, setCache] = useState(createEmotionCache());

	const reset = useCallback(() => {
		setCache(createEmotionCache());
	}, []);

	return (
		<ClientStyleContext.Provider value={{ reset }}>
			<CacheProvider value={cache}>{children}</CacheProvider>
		</ClientStyleContext.Provider>
	);
}

hydrateRoot(
	document,
	<ClientCacheProvider>
		<RemixBrowser />
	</ClientCacheProvider>,
);

