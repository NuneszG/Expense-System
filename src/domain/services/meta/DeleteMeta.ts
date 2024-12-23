import { PrismaConnect } from "../../../adapter/connectDB/prisma";
import { MetaDeleteProps } from "../../port/utils/metaUtils";

export class DeleteMeta {
    async Execute({ id }: MetaDeleteProps) {

        const Id = await PrismaConnect.meta.findUnique({
            where: {
                id: id
            }
        });

        await PrismaConnect.meta.delete({
            where: {
                id: Id?.id
            }
        });

        return "Sua meta foi deletada com sucesso.";
    };
};