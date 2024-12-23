import { PrismaConnect } from "../../../adapter/connectDB/prisma";

export class GetExpenses {
    async Execute() {

        const Expenses = await PrismaConnect.expense.findMany();

        if(Expenses.length == 0) {
            throw new Error("Não há nenhuma despesa registrada");
        };

        return Expenses;
    };
};