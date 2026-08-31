"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { mockAttendance } from "@/mock/attendance";
import { Clock } from "lucide-react";

export default function AttendancePage() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("vi-VN");

  return (
    <MainLayout title="Chấm công">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm text-gray-600">Hôm nay</p>
              <p className="text-2xl font-bold text-gray-900">{formattedDate}</p>
            </div>
            <div className="flex gap-3">
              <Button variant="primary" className="flex items-center gap-2">
                <Clock size={18} />
                Chấm công vào
              </Button>
              <Button variant="secondary" className="flex items-center gap-2">
                <Clock size={18} />
                Chấm công ra
              </Button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600 mb-2">Có mặt</p>
            <p className="text-2xl font-bold text-green-600">143</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600 mb-2">Đi muộn</p>
            <p className="text-2xl font-bold text-amber-600">8</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600 mb-2">Vắng</p>
            <p className="text-2xl font-bold text-red-600">5</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600 mb-2">Chưa chấm công</p>
            <p className="text-2xl font-bold text-blue-600">0</p>
          </div>
        </div>

        {/* Attendance Table */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Chi tiết chấm công</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Nhân viên</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Phòng ban</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Giờ vào</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Giờ ra</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Thời gian làm việc</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {mockAttendance.map((record) => (
                  <tr key={record.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-900">{record.employeeName}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{record.department}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{record.checkInTime || "-"}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{record.checkOutTime || "-"}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{record.workDuration || "-"}</td>
                    <td className="py-3 px-4 text-sm">
                      <StatusBadge status={record.status} />
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
