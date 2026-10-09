
import LegacyDashboard from "./components/LegacyDashboard";
import ModernDashboard from "./components/ModernDashboard";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <div>
      <h1>Day 42: React Query Integration</h1>

      <div style={{ display: "flex", gap: "30px" }}>
        <LegacyDashboard />
        <ModernDashboard />
      </div>

      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </div>
  );
}

export default App;