import '@/styles/globals.css'
import SidebarProvider from './component/SidebarContext'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <SidebarProvider>
      <Component {...pageProps} />
    </SidebarProvider>
  );
}
