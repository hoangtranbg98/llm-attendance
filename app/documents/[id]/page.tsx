"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { mockDocuments } from "@/mock/documents";
import Link from "next/link";

interface DocumentDetailPageProps {
  params: {
    id: string;
  };
}

export default function DocumentDetailPage({ params }: DocumentDetailPageProps) {
  const document = mockDocuments.find((d) => d.id === params.id);

  if (!document) {
    return (
      <MainLayout title="Chi tiết biên bản">
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <p className="text-red-600">Biên bản không tìm thấy</p>
          <Link href="/documents">
            <Button variant="outline" className="mt-4">Quay lại danh sách</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={document.documentNumber}>
      <div className="space-y-6 max-w-4xl">
        {/* Header */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{document.documentNumber}</h1>
            <p className="text-sm text-gray-600 mt-1">
              Tạo lúc: {document.createdAt.toLocaleDateString("vi-VN")} {document.createdAt.toLocaleTimeString("vi-VN")}
            </p>
          </div>
          <StatusBadge status={document.status} />
        </div>

        {/* Customer Information */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Thông tin khách hàng</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Tên khách hàng</p>
              <p className="text-gray-900 font-medium">{document.customerName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Điện thoại</p>
              <p className="text-gray-900 font-medium">{document.customerPhone}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-gray-600 mb-1">Địa chỉ</p>
              <p className="text-gray-900 font-medium">{document.customerAddress}</p>
            </div>
          </div>
        </div>

        {/* Equipment */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Danh sách thiết bị</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">TT</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Tên thiết bị</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Đơn vị</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-600">SL</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-600">Đơn giá</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-600">Thành tiền</th>
                </tr>
              </thead>
              <tbody>
                {document.items.map((item, idx) => (
                  <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">{idx + 1}</td>
                    <td className="py-3 px-4">{item.name}</td>
                    <td className="py-3 px-4">{item.unit}</td>
                    <td className="py-3 px-4 text-right">{item.quantity}</td>
                    <td className="py-3 px-4 text-right">
                      {item.unitPrice.toLocaleString("vi-VN")} ₫
                    </td>
                    <td className="py-3 px-4 text-right font-medium">
                      {item.total.toLocaleString("vi-VN")} ₫
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 text-center">
            <p className="text-sm text-gray-600 mb-2">Tổng cộng</p>
            <p className="text-2xl font-bold text-blue-600">
              {document.totalAmount.toLocaleString("vi-VN")} ₫
            </p>
          </div>
          <div className="bg-green-50 rounded-lg border border-green-200 p-6 text-center">
            <p className="text-sm text-gray-600 mb-2">Đã thanh toán</p>
            <p className="text-2xl font-bold text-green-600">
              {document.paidAmount.toLocaleString("vi-VN")} ₫
            </p>
          </div>
          <div className={`rounded-lg border p-6 text-center ${
            document.remainingAmount === 0 
              ? "bg-green-50 border-green-200" 
              : "bg-amber-50 border-amber-200"
          }`}>
            <p className="text-sm text-gray-600 mb-2">Còn nợ</p>
            <p className={`text-2xl font-bold ${
              document.remainingAmount === 0 
                ? "text-green-600" 
                : "text-amber-600"
            }`}>
              {document.remainingAmount.toLocaleString("vi-VN")} ₫
            </p>
          </div>
        </div>

        {/* Document Info */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Thông tin tài liệu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Nhân viên tạo</p>
              <p className="text-gray-900 font-medium">{document.employeeName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Ngày tạo</p>
              <p className="text-gray-900 font-medium">{document.date.toLocaleDateString("vi-VN")}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Trạng thái</p>
              <StatusBadge status={document.status} />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <Link href={`/documents/${document.id}/preview`}>
            <Button variant="primary">👁 Xem trước</Button>
          </Link>
          <Button variant="secondary">📄 Tạo PDF</Button>
          <Button variant="secondary">🖨 In biên bản</Button>
          <Link href="/documents">
            <Button variant="outline">Quay lại danh sách</Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
