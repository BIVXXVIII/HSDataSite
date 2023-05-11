import { LayaoutProps } from "@/types/types";
import { useRouter } from "next/router";
import Header from "./LayaoutComponents/Header";

export default function Layaout({ children, lang, changeLang }: LayaoutProps) {
    const router = useRouter();
    const route = router.asPath;

    return (
        <div className="Layaout">
            <Header lang={lang} changeLang={changeLang} />
            <div className="flex-grow flex flex-col px-5">{children}</div>
            <footer className="flex justify-center items-center py-10 bg-slate-950/50 px-5">
                change lang:
                <button
                    className="px-2 py-1 bg-slate-950 rounded-md ml-1"
                    onClick={changeLang}
                >
                    {lang === "ru_RU" ? "Ru" : "En"}
                </button>
            </footer>
        </div>
    );
}
