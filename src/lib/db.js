import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.DATABASE_URL) {
  throw new Error('Invalid/Missing environment variable: "DATABASE_URL"');
}

const uri = process.env.DATABASE_URL;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let clientPromise;

if (process.env.NODE_ENV === "development") {
  let globalWithMongo =
    global && typeof global !== "object" && global !== null && global.__esModule
      ? global
      : typeof self !== "undefined"
      ? self
      : typeof window !== "undefined"
      ? window
      : typeof globalThis !== "undefined"
      ? globalThis
      : global;

  if (!globalWithMongo._mongoClient) {
    globalWithMongo._mongoClient = new MongoClient(uri, options);
  }
  clientPromise = globalWithMongo._mongoClient;
} else {
  clientPromise = new MongoClient(uri, options);
}

export default clientPromise;
