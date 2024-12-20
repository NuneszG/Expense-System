import { PrismaConnect } from "../../../adapter/connectDB/prisma";
import { ExpenseProps } from "../../port/utils/expenseUtils";

export class CreateExpense {
    async Execute({ name, price, amount, data, description }: ExpenseProps) {

        const Expense = await PrismaConnect.expense.create({
            data: {
                name,
                price,
                amount,
                data,
                description
            }
        });

        return Expense;

    };
};