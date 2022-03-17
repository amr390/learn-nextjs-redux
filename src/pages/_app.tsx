import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '@redux/store'
import { Notifications } from '@features/notifications/components/Notifications'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
        <Notifications />
      </Provider>
    </>
  )
}

export default MyApp
