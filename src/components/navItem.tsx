import React from "react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  active = false,
  onClick,
}) => (
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      onClick && onClick();
    }}
    className={`flex items-center space-x-2 py-2 px-4 rounded-lg transition-colors ${
      active
        ? "bg-gray-800 text-white font-semibold"
        : "text-gray-400 hover:bg-gray-700 hover:text-white"
    }`}
  >
    {icon}
    <span>{label}</span>
  </a>
);

export default NavItem;
