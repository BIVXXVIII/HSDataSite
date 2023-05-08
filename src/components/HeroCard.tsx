import React from 'react'
import Link from 'next/link'
import { CardProps } from '@/types/types'

export default function HeroCard({ name, image, id }: CardProps) {
    const cardlargetitle = 'card__title text-xs leading-7'
    return (
        <Link href={`/Heroes/${id}`} key={`${id}${name}`}>
            <div className='card'>
                <div className={name.length < 19 ? 'card__title' : cardlargetitle}>{name}</div>

                <img src={image} className='relative left-[8px]' />
            </div>
        </Link>
    )
}

interface cardData {
    image: string,
    text: string,
    armor: string | number,
    id: number
}

type SubCardProps = {
    data: cardData
}

function HeroSubcardInfo({ data }: SubCardProps) {
    const subcardClass = `flex bg-slate-700/50 flex-wrap items-center justify-center text-center px-2 py-1 hover:scale-125 hover:bg-slate-700 duration-200`
    return (
        <div className={subcardClass}>
            <img
                src={data?.image}
                alt="ability"
                className="w-[230px]" />
            <div
                className="w-[230px] "
                dangerouslySetInnerHTML={{ __html: data?.text }}></div>
        </div>
    )
}

interface HeroInfoProps {
    card: cardData,
    ability: cardData,
    buddy: cardData
}

export function HeroInfo({ card, ability, buddy }: HeroInfoProps) {

    return (
        <div className="flex flex-col gap-1 flex-wrap ">
            <div className="text-white/50"><i><b>id:</b> {card.id}</i></div>
            <div><b>armor:</b> {card.armor}</div>
            <HeroSubcardInfo data={ability} />
            <HeroSubcardInfo data={buddy} />
            <div>in future:
                quests information
                Best bans/strategies,
                personal staticstic
            </div>
        </div>
    )
}