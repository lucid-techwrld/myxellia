import {
  LayoutDashboard,
  Building,
  Users,
  Search,
  MessageSquare,
  FileText,
  List,
  Calculator,
  Calendar,
} from "lucide-react";

import logo from "../assets/logo/myxellia_io_logo.jpeg";

import NavItem from "./navItem";
interface HeaderProps {
  onBudgetClick: () => void;
  onCalendarClick: () => void;
}
const header: React.FC<HeaderProps> = ({ onBudgetClick, onCalendarClick }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-[#1e1e1e] rounded-xl shadow-lg border border-[#2e2e2e]">
      {/* Logo and Nav Items */}
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden">
            <img src={logo} alt="myxellia logo" className="object-contain" />
          </div>
          <span className="text-xl font-bold">myxellia</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <NavItem
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
            active
          />
          <NavItem icon={<Building size={20} />} label="Listings" />
          <NavItem icon={<Users size={20} />} label="Users" />
          <NavItem icon={<MessageSquare size={20} />} label="Request" />
          <NavItem icon={<FileText size={20} />} label="Applications" />
          <NavItem
            icon={<Calculator />}
            label="Budget"
            onClick={onBudgetClick}
          />
          <NavItem
            icon={<Calendar />}
            label="Calender"
            onClick={onCalendarClick}
          />
        </nav>
      </div>

      {/* Search and User */}
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search listings, users here..."
            className="pl-10 pr-4 py-2 rounded-lg bg-[#2e2e2e] text-white focus:outline-none focus:ring-2 focus:ring-[#3a3a3a]"
          />
          <Search
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
        <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center font-bold">
          D
        </div>
        <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#2e2e2e] shadow-lg md:hidden">
          <List size={20} />
        </div>
      </div>
    </header>
  );
};

export default header;
