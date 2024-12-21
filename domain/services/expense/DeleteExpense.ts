import { PrismaConnect } from "../../../adapter/connectDB/prisma";
import { ExpenseDeleteProps } from "../../port/utils/expenseUtils";

export class DeleteExpense {
    async Execute({ id }: ExpenseDeleteProps) {

        const Expense = await PrismaConnect.expense.findUnique({
            where: {
                id: id
            }
        });

        await PrismaConnect.expense.delete({
            where: {
                id: Expense?.id
            }
        });

        return `${Expense?.name} acabou de ser deletada.`;
    };
};