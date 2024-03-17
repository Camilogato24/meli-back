import { Router } from "express";
import { getSearch } from "../controllers/search.controller";

const appRouter = Router();

appRouter.get("/api/items", getSearch);

export default appRouter;
