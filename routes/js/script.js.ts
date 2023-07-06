import { HandlerContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req: Request, _ctx: HandlerContext) {
    return fetch("https://stats.jlcarveth.dev/js/script.js");
  },
};
