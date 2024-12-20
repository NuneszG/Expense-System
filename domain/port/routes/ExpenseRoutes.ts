import { FastifyRequest, FastifyInstance, FastifyReply, FastifyPluginOptions } from "fastify";

import { CreateExpenseController } from "../../../adapter/controllers/expense/CreateExpense";
import { GetExpensesController } from "../../../adapter/controllers/expense/GetExpenses";

export default function ExpenseRoutes(fastify: FastifyInstance, plugin: FastifyPluginOptions) {
    
    fastify.post("/auth/expense/create/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateExpenseController().Handle(request, reply)
    });

    fastify.get("/auth/expense/get/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetExpensesController().Handle(request, reply)
    });
};