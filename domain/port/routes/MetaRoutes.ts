import { FastifyRequest, FastifyInstance, FastifyReply, FastifyPluginOptions } from "fastify";

import { CreateMetaController } from "../../../adapter/controllers/meta/CreateMeta";
import { GetMetasController } from "../../../adapter/controllers/meta/GetMetas";
import { UpdateMetaController } from "../../../adapter/controllers/meta/UpdateMeta";
import { DeleteMetaController } from "../../../adapter/controllers/meta/DeleteMeta";
import { GetLengthController } from "../../../adapter/controllers/meta/GetLength";

export default function MetaRoutes(fastify: FastifyInstance, plugin: FastifyPluginOptions) {

    fastify.post("/auth/meta/create/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateMetaController().Handle(request, reply);
    });

    fastify.get("/auth/meta/get-all/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetMetasController().Handle(request, reply);
    });

    fastify.put("/auth/meta/update/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateMetaController().Handle(request, reply);
    });

    fastify.delete("/auth/meta/delete/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteMetaController().Handle(request, reply);
    });

    fastify.get("/auth/meta/get-length/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetLengthController().Handle(request, reply);
    });
}