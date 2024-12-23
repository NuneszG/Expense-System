import { FastifyRequest, FastifyReply } from "fastify";
import { GetExpenses } from "../../../domain/services/expense/GetExpenses";

export class GetExpensesController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        try {
            const Expenses = new GetExpenses();
            const GetAll = await Expenses.Execute();
    
            reply.send(GetAll);
            return reply.status(200).send("Todos as despesas foram retornadas.");

        } catch (err) {

            console.log(err);
            return reply.status(500).send({ err: "Erro interno no servidor." });

        };  
    };
};