"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { mockDocuments } from "@/mock/documents";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function DocumentsPage() {
  return (
    <MainLayout title="Biên bản">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">Tổng biên bản</p>
            <p className="text-3xl font-bold text-gray-900">{mockDocuments.length}</p>
          </div>
          <Link href="/documents/new">
            <Button variant="primary" className="flex items-center gap-2">
              <Plus size={18} />
              Tạo biên bản
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Số biên bản</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Khách hàng</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Ngày</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Nhân viên</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Tổng tiền</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {mockDocuments.map((doc) => (
                  <tr key={doc.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-blue-600 font-medium">
                      <Link href={`/documents/${doc.id}`}>{doc.documentNumber}</Link>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">{doc.customerName}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{doc.date.toLocaleDateString("vi-VN")}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{doc.employeeName}</td>
                    <td className="py-3 px-4 text-sm text-gray-900 font-medium">
                      {doc.totalAmount.toLocaleString("vi-VN")} ₫
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <StatusBadge status={doc.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
