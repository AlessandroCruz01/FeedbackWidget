import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedBackTypes = {
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

export type FeedBackType = keyof typeof feedBackTypes


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

            {!feedBackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedBackType}/>
            ) : (
                <p>Hello World</p>
            )}

            
            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="http://rocketseat.com.br"> Rocketseat </a> 
            </footer>
        </div>

    );
}