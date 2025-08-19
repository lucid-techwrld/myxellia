import React from "react";
import {
  Calculator,
  SlidersHorizontal,
  LineChart,
  BarChart4,
  X,
} from "lucide-react";

interface BudgetCardProps {
  onClose: () => void;
}
const BudgetCard: React.FC<BudgetCardProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col items-center justify-center h-auto fixed top-36  right-40 z-50">
      <button
        onClick={onClose}
        className="mb-6 p-4 rounded-full bg-gray-600 text-white shadow hover:bg-gary-700 transition hover:animate-bounce"
      >
        <X className="text-xl" />
      </button>

      <div className="bg-white shadow-xl rounded-2xl max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-gray-900 flex flex-col items-center p-6">
          <Calculator className="text-white w-12 h-12 mb-4" />
          <h2 className="text-white text-lg font-semibold">Budgeting</h2>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="flex items-start gap-3">
            <SlidersHorizontal className="text-gray-600 w-5 h-5 mt-1" />
            <div>
              <h3 className="font-medium text-gray-900">
                Set up annual budgets by account category
              </h3>
              <p className="text-sm text-gray-600">
                Allocate funds across income and expense lines with full
                visibility.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <LineChart className="text-gray-600 w-5 h-5 mt-1" />
            <div>
              <h3 className="font-medium text-gray-900">
                Track actuals vs budget in real time
              </h3>
              <p className="text-sm text-gray-600">
                See how your community is performing against plan, month by
                month.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <BarChart4 className="text-gray-600 w-5 h-5 mt-1" />
            <div>
              <h3 className="font-medium text-gray-900">
                Adjust figures and forecast with ease
              </h3>
              <p className="text-sm text-gray-600">
                Edit amounts, apply percentage changes, or roll forward last
                year’s data—all in one place.
              </p>
            </div>
          </div>

          <button className="w-full py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Create Budget
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetCard;
