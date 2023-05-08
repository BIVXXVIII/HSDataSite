import React from 'react'
import Layaout from './Layaout'
import { LangProps } from '@/types/types'



export default function Preloader({ lang, changeLang }: LangProps) {
    return (
        <Layaout lang={lang} changeLang={changeLang}>
            <div className='flex flex-grow w-full h-full justify-center items-center'><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
        </Layaout>
    )
}

export function CardNotFound({ lang, changeLang }: LangProps) {
    return (
        <Layaout lang={lang} changeLang={changeLang}>
            <div className="flex-grow flex items-center justify-center text-3xl font-extrabold capitalize">card not found</div>
        </Layaout>
    )
}