import { MouseEventHandler } from "react"

export type CardProps = {
    name: string,
    image: string,
    id: number
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