import { useTodos } from "../useTodos.jsx";

function ModernDashboard() {
  const { data, isLoading, isError, error, isFetching } = useTodos();

  if (isLoading) return <p>Loading todos...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Modern Dashboard</h2>

      {isFetching && <p>Refreshing data...</p>}

      {data.slice(0, 10).map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
}

export default ModernDashboard;