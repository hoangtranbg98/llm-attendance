"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { mockEmployees } from "@/mock/employees";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function EmployeesPage() {
  return (
    <MainLayout title="Nhân viên">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">Tổng nhân viên</p>
            <p className="text-3xl font-bold text-gray-900">{mockEmployees.length}</p>
          </div>
          <Button variant="primary" className="flex items-center gap-2">
            <Plus size={18} />
            Thêm nhân viên
          </Button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Mã NV</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Tên</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Phòng ban</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Chức vụ</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {mockEmployees.map((emp) => (
                  <tr key={emp.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm font-medium text-blue-600">
                      <Link href={`/employees/${emp.id}`}>{emp.employeeId}</Link>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">{emp.name}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{emp.department}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{emp.position}</td>
                    <td className="py-3 px-4 text-sm">
                      <StatusBadge status={emp.status} variant="success" />
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
