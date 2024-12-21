import { PrismaConnect } from "../../../adapter/connectDB/prisma";
import { ExpenseUpdateProps } from "../../port/utils/expenseUtils";

export class UpdateExpense {
    async Execute({ id, name, price, amount, data, description }: ExpenseUpdateProps) {

        const Id = await PrismaConnect.expense.findUnique({
            where: {
                id: id
            }
        });

        const Update = await PrismaConnect.expense.update({
            where: {
                id: Id?.id
            },
            data: {
                name,
                price,
                amount,
                description,
                data
            }
        });

        return Update;
    };
};