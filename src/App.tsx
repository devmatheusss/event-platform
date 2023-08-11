import { ApolloProvider } from "@apollo/client";
import { Router } from "./Router";
import { client } from "./lib/apollo";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}
