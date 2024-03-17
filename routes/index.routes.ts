import { Router } from "express";
import { getSearch } from "../controllers/search.controller";
import { getItem } from "../controllers/item.controller";

const appRouter = Router();

appRouter.get("/api/items", getSearch);
appRouter.get("/api/items/:id", getItem)

export default appRouter;
