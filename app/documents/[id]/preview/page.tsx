"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { mockDocuments } from "@/mock/documents";
import { companyConfig } from "@/config/company";
import Link from "next/link";

interface DocumentPreviewPageProps {
  params: {
    id: string;
  };
}

export default function DocumentPreviewPage({ params }: DocumentPreviewPageProps) {
  const document = mockDocuments.find((d) => d.id === params.id);

  if (!document) {
    return (
      <MainLayout title="Xem trước biên bản">
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
    <MainLayout title={`Xem trước - ${document.documentNumber}`}>
      <div className="flex flex-col items-center gap-6">
        {/* A4 Document Preview */}
        <div className="bg-gray-100 p-8 rounded-lg">
          <div className="bg-white w-[210mm] h-[297mm] shadow-lg p-12 overflow-auto">
            {/* Document Header */}
            <div className="text-center mb-8 pb-8 border-b border-gray-300">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {companyConfig.shortName}
              </h1>
              <h2 className="text-xl font-semibold text-gray-900">
                Biên Bản Bàn Giao và Nghiệm Thu Thiết Bị
              </h2>
              <p className="text-sm text-gray-600 mt-4">
                Số: {document.documentNumber}
              </p>
              <div className="mt-4 text-xs text-gray-600 space-y-1">
                <p><strong>Địa chỉ:</strong> {companyConfig.address}</p>
                <p><strong>Điện thoại:</strong> {companyConfig.phone}</p>
                <p><strong>Email:</strong> {companyConfig.email}</p>
              </div>
            </div>

            {/* Customer Information */}
            <div className="mb-6">
              <p className="text-sm"><strong>Kính gửi:</strong> {document.customerName}</p>
              <p className="text-sm"><strong>Điện thoại:</strong> {document.customerPhone}</p>
              <p className="text-sm"><strong>Địa chỉ:</strong> {document.customerAddress}</p>
              <p className="text-sm"><strong>Ngày:</strong> {document.date.toLocaleDateString("vi-VN")}</p>
            </div>

            {/* Equipment Table */}
            <div className="mb-6">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="border border-gray-300 px-2 py-1 text-left">TT</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">Tên thiết bị</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">Đơn vị</th>
                    <th className="border border-gray-300 px-2 py-1 text-center">SL</th>
                    <th className="border border-gray-300 px-2 py-1 text-right">Đơn giá</th>
                    <th className="border border-gray-300 px-2 py-1 text-right">Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {document.items.map((item, idx) => (
                    <tr key={item.id} className="border-b border-gray-300">
                      <td className="border border-gray-300 px-2 py-1">{idx + 1}</td>
                      <td className="border border-gray-300 px-2 py-1">{item.name}</td>
                      <td className="border border-gray-300 px-2 py-1">{item.unit}</td>
                      <td className="border border-gray-300 px-2 py-1 text-center">{item.quantity}</td>
                      <td className="border border-gray-300 px-2 py-1 text-right">
                        {item.unitPrice.toLocaleString("vi-VN")} ₫
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-right font-medium">
                        {item.total.toLocaleString("vi-VN")} ₫
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Payment Summary */}
            <div className="mb-8 text-right text-sm space-y-2">
              <p><strong>Tổng cộng:</strong> {document.totalAmount.toLocaleString("vi-VN")} ₫</p>
              <p><strong>Đã thanh toán:</strong> {document.paidAmount.toLocaleString("vi-VN")} ₫</p>
              <p className="text-red-600"><strong>Còn nợ:</strong> {document.remainingAmount.toLocaleString("vi-VN")} ₫</p>
            </div>

            {/* Signatures */}
            <div className="mt-12 grid grid-cols-2 gap-8 text-sm">
              <div className="text-center">
                <p className="font-medium mb-4">Đại diện khách hàng</p>
                <div className="h-16 border-t border-gray-300 mt-8 pt-2">
                  <p className="text-xs">(Ký tên)</p>
                </div>
              </div>
              <div className="text-center">
                <p className="font-medium mb-4">Đại diện công ty</p>
                <div className="h-16 border-t border-gray-300 mt-8 pt-2">
                  <p className="text-xs">(Ký tên)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button variant="primary">
            🖨 In biên bản
          </Button>
          <Button variant="secondary">
            📥 Tải PDF
          </Button>
          <Link href="/documents">
            <Button variant="outline">Quay lại</Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
