
// import { useQuery } from "@tanstack/react-query";

// function Todos() {
//   const { data, isLoading, error } = useQuery({
//     queryKey: ["todos"],
//     queryFn: async () => {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/todos"
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }

//       return response.json();
//     },
//     staleTime: 2 * 60 * 1000,
//   });

//   if (isLoading) {
//     return <h2>Loading...</h2>;
//   }

//   if (error) {
//     return <h2>Error: {error.message}</h2>;
//   }

//   return (
//     <div>
//       <h1>Todos List</h1>

//       {data.map((list) => (
//         <p key={list.id}>{list.title}</p>
//       ))}
//     </div>
//   );
// }

// export default Todos;