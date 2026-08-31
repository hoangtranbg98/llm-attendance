"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { mockCustomers } from "@/mock/customers";
import { mockDocuments } from "@/mock/documents";
import Link from "next/link";

interface CustomerDetailPageProps {
  params: {
    id: string;
  };
}

export default function CustomerDetailPage({ params }: CustomerDetailPageProps) {
  const customer = mockCustomers.find((c) => c.id === params.id);
  const customerDocuments = mockDocuments.filter((d) => d.customerId === params.id);
  const totalValue = customerDocuments.reduce((sum, doc) => sum + doc.totalAmount, 0);

  if (!customer) {
    return (
      <MainLayout title="Chi tiết khách hàng">
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <p className="text-red-600">Khách hàng không tìm thấy</p>
          <Link href="/customers">
            <Button variant="outline" className="mt-4">Quay lại danh sách</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={customer.name}>
      <div className="space-y-6 max-w-3xl">
        {/* Customer Information */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <h2 className="text-lg font-semibold text-gray-900">Thông tin khách hàng</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Tên khách hàng</p>
              <p className="text-lg font-medium text-gray-900">{customer.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Điện thoại</p>
              <p className="text-lg font-medium text-gray-900">{customer.phone}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-gray-600 mb-1">Địa chỉ</p>
              <p className="text-lg font-medium text-gray-900">{customer.address}</p>
            </div>
            {customer.department && (
              <div>
                <p className="text-sm text-gray-600 mb-1">Phòng ban</p>
                <p className="text-lg font-medium text-gray-900">{customer.department}</p>
              </div>
            )}
            {customer.contactPerson && (
              <div>
                <p className="text-sm text-gray-600 mb-1">Người liên hệ</p>
                <p className="text-lg font-medium text-gray-900">{customer.contactPerson}</p>
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <p className="text-sm text-gray-600 mb-2">Biên bản</p>
            <p className="text-3xl font-bold text-gray-900">{customerDocuments.length}</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <p className="text-sm text-gray-600 mb-2">Tổng giá trị</p>
            <p className="text-2xl font-bold text-gray-900">
              {totalValue.toLocaleString("vi-VN")} ₫
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <p className="text-sm text-gray-600 mb-2">Ngày tạo</p>
            <p className="text-lg font-bold text-gray-900">
              {customer.createdAt.toLocaleDateString("vi-VN")}
            </p>
          </div>
        </div>

        {/* Document History */}
        {customerDocuments.length > 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Lịch sử biên bản</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Số biên bản</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Ngày</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Tổng tiền</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  {customerDocuments.map((doc) => (
                    <tr key={doc.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-blue-600 font-medium">
                        <Link href={`/documents/${doc.id}`}>{doc.documentNumber}</Link>
                      </td>
                      <td className="py-3 px-4">{doc.date.toLocaleDateString("vi-VN")}</td>
                      <td className="py-3 px-4 font-medium">{doc.totalAmount.toLocaleString("vi-VN")} ₫</td>
                      <td className="py-3 px-4">{doc.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <Link href="/customers">
          <Button variant="outline">Quay lại danh sách</Button>
        </Link>
      </div>
    </MainLayout>
  );
}
