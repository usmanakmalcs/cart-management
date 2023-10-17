import React from "react";
import ShoppingCartPage from "./pages/ShoppingCart";

import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ShoppingCartPage />
      </div>
    </QueryClientProvider>
  );
}

export default App;
