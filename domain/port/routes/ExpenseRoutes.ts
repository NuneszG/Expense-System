import { FastifyRequest, FastifyInstance, FastifyReply, FastifyPluginOptions } from "fastify";

import { CreateExpenseController } from "../../../adapter/controllers/expense/CreateExpense";
import { GetExpensesController } from "../../../adapter/controllers/expense/GetExpenses";
import { DeleteExpenseController } from "../../../adapter/controllers/expense/DeleteExpense";
import { GetLengthController } from "../../../adapter/controllers/expense/GetLength";
import { UpdateExpenseController } from "../../../adapter/controllers/expense/UpdateExpense";

export default function ExpenseRoutes(fastify: FastifyInstance, plugin: FastifyPluginOptions) {
    
    fastify.post("/auth/expense/create/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateExpenseController().Handle(request, reply);
    });

    fastify.get("/auth/expense/get/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetExpensesController().Handle(request, reply);
    });

    fastify.delete("/auth/expense/delete/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteExpenseController().Handle(request, reply);
    });

    fastify.put("/auth/expense/update/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateExpenseController().Handle(request, reply);
    });

    fastify.get("/auth/expense/get-length/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetLengthController().Handle(request, reply);
    });
};