import Layaout from "@/components/Layaout";
import { LangProps } from "@/types/types";

export default function Home({ lang, changeLang }: LangProps) {
    if (lang === 'en_US') {
        return (
            <div>
                <Layaout lang={lang} changeLang={changeLang}>
                    Hello on HS application it made for fun and practice
                    <div>tech what use on this app:</div>

                    <div>JSframework: <b>NEXT.js (REACT.js)</b></div>
                    <div>language: <b>TypeScript</b></div>
                    <div>style: <b>Taillwind CSS</b></div>

                    {/* to do on future:
                Refactoring Pages for reusable components
                
                */}
                </Layaout>
            </div>
        )
    }
    return (
        <div>
            <Layaout lang={lang} changeLang={changeLang}>
                <p className="pb-4 max-w-[600px]">
                    Вітаю! Цей сайт написанно за для розваги та практики.
                    Для практики використовувались данні з Blizzard Hearthstone API. І завдяки ним генерувались сторінки героїв та істот.
                    В майбутньому збираюсь цей сайт розширювати і доповнювати по мірі зростання власних навичок, та наявності вільного часу.
                </p>

                <div>Технології що використовувались на сайті:</div>

                <div>JS фремворк: <b>NEXT.js (REACT.js)</b></div>
                <div>Мова програмування: <b>TypeScript</b></div>
                <div>Стилі: <b>Taillwind CSS</b></div>


                {/* to do on future:
                Refactoring Pages for reusable components
                
                */}
            </Layaout>
        </div>
    )
}
