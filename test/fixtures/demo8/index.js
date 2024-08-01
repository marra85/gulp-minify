import { databaseFactory } from "./dependency.js";

const modelsPath = "dummy";
const databaseDummyRelations = (db) => {
  db.foo();
};
const logger = {
  info: () => {},
  error: () => {},
};

const logEntryTemplate = { message: "dummy" };
const acquireAttempts = new WeakMap();

const db = await databaseFactory({
  dbConfiguration: {},
  modelsPath,
  relationsFactory: databaseDummyRelations,
  logger,
  logEntryTemplate,
  telemetryWeakMap: acquireAttempts,
});
