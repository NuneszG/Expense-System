import { PrismaConnect } from "../../../adapter/connectDB/prisma";
import { MetaProps } from "../../port/utils/metaUtils";

export class CreateMeta {
    async Execute({ value, description }: MetaProps) {
        
        const Meta = await PrismaConnect.meta.create({
            data: {
                value,
                description
            }
        });

        return Meta;
    };
};