import { PrismaConnect } from "../../../adapter/connectDB/prisma";

export class GetMetas {
    async Execute() {

        const Metas = await PrismaConnect.meta.findMany();

        if(Metas.length == 0) {
            throw new Error("Não há nenhuma meta registrada.");
        };

        return Metas;
    };
};