import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import Header from '../components/Header'

import appCss from '../styles.css?url'
import 'react-phone-number-input/style.css'
import { Toaster } from 'react-hot-toast'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'description',
        content:
          'Ferramenta gratuita para criar links diretos de conversa no WhatsApp usando apenas o número com DDD. Simples, rápido e eficiente para negócios.',
      },
      {
        name: 'keywords',
        content:
          'WhatsApp, link de conversa, gerador de link, API WhatsApp, número telefone, DDD Brasil, +55, wa.me, ferramenta brasileira',
      },
      {
        property: 'og:title',
        content: 'Gerador de Link WhatsApp - Conecte-se com um clique',
      },
      {
        property: 'og:description',
        content:
          'Crie instantaneamente um link para iniciar uma conversa no WhatsApp. Basta inserir o número com DDD (ex: +55 81 99999-9999).',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        title: 'WhatsApp Link Generator | Crie seu link de conversa direto',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <HeadContent />
      </head>
      <body>
        <Toaster
          toastOptions={{
            duration: 3000,
            position: 'top-center',
            style: {
              borderRadius: '8px',
              background: '#333',
              color: '#fff',
            },
          }}
        />
        <Header />
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
