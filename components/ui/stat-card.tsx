import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  subtext?: string;
  icon?: LucideIcon;
  color?: "blue" | "green" | "amber" | "red";
}

export function StatCard({ title, value, subtext, icon: Icon, color = "blue" }: StatCardProps) {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    amber: "bg-amber-50 text-amber-600",
    red: "bg-red-50 text-red-600",
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-600 font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          {subtext && <p className="text-sm text-gray-500 mt-2">{subtext}</p>}
        </div>
        {Icon && (
          <div className={cn("p-3 rounded-lg", colors[color])}>
            <Icon size={24} />
          </div>
        )}
      </div>
    </div>
  );
}
