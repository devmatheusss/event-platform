import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api-sa-east-1.hygraph.com/v2/cll2qocut0vty01uldhv1co7k/master"
})