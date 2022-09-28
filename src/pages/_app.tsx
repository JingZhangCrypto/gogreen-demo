import Head from 'next/head'
import { Router } from 'next/router'
import { Toaster } from 'react-hot-toast'
import { Web3ReactProvider } from '@web3-react/core'
import type { AppProps } from 'next/app'
import NProgress from 'nprogress'
import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/cache'

import type { NextPage } from 'next'
import themeConfig from 'src/configs/themeConfig'
import UserLayout from 'src/layouts/UserLayout'
import ThemeComponent from 'src/@core/theme/ThemeComponent'
import WindowWrapper from 'src/@core/components/window-wrapper'
import {
  SettingsConsumer,
  SettingsProvider,
} from 'src/@core/context/settingsContext'
import ReactHotToast from 'src/@core/styles/libs/react-hot-toast'
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'
import {connectors} from 'src/connectors'

// ** Prismjs Styles
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'src/utils/i18n'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** Global css styles
import '../../styles/globals.css'

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // Variables
  const getLayout =
    Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

  const setConfig = Component.setConfig ?? undefined

  return (
    <Web3ReactProvider connectors={connectors}>
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{`${themeConfig.templateName} - Dapp`}</title>
        <meta
          name="description"
          content={`${themeConfig.templateName} – The Dapp of Gogreen`}
        />
        <meta name="keywords" content="Gogreen, cronos, cro, ggr" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
        <SettingsConsumer>
          {({ settings }) => {
            return (
              <ThemeComponent settings={settings}>
                <WindowWrapper>
                      {getLayout(<Component {...pageProps} />)}
                </WindowWrapper>
                <ReactHotToast>
                  <Toaster
                    position={settings.toastPosition}
                    toastOptions={{ className: 'react-hot-toast' }}
                  />
                </ReactHotToast>
              </ThemeComponent>
            )
          }}
        </SettingsConsumer>
      </SettingsProvider>
      </CacheProvider>
    </Web3ReactProvider>
  )
}

export default App
