import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useState } from 'react'


export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    const router = useRouter()
    const [lang, SetLang] = useState('ru_RU')
    const changeLang = () => {
        if (lang === 'ru_RU') {
            SetLang("en_US")
            router.push('/')
            return
        }
        SetLang('ru_RU')
        router.push('/')
    }
    return <SessionProvider session={session}>
        <Component {...pageProps} lang={lang} changeLang={changeLang} />
    </SessionProvider>
}
