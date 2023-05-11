import { CardDataInterface, SetCardDataInterface } from "@/types/types";

export const access_token = `EUl2rXNtJObDobYMMl4TBn9M5kqfkeB9gq`;

export const requestCards = (
    setData: Function,
    setIsLoaded: Function,
    lang: string,
    pagesId: number[],
    bgCardType: string
) => {
    const tempData: any = [];

    const request = pagesId.map((page) =>
        fetch(
            `https://us.api.blizzard.com/hearthstone/cards?locale=${lang}&gameMode=battlegrounds&bgCardType=${bgCardType}&page=${page}&access_token=${access_token}`
        ).then((res) => res.json())
    );
    Promise.all(request)
        .then((res) => res.map((resItem) => tempData.push(...resItem.cards)))
        .then(() => {
            setData(tempData);
            setIsLoaded(true);
        });
};

export const cardDataRequest = (
    setData: SetCardDataInterface,
    id: string | string[] | undefined,
    cardType: string,
    lang: string
) => {
    fetch(
        `https://us.api.blizzard.com/hearthstone/cards?locale=${lang}&gameMode=battlegrounds&bgCardType=${cardType}&id=${id}&access_token=${access_token}`
    )
        .then((res) => res.json())
        .then(setData);
};

export const elementRequest = (
    SetStateAction: SetCardDataInterface,
    id: number,
    lang: string
) => {
    return fetch(
        `https://us.api.blizzard.com/hearthstone/cards?locale=${lang}&gameMode=battlegrounds&bgCardType=hero&id=${id}&access_token=${access_token}`
    )
        .then((res) => res.json())
        .then(SetStateAction);
};
