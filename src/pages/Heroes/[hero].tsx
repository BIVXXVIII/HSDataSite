import Layaout from "@/components/Layaout";
import Preloader, { CardNotFound } from "@/components/Preloader";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { access_token } from "@/func/fetch";
import { CardDataInterface, LangProps } from "@/types/types";
import { HeroInfo } from "@/components/HeroCard";

export default function HeroCard({ lang, changeLang }: LangProps) {
    const [data, setData] = useState<null | CardDataInterface>(null)
    const [buddyData, setBuddyData] = useState<null | CardDataInterface>(null)
    const [abilityData, setAbilityData] = useState<null | CardDataInterface>(null)
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const router = useRouter()
    const id: string | string[] | undefined = router.query.hero
    useEffect(
        () => {
            const tempData = []
            if (id !== undefined) {
                fetch(`https://us.api.blizzard.com/hearthstone/cards?locale=${lang}&gameMode=battlegrounds&bgCardType=hero&id=${id}&access_token=${access_token}`)
                    .then(res => res.json())
                    .then(setData)
            }
        },
        [id]
    )

    useEffect(
        () => {

            if (data !== null && data.cardCount !== 0) {
                const abilityId = data.cards[0]?.childIds[0]
                const buddyId = data.cards[0]?.childIds[1]

                const abilityFetch = fetch(`https://us.api.blizzard.com/hearthstone/cards?locale=${lang}&gameMode=battlegrounds&bgCardType=hero&id=${abilityId}&access_token=${access_token}`)
                    .then(res => res.json())
                    .then(setAbilityData)

                const buddyFetch = fetch(`https://us.api.blizzard.com/hearthstone/cards?locale=${lang}&gameMode=battlegrounds&bgCardType=hero&id=${buddyId}&access_token=${access_token}`)
                    .then(res => res.json())
                    .then(setBuddyData)

                Promise.all([abilityFetch, buddyFetch])
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
        const buddy = buddyData?.cards[0]

        return (
            <Layaout lang={lang} changeLang={changeLang}>
                <div className="flex gap-5">
                    <div className="text-center">
                        <span className="text-lg font-extrabold">{card.name}</span>
                        <img src={card.image} />
                    </div>
                    <HeroInfo card={card} ability={ability} buddy={buddy} />
                </div>
            </Layaout>
        )
    }
    return (
        <Preloader lang={lang} changeLang={changeLang} />
    )
}
