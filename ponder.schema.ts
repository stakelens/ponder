import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  EthLockedInMinipools: p.createTable({
    id: p.string(),
    value: p.bigint(),
    date: p.bigint(),
  }),
}));
