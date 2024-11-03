import { QueryClientProvider as TanstackProvider } from "@tanstack/react-query";
import { queryClient } from "./QueryClient";

export function QueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TanstackProvider client={queryClient}>{children}</TanstackProvider>;
}
