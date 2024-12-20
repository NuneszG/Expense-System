import { FastifyRequest, FastifyReply } from "fastify";
import { CreateExpense } from "../../../domain/services/expense/CreateExpense";
import { ExpenseProps } from "../../../domain/port/utils/expenseUtils";

export class CreateExpenseController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        try {
            const { name, price, amount, description, data } = request.body as ExpenseProps;

            if(!name || !price || !amount || !description || !data) {
                return reply.status(400).send("Por favor, preencha todos os campos para criar a despesa.");
            };

            const Expense = new CreateExpense();
            const Create = await Expense.Execute({ name, price, amount, data, description });

            reply.send(Create);
            return reply.status(201).send(`A despesa '${Create.name}' foi criada.`);

        } catch (err) {

            console.log(err);
            return reply.status(500).send({ err: "Erro interno no servidor." });

        };
    };
};