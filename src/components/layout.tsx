import { useState } from "react";
import Header from "./header";
import Dashboard from "./dashboard";
import BudgetCard from "./BudgetCard";
import CalenderPage from "./Calender";

const Layout = () => {
  const [showBudgetCard, setShowBudgetCard] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <div className="bg-gray-950 min-h-screen text-white font-inter p-4 md:p-8 relative">
      <Header
        onBudgetClick={() => setShowBudgetCard(true)}
        onCalendarClick={() => setShowCalendar(true)}
      />
      <Dashboard />
      {showBudgetCard && (
        <BudgetCard onClose={() => setShowBudgetCard(false)} />
      )}
      {showCalendar && <CalenderPage onClose={() => setShowCalendar(false)} />}
    </div>
  );
};

export default Layout;
