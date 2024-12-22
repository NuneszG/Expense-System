import { FastifyRequest, FastifyReply } from "fastify";
import { GetLength } from "../../../domain/services/meta/GetLength";

export class GetLengthController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        try {
            const Metas = new GetLength();
            const Length = await Metas.Execute();

            reply.send(Length);
            return reply.status(200).send("Todos os dados foram retornados.");

        } catch (err) {

            console.log(err);
            return reply.status(500).send({ err: "Erro interno no servidor." });

        };
    };
};