import GaleryCard from '@/components/GaleryCard';
import Layaout from '@/components/Layaout';
import Preloader from '@/components/Preloader';
import React, { useEffect, useState } from 'react'
import { requestCards } from '@/func/fetch';
import { LangProps } from '@/types/types';

export default function Heroes({ lang, changeLang }: LangProps) {

    const [data, setData] = useState<never[] | any[]>([])
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const pagesId = [1, 2, 3]
    useEffect(() => {
        requestCards(setData, setIsLoaded, lang, pagesId, 'hero')
    }, [])
    if (isLoaded) {
        return (
            <Layaout lang={lang} changeLang={changeLang}>
                <div className='flex flex-wrap justify-center gap-2 pt-4 pb-10'>{
                    data.map(card => <GaleryCard name={card.name} image={card.image} id={card.id} key={`${card.name}${card.id}`} type='Heroes' />)}
                </div>
            </Layaout>
        )
    }
    return
    <Preloader lang={lang} changeLang={changeLang} />

}
