import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

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
    const [feedbackSent, setFeedbackSent] = useState(false);

    
    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedBackType(null);
    }

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

            {/* Fluxo do envio do feedback */}
            {
                feedbackSent 
                    ? (<FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>) 
                    : (
                        <>     
                            {!feedBackType ? (
                                <FeedbackTypeStep onFeedbackTypeChanged={setFeedBackType}/>
                            ) : (
                                <FeedbackContentStep 
                                    feedbackType={feedBackType} 
                                    onFeedbackRestartRequested={handleRestartFeedback}
                                    onFeedbackSent={() => setFeedbackSent(true)}
                                />
                            )}
                        </>
                    )

            }

            
            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="http://rocketseat.com.br"> Rocketseat </a> 
            </footer>
        </div>

    );
}