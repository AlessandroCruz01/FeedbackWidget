import { CloseButton } from "./CloseButton";

import bugImageUrl from "../assets/bug.svg";
import ideaImageUrl from "../assets/idea.svg";
import thoughtImageUrl from "../assets/thought.svg";
import { useState } from "react";

const feedBackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImageUrl,
            alt: "Imagem de um inseto"
        }
        
    },

    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImageUrl,
            alt: "Imagem de uma lampada"
        }
    },

    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImageUrl,
            alt: "imagem de um balao de pensamento"
        }
    },

};

type FeedBackType = keyof typeof feedBackTypes


export function WidgetForm() {

    const [feedBackType, setFeedBackType] = useState<FeedBackType | null>(null);

    return(

        <div 
            className="
                bg-zinc-900 
                p-4 relative 
                rounded-2xl 
                mb-4 flex 
                flex-col 
                items-center 
                shadow-lg
                w-[calc(100vw-2rem)]
                md:w-auto
            "
        > 
            
            <header>
                <CloseButton />
                <span className="text-xl leading-6">Deixe seu feedback</span>

            </header>

            <div className="flex py-8 gap-2 w-full">

                { Object.entries(feedBackTypes).map(([key, value]) => {

                    return(

                        <button
                            key={key}
                            className="
                                bg-zinc-800 
                                rounded-lg 
                                py-5 
                                w-24 
                                flex-1 
                                flex 
                                flex-col 
                                items-center 
                                gap-2
                                border-2 
                                border-transparent 
                                hover:border-brand-500
                                focus:border-brand-500
                                focus:outline-none
                            "
                            type="button"
                            onClick={() => setFeedBackType(null)}
                        >

                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    );

                }) }

            </div>

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="http://rocketseat.com.br"> Rocketseat </a> 
            </footer>
        </div>

    );
}