"use client";

import { useState } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EquipmentTable, EquipmentItem } from "@/components/documents/equipment-table";
import { CustomerSelector } from "@/components/documents/customer-selector";
import { companyConfig } from "@/config/company";
import { Customer } from "@/types/customer";
import { Sparkles } from "lucide-react";

export default function DocumentNewPage() {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [items, setItems] = useState<EquipmentItem[]>([
    { id: "item-1", name: "", unit: "Cái", quantity: 0, unitPrice: 0 },
  ]);
  const [paidAmount, setPaidAmount] = useState(0);
  const [showAIDialog, setShowAIDialog] = useState(false);
  const [aiInput, setAiInput] = useState("");

  // Calculate totals
  const totalAmount = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const remainingAmount = totalAmount - paidAmount;

  const handleAddItem = () => {
    setItems([
      ...items,
      {
        id: `item-${Date.now()}`,
        name: "",
        unit: "Cái",
        quantity: 0,
        unitPrice: 0,
      },
    ]);
  };

  const handleRemoveItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const handleUpdateItem = (id: string, field: keyof EquipmentItem, value: number | string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  return (
    <MainLayout title="Tạo biên bản mới">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Company Header */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <p className="text-sm font-semibold text-gray-600">{companyConfig.shortName}</p>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">
            Biên Bản Bàn Giao và Nghiệm Thu Thiết Bị
          </h1>
          <div className="mt-4 text-sm text-gray-600 space-y-1">
            <p><strong>Địa chỉ:</strong> {companyConfig.address}</p>
            <p><strong>Điện thoại:</strong> {companyConfig.phone}</p>
            <p><strong>Email:</strong> {companyConfig.email}</p>
          </div>
        </div>

        {/* Customer Information */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <h2 className="text-lg font-semibold text-gray-900">Thông tin khách hàng</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kính gửi <span className="text-red-600">*</span>
              </label>
              <CustomerSelector
                value={selectedCustomer?.id}
                onSelect={setSelectedCustomer}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Điện thoại
              </label>
              <Input
                value={selectedCustomer?.phone || ""}
                readOnly
                className="bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phòng ban
              </label>
              <Input
                value={selectedCustomer?.department || ""}
                readOnly
                className="bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ngày
              </label>
              <Input
                type="date"
                defaultValue={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Địa chỉ
              </label>
              <Input
                value={selectedCustomer?.address || ""}
                readOnly
                className="bg-gray-50"
              />
            </div>
          </div>
        </div>

        {/* Equipment Table */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <h2 className="text-lg font-semibold text-gray-900">Danh sách thiết bị</h2>
          <EquipmentTable
            items={items}
            onAdd={handleAddItem}
            onRemove={handleRemoveItem}
            onUpdate={handleUpdateItem}
          />
        </div>

        {/* Payment Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <h2 className="text-lg font-semibold text-gray-900">Thanh toán</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tổng cộng
              </label>
              <div className="px-4 py-3 bg-blue-50 rounded-lg text-xl font-bold text-blue-600">
                {totalAmount.toLocaleString("vi-VN")} ₫
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Đã thanh toán
              </label>
              <Input
                type="number"
                value={paidAmount}
                onChange={(e) => setPaidAmount(parseInt(e.target.value) || 0)}
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Còn nợ
              </label>
              <div className={`px-4 py-3 rounded-lg text-xl font-bold ${
                remainingAmount === 0 ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600"
              }`}>
                {remainingAmount.toLocaleString("vi-VN")} ₫
              </div>
            </div>
          </div>
        </div>

        {/* Signature Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <h2 className="text-lg font-semibold text-gray-900">Chữ ký</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Customer Signature */}
            <div>
              <p className="text-sm font-medium text-gray-900 mb-4">
                Đại diện khách hàng<br />
                <span className="text-xs font-normal text-gray-600">(Ký trực tiếp bên dưới)</span>
              </p>
              <div className="border-2 border-gray-300 rounded-lg h-32 mb-3 flex items-center justify-center text-gray-400">
                Vùng ký
              </div>
              <input
                type="text"
                placeholder="Họ và tên người nhận"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Company Signature */}
            <div>
              <p className="text-sm font-medium text-gray-900 mb-4">
                Đại diện công ty<br />
                <span className="text-xs font-normal text-gray-600">(Ký trực tiếp bên dưới)</span>
              </p>
              <div className="border-2 border-gray-300 rounded-lg h-32 mb-3 flex items-center justify-center text-gray-400">
                Vùng ký
              </div>
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* AI Assistant Button */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-6">
          <Button
            onClick={() => setShowAIDialog(true)}
            variant="primary"
            className="w-full flex items-center justify-center gap-2 h-12 text-base"
          >
            <Sparkles size={20} />
            ✨ Điền biểu mẫu bằng AI
          </Button>
        </div>

        {/* Document Actions */}
        <div className="flex flex-wrap gap-3 sticky bottom-8">
          <Button variant="secondary">💾 Lưu nháp</Button>
          <Button variant="secondary">👁 Xem trước</Button>
          <Button variant="secondary">📄 Tạo PDF</Button>
          <Button variant="secondary">📊 Lưu vào Google Sheet</Button>
          <Button variant="secondary">🖨 In biên bản</Button>
        </div>
      </div>

      {/* AI Dialog */}
      {showAIDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                ✨ Điền biểu mẫu bằng AI
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mô tả nội dung biên bản:
                  </label>
                  <textarea
                    value={aiInput}
                    onChange={(e) => setAiInput(e.target.value)}
                    placeholder="Tạo biên bản cho ABC, giao 2 camera..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-28 resize-none"
                  />
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setShowAIDialog(false)}
                    className="flex-1"
                  >
                    Hủy
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      // Mock AI processing
                      console.log("AI analyzing:", aiInput);
                      setShowAIDialog(false);
                    }}
                    className="flex-1"
                  >
                    Phân tích
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}
