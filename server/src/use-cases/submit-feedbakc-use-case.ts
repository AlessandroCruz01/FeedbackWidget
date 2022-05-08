//camada de aplicação

import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repostitory";

interface SubmitFeedbackUseCaseRequest {
    type: string,
    comment: string,
    screenshot?: string
}

export class SubmitFeedbackUseCase {

    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter

    ){}

    async execute(request: SubmitFeedbackUseCaseRequest){
        const {type, comment, screenshot} = request;

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot
        });

        await this.mailAdapter.sendMail({
            subject: "Novo Feedback",
            body: [
                "<div style=\"font-family: sans-serif\">",
                `<p>Tipo do feedbakc: ${type}</p>`,
                `<p>Comentario: ${comment}</p>`,
                "</div>",
            ].join("\n")

        });
    }
}