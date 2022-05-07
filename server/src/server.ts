//SQlite
import express from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";


const app = express();
app.use(express.json()); //Middleware



app.post("/feedbacks", async (req, res) => {
    const { type, comment, screenshot } = req.body;

    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot
        }
    });

    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "143427e47e60b5",
            pass: "8b81e8817b403f"
        }
    });
    
    await transport.sendMail({
        from: "Equipe Feedget <oi@feedget.com>",
        to: "Alessandro Cruz <alessandrocruzadm01@gmail.com>",
        subject: "Novo feedback",
        html: [
            "<div style=\"font-family: sans-serif\">",
            `<p>Tipo do feedbakc: ${type}</p>`,
            `<p>Comentario: ${comment}</p>`,
            "</div>",
        ].join("\n")
    
    });
    

    return res.status(201).json({data: feedback});
} );

app.listen(3333, () => {
    console.log("backend Exec");
});

