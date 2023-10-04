import Koa from "koa";
import { http } from "@ampt/sdk";

const app = new Koa();

app.use((ctx) => {
  ctx.body = "Hello World";
});

http.node.use(app);
