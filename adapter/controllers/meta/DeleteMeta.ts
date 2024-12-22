import { FastifyRequest, FastifyReply } from "fastify";
import { MetaDeleteProps } from "../../../domain/port/utils/metaUtils";
import { DeleteMeta } from "../../../domain/services/meta/DeleteMeta";

export class DeleteMetaController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        try {
            const { id } = request.query as MetaDeleteProps;

            if(!id) {
                return reply.status(400).send("Informe o id da meta que deseja deletar.");
            };

            const Meta = new DeleteMeta();
            const Delete = await Meta.Execute({ id });

            reply.send(Delete);
            return reply.status(200).send("Sua meta foi deletada com sucesso");

        } catch (err) {

            console.log(err);
            return reply.status(500).send({ err: "Erro interno no servidor." });

        };
    };
};