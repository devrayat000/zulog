import { getSdk } from "../graphql/generated";
import gqlClient from "../modules/gql-client.server";

export default getSdk(gqlClient);
