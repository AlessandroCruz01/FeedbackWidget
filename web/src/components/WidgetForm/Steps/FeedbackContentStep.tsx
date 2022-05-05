import { ArrowLeft } from "phosphor-react";
import { FeedBackType, feedBackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
    feedbackType: FeedBackType
    onFeedbackRestartRequested: () => void

}

export function FeedbackContentStep({feedbackType , onFeedbackRestartRequested} : FeedbackContentStepProps){

    const feedbackTypeInfo = feedBackTypes[feedbackType];

    return(
        <>
            <header>

                <button 
                    className="
                        top-5 
                        left-5 
                        absolute 
                        text-zinc-400 
                        hover:text-zinc-100
                    " 
                    type="button" 
                    onClick={onFeedbackRestartRequested}
                >

                    <ArrowLeft weight="bold" className="w-4 h-4"/>

                </button>
     
                <span className="text-xl leading-6 flex items-center gap-2">

                    <img 
                        src={feedbackTypeInfo.image.source} 
                        alt={feedbackTypeInfo.image.alt} 
                        className="w-6 h-6"
                    />

                    {feedbackTypeInfo.title}

                </span>

                <CloseButton />
            </header>

            <form className="my-4 w-full">

                <textarea 
                    className="
                        min-w[304px]
                        w-full
                        min-h-[112px]
                        text-sm 
                        placeholder-zinc-400 
                        border-zinc-600 
                        bg-transparent 
                        rounded-md 
                        focus:border-brand-500 
                        focus:ring-brand-500
                        focus:ring-1
                        resize-none
                        focus:outline-none
                        scrollbar-thumb-zinc-400
                        scrollbar-thin
                    " 
                    placeholder="Conte com detalhes o que esta acontecendo..."
                >
                </textarea>

                <footer>
                    <button
                        type="submit"
                        className="
                            p-2
                            bg-brand-500
                            rounded-md
                            border-transparent
                            flex-1 flex 
                            justify-center 
                            items-center
                            text-sm
                            hover:bg-brand-300
                        "   
                    >

                        Enviar feedback

                    </button>
                </footer>
            </form>


        </>
    );
}