import { PrismaConnect } from "../../../adapter/connectDB/prisma";
import { MetaUpdateProps } from "../../port/utils/metaUtils";

export class UpdateMeta {
    async Execute({ id, value, description }: MetaUpdateProps) {

        const Id = await PrismaConnect.meta.findUnique({
            where: {
                id: id
            }
        });

        if(!id) {
            throw new Error("Informe o id da meta que deseja atualizar.");
        };

        const User = await PrismaConnect.meta.update({
            where: {
                id: Id?.id
            },
            data: {
                value,
                description
            }
        });

        return User;
    };
};