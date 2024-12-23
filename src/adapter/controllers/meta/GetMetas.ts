import { FastifyRequest, FastifyReply } from "fastify";
import { GetMetas } from "../../../domain/services/meta/GetMetas";

export class GetMetasController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        try {
            const Metas = new GetMetas();
            const Get = await Metas.Execute();

            reply.send(Get);
            return reply.status(200).send("Todos os dados foram retornados.");

        } catch (err) {

            console.log(err);
            return reply.status(500).send({ err: "Erro interno no servidor." });

        };
    };
};