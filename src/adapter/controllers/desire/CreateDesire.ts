import { FastifyRequest, FastifyReply } from "fastify";
import { CreateDesire } from "../../../domain/services/desire/CreateDesire";
import { DesireProp } from "../../../domain/port/utils/desireUtils";

export class CreateDesireController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        try {
            const { name, price, amount } = request.body as DesireProp;

            if(!name || !price || !amount) {
                return reply.status(400).send("Preencha todos os campos.");
            };

            const Desire = new CreateDesire();
            const Create = await Desire.Execute({ name, price, amount });

            reply.send(Create);
            return reply.status(201).send("O desejo foi criado com sucesso");

        } catch (err) {

            console.log(err);
            return reply.status(500).send({ err: "Erro interno no servidor." });

        };
    };
};
