import { LangProps } from '@/types/types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function Header({ lang, changeLang }: LangProps) {
    const router = useRouter()
    const route = router.asPath

    const [burger, setBurger] = useState(false)

    return (
        <header className='header w-full relative px-2 py-1'>
            <div className=''>
                <img src="/HSlogo.png" alt="" className="w-8 bg-yellow-300 rounded-md md:hidden" onClick={() => { setBurger(!burger) }} />
            </div>
            <div className={burger ? 'absolute top-[100%] left-0 right-0 bg-gray-950/90 md:bg-transparent backdrop-blur	 py-1 px-2 md:flex md:justify-between md:static md:flex-grow' : 'hidden md:flex md:justify-between md:static md:flex-grow'}>
                <nav className='mb-1 md:flex md:gap-2'>
                    <Link href={'/'} key={'homeLink'} className={route === '/' ? 'header__link--active' : 'header__link'}>
                        <img src="/HSlogo.png" alt="" className="w-8 bg-yellow-300 rounded-md hidden md:block" />
                        <span >HS galery</span>
                    </Link>
                    <Link
                        href='/Heroes'
                        key={'HeroesLink'}
                        className={route.includes('/Heroes') ? 'header__link--active' : 'header__link'}
                    >Heroes</Link>
                    <Link
                        href={'/Cards'}
                        key={'CardsLink'}
                        className={route.includes('/Cards') ? 'header__link--active' : 'header__link'}
                    >Cards</Link>
                </nav>
                <div className='flex justify-between items-center flex-wrap text-center'>
                    <div className='text-xl font-bold text-white/80'>Change language:
                        <button
                            onClick={changeLang}
                            className='px-2 py-1 bg-blue-800 rounded-md ml-2 mr-2'
                        >{lang === 'ru_RU' ? 'RU' : "EN"}</button>
                    </div>
                    <Link
                        href={'/auth'}
                        key={'userPanel'}
                        className='px-4 py-2 bg-yellow-400 font-bold rounded-lg text-slate-950'>Login</Link>

                </div>
            </div>
        </header >
    )
}
