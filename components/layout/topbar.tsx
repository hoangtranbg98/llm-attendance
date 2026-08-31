"use client";

import { Bell, ChevronDown, Search } from "lucide-react";
import { useState } from "react";

interface TopbarProps {
  title: string;
}

export function Topbar({ title }: TopbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentUser = {
    name: "Nguyễn Văn A",
    avatar: "NA",
  };

  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
      {/* Left side - Page Title */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      </div>

      {/* Right side - Actions and User Menu */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="bg-transparent outline-none text-sm text-gray-900 placeholder-gray-500 w-40"
          />
        </div>

        {/* Notification */}
        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              {currentUser.avatar}
            </div>
            <span className="text-sm font-medium text-gray-900 hidden sm:block">{currentUser.name}</span>
            <ChevronDown size={16} className="text-gray-500" />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                Hồ sơ của tôi
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                Cài đặt tài khoản
              </button>
              <div className="my-2 border-t border-gray-200"></div>
              <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50">
                Đăng xuất
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
