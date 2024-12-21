import { FastifyRequest, FastifyReply } from "fastify";
import { GetLength } from "../../../domain/services/expense/GetLength";

export class GetLengthController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        try {
            const Expenses = new GetLength();
            const Get = await Expenses.Execute();
    
            reply.send(Get);
            return reply.status(200).send("Todos as despesas foram retornadas.");

        } catch (err) {

            console.log(err);
            return reply.status(500).send({ err: "Erro interno no servidor." });

        };  
    };
};