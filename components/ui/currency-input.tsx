import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CurrencyInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
}

const CurrencyInput = forwardRef<HTMLInputElement, CurrencyInputProps>(
  ({ label, error, className, value, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const numericValue = e.target.value.replace(/\D/g, "");
      e.target.value = numericValue;
      onChange?.(e);
    };

    const displayValue =
      typeof value === "string"
        ? value
          ? parseInt(value).toLocaleString("vi-VN")
          : ""
        : value
        ? value.toLocaleString("vi-VN")
        : "";

    return (
      <div className="w-full">
        {label && <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>}
        <div className="relative">
          <input
            ref={ref}
            type="text"
            value={displayValue}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",
              error && "border-red-500 focus:ring-red-500",
              className
            )}
            {...props}
          />
          <span className="absolute right-4 top-2.5 text-gray-500">₫</span>
        </div>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

CurrencyInput.displayName = "CurrencyInput";

export { CurrencyInput };
