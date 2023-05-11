import { MouseEventHandler } from "react"
import { Dispatch, SetStateAction } from "react"

export type CardProps = {
    name: string,
    image: string,
    id: number,

}

type children = JSX.Element | Array<any> | string

export interface LangProps  {
    lang: string,
    changeLang: MouseEventHandler
}

export interface ChildrenProps  {
        children?: children,
}

export type LayaoutProps = LangProps & ChildrenProps

export interface CardDataInterface{
    cardCount: number,
    cards: any[],
    page: number,
    pageCount: number
}

export interface cardData {
    image: string,
    text: string,
    armor: string | number,
    id: number
}

export type SubCardProps = {
    data: cardData
}


export interface HeroInfoProps {
    card: cardData,
    ability: cardData,
}
export type SetCardDataInterface = Dispatch<SetStateAction<CardDataInterface | null>>

export type CardTypeLinesProps = {
    cardtype: [number, number];
};

export interface cardType {
    name: string;
    id: number;
}