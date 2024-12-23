import { PrismaConnect } from "../../../adapter/connectDB/prisma";
import { DesireProp } from "../../port/utils/desireUtils";

export class CreateDesire {
    async Execute({ name, price, amount }: DesireProp) {

        const Desire = await PrismaConnect.desire.create({
            data: {
                name,
                amount, 
                price
            }
        });

        return Desire;
    };
};