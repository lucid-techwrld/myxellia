import { useState } from "react";
import { Calendar } from "./ui/calendar";

interface CalendarPageProps {
  onClose: () => void;
}

const CalendarPage: React.FC<CalendarPageProps> = ({ onClose }) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex items-center justify-center h-auto fixed top-36  right-40 z-50 bg-black">
      <div className="w-[350px] bg-neutral-900 text-white p-4 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <button className="text-gray-400 hover:text-white">←</button>
          <h2 className="font-semibold">Calendar</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ×
          </button>
        </div>

        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border border-gray-700 bg-neutral-900 text-white"
        />
      </div>
    </div>
  );
};

export default CalendarPage;
