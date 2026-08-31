"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Clock,
  Users,
  Building2,
  FileText,
  Form,
  Sparkles,
  BarChart3,
  Settings,
} from "lucide-react";
import { companyConfig } from "@/config/company";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: Clock, label: "Chấm công", href: "/attendance" },
    { icon: Users, label: "Nhân viên", href: "/employees" },
    { icon: Building2, label: "Khách hàng", href: "/customers" },
    { icon: FileText, label: "Biên bản", href: "/documents" },
    { icon: Form, label: "Biểu mẫu", href: "/forms" },
    { icon: Sparkles, label: "Trợ lý AI", href: "/ai" },
    { icon: BarChart3, label: "Báo cáo", href: "/reports" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col overflow-hidden">
      {/* Logo and Company Name */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">H</span>
          </div>
          <div>
            <h1 className="font-bold text-sm leading-tight">{companyConfig.shortName}</h1>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto py-6 px-3">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors",
              isActive(item.href)
                ? "bg-blue-50 text-blue-600 font-medium"
                : "text-gray-700 hover:bg-gray-50"
            )}
          >
            <item.icon size={20} />
            <span className="text-sm">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-200 p-4 space-y-3">
        <div className="text-xs">
          <p className="font-semibold text-gray-900">{companyConfig.shortName}</p>
          <p className="text-gray-500 truncate">{companyConfig.name}</p>
        </div>
        <Link
          href="/settings"
          className={cn(
            "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors",
            isActive("/settings")
              ? "bg-blue-50 text-blue-600 font-medium"
              : "text-gray-700 hover:bg-gray-50"
          )}
        >
          <Settings size={18} />
          <span className="text-sm">Cài đặt</span>
        </Link>
      </div>
    </div>
  );
}
