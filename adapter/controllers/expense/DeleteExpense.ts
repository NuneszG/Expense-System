import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteExpense } from "../../../domain/services/expense/DeleteExpense";
import { ExpenseDeleteProps } from "../../../domain/port/utils/expenseUtils";

export class DeleteExpenseController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        try {
            const { id } = request.query as ExpenseDeleteProps;

            if(!id) {
                return reply.status(400).send("Por favor, passe o identificador corretamente e faça a requisição novamente.");
            };

            const Expense = new DeleteExpense();
            const Delete = await Expense.Execute({ id });

            reply.send(Delete);
            return reply.status(200).send("A despesa foi deletada do sistema com sucesso");

        } catch (err) {

            console.log(err);
            return reply.status(500).send({ err: "Erro interno no servidor." });

        };
    };
};