"use client";

import { Button } from "@/components/ui/button";
import { Trash2, Plus } from "lucide-react";

export interface EquipmentItem {
  id: string;
  name: string;
  unit: string;
  quantity: number;
  unitPrice: number;
}

interface EquipmentTableProps {
  items: EquipmentItem[];
  onAdd: () => void;
  onRemove: (id: string) => void;
  onUpdate: (id: string, field: keyof EquipmentItem, value: number | string) => void;
}

export function EquipmentTable({ items, onAdd, onRemove, onUpdate }: EquipmentTableProps) {
  const calculateTotal = (quantity: number, unitPrice: number) => {
    return quantity * unitPrice;
  };

  const units = ["Cái", "Bộ", "Chiếc", "Tấm", "Bộ", "Set"];

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">TT</th>
              <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Tên thiết bị / Thông số kỹ thuật</th>
              <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Đơn vị</th>
              <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">SL</th>
              <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Đơn giá</th>
              <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Thành tiền</th>
              <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              const total = calculateTotal(item.quantity, item.unitPrice);
              return (
                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-600">{index + 1}</td>
                  <td className="py-3 px-4">
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => onUpdate(item.id, "name", e.target.value)}
                      placeholder="Nhập tên thiết bị..."
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="py-3 px-4">
                    <select
                      value={item.unit}
                      onChange={(e) => onUpdate(item.id, "unit", e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {units.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="py-3 px-4">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => onUpdate(item.id, "quantity", parseInt(e.target.value) || 0)}
                      min="0"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="py-3 px-4">
                    <input
                      type="number"
                      value={item.unitPrice}
                      onChange={(e) => onUpdate(item.id, "unitPrice", parseInt(e.target.value) || 0)}
                      min="0"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">
                    {total.toLocaleString("vi-VN")} ₫
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-red-600 hover:bg-red-50 p-2 rounded transition-colors"
                      title="Xóa dòng"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Button
        onClick={onAdd}
        variant="outline"
        className="flex items-center gap-2"
      >
        <Plus size={18} />
        Thêm dòng
      </Button>
    </div>
  );
}
