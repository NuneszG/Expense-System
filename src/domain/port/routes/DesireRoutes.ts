import { FastifyRequest, FastifyInstance, FastifyReply, FastifyPluginOptions } from "fastify";

import { CreateDesireController } from "../../../adapter/controllers/desire/CreateDesire";

export default function DesireRoutes(fastify: FastifyInstance, plugin: FastifyPluginOptions) {

    fastify.post("/auth/desire/create/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateDesireController().Handle(request, reply);
    });
};