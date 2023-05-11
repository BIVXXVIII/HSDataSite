import CardTypeLine from "@/components/CardTypeLine"
import Layaout from "@/components/Layaout"
import Preloader from "@/components/Preloader"
import { access_token } from "@/func/fetch"
import { CardDataInterface, LangProps } from "@/types/types"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"



export default function MinionCard({ lang, changeLang }: LangProps) {
    const [data, setData] = useState<CardDataInterface | null>(null)
    const [goldenData, setGoldenData] = useState<CardDataInterface | null>(null)
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const router = useRouter()
    const id: string | string[] | undefined = router.query.card

    useEffect(
        () => {
            if (id !== undefined) {
                fetch(`https://us.api.blizzard.com/hearthstone/cards?locale=${lang}&gameMode=battlegrounds&bgCardType=minion&id=${id}&access_token=${access_token}`)
                    .then(res => res.json())
                    .then(setData)
            }
        },
        [id]
    )

    useEffect(
        () => {
            if (data !== null) {
                if (data.cardCount !== 0) {
                    const goldCardId = data.cards[0].battlegrounds.upgradeId
                    fetch(`https://us.api.blizzard.com/hearthstone/cards?locale=${lang}&gameMode=battlegrounds&bgCardType=minion&id=${goldCardId}&access_token=${access_token}`)
                        .then(res => res.json())
                        .then(setGoldenData)
                        .then(() => {
                            setIsLoaded(true)
                        })
                } else {
                    setIsLoaded(true)
                }
            }
        }, [data]
    )

    if (isLoaded === true && data !== null) {
        if (data.cardCount === 0) {
            return <Layaout lang={lang} changeLang={changeLang}>
                <div className="flex-grow flex items-center justify-center text-3xl font-extrabold capitalize">card not found</div>
            </Layaout>
        }

        const card = data.cards[0]
        const goldenCard = goldenData?.cards[0]
        const goldenCardClass = "text-yellow-200"
        const multyClassId = card.multiTypeIds ? card.multiTypeIds[0] : 0
        const miniontype: [number, number] = [card.minionTypeId ? card.minionTypeId : 0, multyClassId]
        if (goldenData === null || goldenData.cardCount === 0) {
            return (
                <Layaout lang={lang} changeLang={changeLang}>
                    <div className="flex">
                        <div className="flex flex-wrap">
                            <img
                                src={card?.battlegrounds.image}
                                alt={card.name}
                                className="w-[400px]"
                            />
                        </div>
                        {/* card info */}
                        <div className="flex flex-col">
                            <div>Name: {card.name}</div>
                            <div><CardTypeLine cardtype={miniontype} /></div>
                            <div>Tier: {card?.battlegrounds.tier}</div>
                            <div>Stats: {card.attack}/{card.health}</div>
                            <div>Text: <span dangerouslySetInnerHTML={{ __html: card.text }}></span></div>
                            <div>no golden card data</div>
                        </div>
                    </div>
                </Layaout >
            )
        }

        return (
            <Layaout lang={lang} changeLang={changeLang}>
                <div className="flex flex-wrap">
                    <div className="flex flex-wrap">
                        <img src={card?.battlegrounds.image} alt={card.name} className="w-[400px]" />
                        <img src={goldenCard?.battlegrounds.imageGold} className="w-[400px]" />
                    </div>
                    <div className="flex flex-col">
                        <div>Name: {card.name}</div>
                        <div><CardTypeLine cardtype={miniontype} /></div>
                        <div>Tier: {card?.battlegrounds.tier}</div>
                        <div>Stats: {card.attack}/{card.health}</div>
                        <div>Text: <span dangerouslySetInnerHTML={{ __html: card.text }}></span></div>
                        <div className={goldenCardClass}>
                            Gold stats: {goldenCard?.attack}/{goldenCard?.health}
                        </div>
                        <div className={goldenCardClass}>Upgrade text: <span dangerouslySetInnerHTML={{
                            __html: goldenCard?.text
                        }}></span></div>

                    </div>
                </div>
            </Layaout >
        )

    }
    return (

        <Preloader lang={lang} changeLang={changeLang} />

    )
}
