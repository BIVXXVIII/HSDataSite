import Layaout from '@/components/Layaout'
import Preloader from '@/components/Preloader'
import React, { useEffect, useState } from 'react'
import { requestCards } from '@/func/fetch'
import { LangProps } from '@/types/types'
import GaleryCard from '@/components/GaleryCard'


const sortFunction = (a: any, b: any) => {
    if (a.battlegrounds.tier < b.battlegrounds.tier) {
        return -1
    }
    if (a.battlegrounds.tier > b.battlegrounds.tier) {
        return 1
    }
    return 0
}

export default function Cards({ lang, changeLang }: LangProps) {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [data, setData] = useState<never[] | any[]>([])
    const [galery, setGalery] = useState<never[] | any[]>([])
    const pagesId = [1, 2, 3, 4, 5]
    useEffect(
        () => { requestCards(setData, setIsLoaded, lang, pagesId, 'minion') }, []
    )
    useEffect(
        () => {
            setGalery([...data.sort(sortFunction)])
        }, [data]
    )
    if (isLoaded) {
        const filterCards = (tier: number) => {
            setGalery([...data.filter(card => card.battlegrounds.tier === tier)])
        }
        const tierButtonClass = 'px-5 py-1 bg-yellow-950 w-6 text-black/90 font-extrabold hover:bg-yellow-600 hover:text-white duration-500 rounded-2xl text-center'
        return (
            <Layaout lang={lang} changeLang={changeLang}>
                <div className='flex gap-1'><span className='font-extrabold uppercase '>tier:</span>
                    <button onClick={() => { filterCards(1) }} className={tierButtonClass}>1</button>
                    <button onClick={() => { filterCards(2) }} className={tierButtonClass}>2</button>
                    <button onClick={() => { filterCards(3) }} className={tierButtonClass}>3</button>
                    <button onClick={() => { filterCards(4) }} className={tierButtonClass}>4</button>
                    <button onClick={() => { filterCards(5) }} className={tierButtonClass}>5</button>
                    <button onClick={() => { filterCards(6) }} className={tierButtonClass}>6</button>
                </div>
                <div className='flex flex-wrap justify-center gap-2 pt-4 pb-10'>

                    {galery.map(card => <GaleryCard
                        name={card.name}
                        image={card.battlegrounds?.image}
                        id={card.id}
                        key={`${card.name}${card.id}`}
                        type='Cards' />
                    )}
                </div>
            </Layaout>
        )
    }

    return (
        <Preloader lang={lang} changeLang={changeLang} />
    )
}
