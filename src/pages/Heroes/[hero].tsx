import Layaout from "@/components/Layaout";
import Preloader, { CardNotFound } from "@/components/Preloader";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { cardDataRequest, elementRequest } from "@/func/fetch";
import { CardDataInterface, LangProps } from "@/types/types";
import { HeroInfo } from "@/components/HeroCard";

export default function HeroCard({ lang, changeLang }: LangProps) {
    const [data, setData] = useState<null | CardDataInterface>(null)
    const [abilityData, setAbilityData] = useState<null | CardDataInterface>(null)
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const router = useRouter()
    const id: string | string[] | undefined = router.query.hero
    useEffect(
        () => {
            const tempData = []
            if (id !== undefined) {
                cardDataRequest(setData, id, 'hero', lang)
            }
        },
        [id]
    )

    useEffect(
        () => {
            if (data !== null && data.cardCount !== 0) {
                const abilityId = data.cards[0]?.childIds[0]
                const abilityFetch = elementRequest(setAbilityData, abilityId, lang)
                Promise.all([abilityFetch])
                    .then(() => { setIsLoaded(true) })

            } else {
                setIsLoaded(true)
            }

        }, [data]
    )


    if (isLoaded && data !== null) {
        if (data.cardCount === 0) {
            return <CardNotFound lang={lang} changeLang={changeLang} />
        }
        const card = data?.cards[0]
        const ability = abilityData?.cards[0]

        return (
            <Layaout lang={lang} changeLang={changeLang}>
                <div className="flex gap-5 flex-wrap">
                    <div className="text-center">
                        <span className="text-lg font-extrabold">{card.name}</span>
                        <img src={card.image} />
                    </div>
                    <HeroInfo card={card} ability={ability} />
                </div>
            </Layaout>
        )
    }
    return (
        <Preloader lang={lang} changeLang={changeLang} />
    )
}
