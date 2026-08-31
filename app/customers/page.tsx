"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { mockCustomers } from "@/mock/customers";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function CustomersPage() {
  return (
    <MainLayout title="Khách hàng">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">Tổng khách hàng</p>
            <p className="text-3xl font-bold text-gray-900">{mockCustomers.length}</p>
          </div>
          <Button variant="primary" className="flex items-center gap-2">
            <Plus size={18} />
            Thêm khách hàng
          </Button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Tên khách hàng</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Điện thoại</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Địa chỉ</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Người liên hệ</th>
                </tr>
              </thead>
              <tbody>
                {mockCustomers.map((cus) => (
                  <tr key={cus.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-blue-600 font-medium">
                      <Link href={`/customers/${cus.id}`}>{cus.name}</Link>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">{cus.phone}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{cus.address}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{cus.contactPerson || "-"}</td>
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
