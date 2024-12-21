import fastify from "fastify";
import cors from "@fastify/cors";

import ExpenseRoutes from "./routes/ExpenseRoutes";
import MetaRoutes from "./routes/MetaRoutes";

const App = fastify();

const Start = async () => {

    await App.register(cors);
    await App.register(ExpenseRoutes);
    await App.register(MetaRoutes);

    try {
        await App.listen({ port: 8000 });
    } catch (err) {
        process.exit(1);
    };
    
};

Start();