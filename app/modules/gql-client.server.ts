import { GraphQLClient } from "graphql-request";

export default new GraphQLClient(process.env.API_URL!, {
  credentials: "include",
  mode: "cors",
});
