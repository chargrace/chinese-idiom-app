import Express from "express";
//import express
import idiomsRouter from "./routes/idiomsRoutes.js";
//import router for idioms route

const app = Express();
app.use(Express.json());

// Use router for any requests. Define path name
app.use("/idioms", idiomsRouter);

/* export default app; Similarly here*/
export default app;
