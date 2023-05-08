import Layaout from '@/components/Layaout'
import Preloader from '@/components/Preloader'
import React, { useEffect, useState } from 'react'
import { requestCards } from '@/func/fetch'
import MinionCard from '@/components/MinionCard'
import { CardDataInterface, LangProps } from '@/types/types'


export default function Cards({ lang, changeLang }: LangProps) {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [data, setData] = useState<never[] | any[]>([])

    useEffect(
        () => { requestCards(setData, setIsLoaded, lang) }, []
    )

    if (isLoaded) {
        const cardsUnsorted = data.map(card =>
            <div>
                <div>{card.name}</div>
                <img src={card.battlegrounds.image} alt={card.name} />
            </div>
        )

        const sortFunction = (a: any, b: any) => {
            if (a.battlegrounds.tier < b.battlegrounds.tier) {
                return -1
            }
            if (a.battlegrounds.tier > b.battlegrounds.tier) {
                return 1
            }
            return 0
        }

        const sortCards = [...data]
        sortCards.sort(sortFunction)
        return (
            <Layaout lang={lang} changeLang={changeLang}>
                <div className='flex flex-wrap justify-center gap-2 pt-4 pb-10'>
                    {sortCards.map(card =>
                        <MinionCard title={card.name} image={card.battlegrounds.image} id={card.id} />
                    )}
                </div>
            </Layaout>
        )
    }

    return (
        <Preloader lang={lang} changeLang={changeLang} />
    )
}
