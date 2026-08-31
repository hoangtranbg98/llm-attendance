import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
  variant?: "default" | "success" | "warning" | "error" | "info";
}

export function StatusBadge({ status, variant = "default" }: StatusBadgeProps) {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-amber-100 text-amber-800",
    error: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
  };

  // Determine variant based on status if not explicitly provided
  let actualVariant = variant;
  if (variant === "default") {
    if (status.includes("có mặt") || status.includes("hoàn tất")) {
      actualVariant = "success";
    } else if (status.includes("đi muộn") || status.includes("nháp")) {
      actualVariant = "warning";
    } else if (status.includes("vắng") || status.includes("hủy")) {
      actualVariant = "error";
    } else if (status.includes("chờ") || status.includes("đã xuất")) {
      actualVariant = "info";
    }
  }

  return (
    <span className={cn("px-3 py-1 rounded-full text-sm font-medium", variants[actualVariant])}>
      {status}
    </span>
  );
}
