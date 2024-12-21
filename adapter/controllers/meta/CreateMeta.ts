import { FastifyRequest, FastifyReply } from "fastify";
import { CreateMeta } from "../../../domain/services/meta/CreateMeta";
import { MetaProps } from "../../../domain/port/utils/metaUtils";

export class CreateMetaController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        try {
            const { value, description } = request.body as MetaProps;

            if(!value || !description) {
                return reply.status(400).send("Preencha todos os campos e reenvie novamente.");
            };

            const Meta = new CreateMeta();
            const Create = await Meta.Execute({ value, description });

            reply.send(Create);
            return reply.status(201).send(`${Create.value} acabou de ser criado.`);

        } catch (err) {

            console.log(err);
            return reply.status(500).send({ err: "Erro interno no servidor." });

        };
    };
};