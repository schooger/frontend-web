import { createRoot } from 'react-dom/client'

import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core'

import '@style/index.css'
import App from '@layout/app.layout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <MantineProvider defaultColorScheme="light">
      <App />
    </MantineProvider>
  </QueryClientProvider>
)
