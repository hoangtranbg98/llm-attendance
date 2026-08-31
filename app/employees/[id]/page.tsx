"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { mockEmployees } from "@/mock/employees";
import { mockAttendance } from "@/mock/attendance";
import Link from "next/link";

interface EmployeeDetailPageProps {
  params: {
    id: string;
  };
}

export default function EmployeeDetailPage({ params }: EmployeeDetailPageProps) {
  const employee = mockEmployees.find((e) => e.id === params.id);
  const employeeAttendance = mockAttendance.filter((a) => a.employeeId === params.id);

  if (!employee) {
    return (
      <MainLayout title="Chi tiết nhân viên">
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <p className="text-red-600">Nhân viên không tìm thấy</p>
          <Link href="/employees">
            <Button variant="outline" className="mt-4">Quay lại danh sách</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={employee.name}>
      <div className="space-y-6 max-w-3xl">
        {/* Personal Information */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <h2 className="text-lg font-semibold text-gray-900">Thông tin cá nhân</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Tên nhân viên</p>
              <p className="text-lg font-medium text-gray-900">{employee.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Mã nhân viên</p>
              <p className="text-lg font-medium text-gray-900">{employee.employeeId}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Phòng ban</p>
              <p className="text-lg font-medium text-gray-900">{employee.department}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Chức vụ</p>
              <p className="text-lg font-medium text-gray-900">{employee.position}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Điện thoại</p>
              <p className="text-lg font-medium text-gray-900">{employee.phone || "-"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Email</p>
              <p className="text-lg font-medium text-gray-900">{employee.email || "-"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Telegram</p>
              <p className="text-lg font-medium text-gray-900">{employee.telegram || "-"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Trạng thái</p>
              <p className="text-lg font-medium text-green-600 capitalize">{employee.status}</p>
            </div>
          </div>
        </div>

        {/* Attendance History */}
        {employeeAttendance.length > 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Lịch sử chấm công</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Ngày</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Giờ vào</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Giờ ra</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  {employeeAttendance.map((record) => (
                    <tr key={record.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">{record.date.toLocaleDateString("vi-VN")}</td>
                      <td className="py-3 px-4">{record.checkInTime || "-"}</td>
                      <td className="py-3 px-4">{record.checkOutTime || "-"}</td>
                      <td className="py-3 px-4">{record.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <Link href="/employees">
          <Button variant="outline">Quay lại danh sách</Button>
        </Link>
      </div>
    </MainLayout>
  );
}
