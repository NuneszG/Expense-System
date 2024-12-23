import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateExpense } from "../../../domain/services/expense/UpdateExpense";
import { ExpenseUpdateProps } from "../../../domain/port/utils/expenseUtils";

export class UpdateExpenseController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        try {
            const { id } = request.query as ExpenseUpdateProps;
            const { name, price, amount, description, data } = request.body as ExpenseUpdateProps;

            if(!id || !name || !price || !amount || !description || !data) {
                return reply.status(400).send("Por favor, preencha todos os campos e reenvie novamente.");
            };

            const Expenses = new UpdateExpense();
            const Update = await Expenses.Execute({ id, name, price, amount, data, description });

    
            reply.send(Update);
            return reply.status(200).send(`${Update.name} acabou de ser atualizado.`);

        } catch (err) {

            console.log(err);
            return reply.status(500).send({ err: "Erro interno no servidor." });

        };  
    };
};