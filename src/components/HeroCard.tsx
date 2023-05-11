import React from "react";
import { HeroInfoProps, SubCardProps } from "@/types/types";

function HeroSubcardInfo({ data }: SubCardProps) {
    const subcardClass = `flex bg-slate-700/50 flex-wrap items-center justify-center text-center px-2 py-1 hover:scale-125 hover:bg-slate-700 duration-200 rounded-md`;
    return (
        <div className={subcardClass}>
            <img src={data?.image} alt="ability" className="w-[230px]" />
            <div
                className="w-[230px] "
                dangerouslySetInnerHTML={{ __html: data?.text }}
            ></div>
        </div>
    );
}

export function HeroInfo({ card, ability }: HeroInfoProps) {
    console.log(card);
    return (
        <div className="flex flex-col gap-1 flex-wrap ">
            <div className="text-white/50">
                <i>
                    <b>id:</b> {card.id}
                </i>
            </div>
            <div>
                <b>armor:</b> {card.armor}
            </div>
            <HeroSubcardInfo data={ability} />
            <div>
                in future: quests information Best bans/strategies, personal
                staticstic
            </div>
        </div>
    );
}
