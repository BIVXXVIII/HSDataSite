import Link from "next/link"

type MinionCardProps = {
    title: string,
    image: string,
    id: number
}

export default function MinionCard({ title, image, id }: MinionCardProps) {
    const cardlargetitle = 'card__title text-[0.6rem] leading-7'
    const cardLink = `/Cards/${id}`

    return (
        <Link href={cardLink} key={`${title}${id}`}>
            <div className='card' >
                <div className={title.length < 19 ? 'card__title' : cardlargetitle}>{title}</div>
                <p className='text-xs'>{title.length}</p>
                <img src={image} alt={title} key={title} className="relative left-1 hover:left-2" />
            </div>
        </Link>
    )
}