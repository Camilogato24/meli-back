import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import appRouter from "./../routes/index.routes"

export class App {

    private app: Application;


    constructor (private port: number | string) {
        this.app = express();
        this.settings();
        this.middleware();
        this.routes();
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    middleware() {
        this.app.use(morgan("dev"));
        this.app.use(cors());
    }

    routes() {
        this.app.use(appRouter);
    }

    async listen () {
        await this.app.listen(this.app.get('port'));
        console.log("server on port", this.app.get('port'))
    }
}