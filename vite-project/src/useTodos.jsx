
import { useQuery } from "@tanstack/react-query";

export function useTodos() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }

      return response.json();
    },
    staleTime: 2 * 60 * 1000,
  });
}