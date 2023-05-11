import React, { useEffect, useState } from "react";
import { CardTypeLinesProps, cardType } from "@/types/types";


export const cardTypes: cardType[] = [
    {
        name: "Dragons",
        id: 24,
    },
    {
        name: "Beast",
        id: 20,
    },
    {
        name: "Mech",
        id: 17
    },
    {
        name: 'Undead',
        id: 11
    },
    {
        name: 'Demon',
        id: 15
    },
    {
        name: 'Pirate',
        id: 23
    },
    {
        name: 'Naga',
        id: 92
    },
    {
        name: 'Quilboar',
        id: 43
    },
    {
        name: "Elemental",
        id: 18
    }

];



export default function CardTypeLine({ cardtype }: CardTypeLinesProps) {
    const [string, setString] = useState("no type yet");
    const destructor = () => {
        const tempType: string[] = []
        if (cardtype[0] !== 0) {
            cardTypes.map(type => {
                if (cardtype[0] === type.id) {
                    tempType.push(type.name)
                }
            })
            if (cardtype[1] !== 0) {
                cardTypes.map(type => {
                    if (cardtype[1] === type.id) {
                        tempType.push(type.name)
                    }
                })
            }
            setString(tempType.join(' / '))
        }

    };
    useEffect(() => {
        destructor();
    }, []);
    return <div>Type: {string}</div>;
}
