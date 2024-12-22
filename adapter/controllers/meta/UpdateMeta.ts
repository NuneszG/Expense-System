import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateMeta } from "../../../domain/services/meta/UpdateMeta";
import { MetaUpdateProps } from "../../../domain/port/utils/metaUtils";

export class UpdateMetaController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        try {
            const { id } = request.query as MetaUpdateProps;
            const { value, description } = request.body as MetaUpdateProps;

            if(!id || !value || !description) {
                return reply.status(400).send("Preencha todos os campos.");
            };

            const Meta = new UpdateMeta();
            const Update = await Meta.Execute({ id, value, description });

            reply.send(Update);
            return reply.status(200).send("A meta foi atualizada com sucesso.");

        } catch (err) {
            
            console.log(err);
            return reply.status(500).send({ err: "Erro interno no servidor." });

        };
    };
};