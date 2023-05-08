import { LayaoutProps } from "@/types/types"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"



export default function Layaout({ children, lang, changeLang }: LayaoutProps) {
    const router = useRouter()
    const route = router.asPath
    const linkClass = "hover:scale-110 duration-150 font-bold text-white/50 hover:text-white/80"
    const activeLink = `${linkClass} text-white/90 hover:text-white scale-110`
    return (
        <div className='flex flex-col w-full min-h-screen bg-gradient-to-b from-blue-950 to-slate-800 text-white text-lg '>
            <header className="flex justify-between py-5 sticky top-0 z-50 bg-blue-950/80 px-5">
                <nav className="flex gap-8">
                    <Link href={'/'} key={'homeLink'} className={route === '/' ? activeLink : linkClass}>Home</Link>
                    <Link href='/Heroes' key={'HeroesLink'} className={route.includes('/Heroes') ? activeLink : linkClass}>Heroes</Link>
                    <Link href={'/Cards'} key={'CardsLink'} className={route.includes('/Cards') ? activeLink : linkClass}>Cards</Link>
                </nav>
                <div className=" flex gap-2">
                    <button onClick={changeLang}>lang: {lang === 'ru_RU' ? 'Ru' : 'En'}</button>
                    <Link href={'/auth'} key={'userPanel'}>user panel</Link>
                </div>
            </header>
            <div className="flex-grow flex flex-col px-5">{children}</div>
            <footer className="flex justify-center items-center py-10 bg-slate-950/50 px-5">change lang: <button onClick={changeLang}>{lang}</button></footer>
        </div>
    )
}