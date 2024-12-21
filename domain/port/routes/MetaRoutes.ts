import { FastifyRequest, FastifyInstance, FastifyReply, FastifyPluginOptions } from "fastify";

import { CreateMetaController } from "../../../adapter/controllers/meta/CreateMeta";
import { GetMetasController } from "../../../adapter/controllers/meta/GetMetas";

export default function MetaRoutes(fastify: FastifyInstance, plugin: FastifyPluginOptions) {

    fastify.post("/auth/meta/create/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateMetaController().Handle(request, reply);
    });

    fastify.get("/auth/meta/get-all/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetMetasController().Handle(request, reply);
    });
}