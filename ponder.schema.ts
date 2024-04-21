import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  RocketPoolTVL: p.createTable({
    id: p.string(),
    ethLocked: p.bigint(),
    rethLocked: p.bigint(),
    rplLocked: p.bigint(),
    date: p.bigint(),
  }),
}));
