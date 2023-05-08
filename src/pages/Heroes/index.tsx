import HeroCard from '@/components/HeroCard';
import Layaout from '@/components/Layaout';
import Preloader from '@/components/Preloader';
import React, { useEffect, useState } from 'react'
import { requestHeroes, access_token } from '@/func/fetch';
import { LangProps } from '@/types/types';

export default function Heroes({ lang, changeLang }: LangProps) {

    const [data, setData] = useState<never[] | any[]>([])
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    useEffect(() => {
        // requestHeroes(setData, setIsLoaded, lang)
        const pagesId = [1, 2, 3]

        const request = pagesId.map(page => fetch(`https://us.api.blizzard.com/hearthstone/cards?locale=${lang}&gameMode=battlegrounds&bgCardType=hero&page=${page}&access_token=${access_token}`)
            .then(res =>
                res.json()
            ))
        const tempData: any = []
        Promise.all(request)
            .then(response => response.map(res => tempData.push(...res.cards)))
            .then(() => {
                setData(tempData)
                setIsLoaded(true)
            })
    }, [])
    if (isLoaded) {
        return (
            <Layaout lang={lang} changeLang={changeLang}>
                <div className='flex flex-wrap justify-center gap-2 pt-4 pb-10'>{
                    data.map(card => <HeroCard name={card.name} image={card.image} id={card.id} />)}
                </div>
            </Layaout>
        )
    }
    return
    <Preloader lang={lang} changeLang={changeLang} />

}
