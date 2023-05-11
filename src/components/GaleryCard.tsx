import React from 'react'
import { CardProps } from '@/types/types'
import Link from 'next/link'

type cardType = {
    type: string
}

type GaleryCardProps = CardProps & cardType

export default function GaleryCard({ name, image, id, type }: GaleryCardProps) {
    const cardlargetitle = name.length < 30 ? 'card__title text-[12px] leading-7' : 'card__title text-[9px] leading-7'

    const cardLink = `/${type}/${id}`

    return (
        <Link href={cardLink} key={`${name}${id}`}>

            <div className='card' >
                <div className={name.length < 18 ? 'card__title' : cardlargetitle}>{name}</div>
                <img src={image} alt={name} key={name} className="relative left-2 " />
            </div>
        </Link>
    )
}
