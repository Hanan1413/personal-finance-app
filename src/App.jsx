import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Overview from "./pages/Overview";
import Transactions from "./pages/Transactions";
import Budgets from "./pages/Budgets";
import Pots from "./pages/Pots";
import Bills from "./pages/Bills";


// https://wonderful-florentine-718eb3.netlify.app/budgets

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/pots" element={<Pots />} />
          <Route path="/bills" element={<Bills />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
