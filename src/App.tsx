import ShoppingCartPage from "./pages/ShoppingCart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

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
