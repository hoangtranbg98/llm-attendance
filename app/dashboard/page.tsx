"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { StatCard } from "@/components/ui/stat-card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { Users, Clock, AlertCircle, FileText, Plus } from "lucide-react";
import { mockAttendance } from "@/mock/attendance";
import { mockDocuments } from "@/mock/documents";
import Link from "next/link";

export default function DashboardPage() {
  // Calculate statistics
  const presentToday = mockAttendance.filter((a) => a.status === "có mặt").length;
  const totalEmployees = 156;
  const lateToday = mockAttendance.filter((a) => a.status === "đi muộn").length;
  const pendingDocuments = mockDocuments.filter((d) => d.status === "nháp").length;

  const presentPercentage = ((presentToday / totalEmployees) * 100).toFixed(1);

  return (
    <MainLayout title="Dashboard">
      <div className="space-y-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Nhân viên"
            value={totalEmployees}
            subtext="+3 tháng này"
            icon={Users}
            color="blue"
          />
          <StatCard
            title="Có mặt hôm nay"
            value={presentToday}
            subtext={`${presentPercentage}%`}
            icon={Clock}
            color="green"
          />
          <StatCard
            title="Đi muộn"
            value={lateToday}
            subtext="⚠ Cần chú ý"
            icon={AlertCircle}
            color="amber"
          />
          <StatCard
            title="Chờ duyệt"
            value={pendingDocuments}
            subtext="Cần xử lý"
            icon={FileText}
            color="red"
          />
        </div>

        {/* Today's Attendance Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Chấm công hôm nay</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Nhân viên</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Phòng ban</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Check-in</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Check-out</th>
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
                    <td className="py-3 px-4 text-sm">
                      <StatusBadge status={record.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Documents Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Biên bản gần đây</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Số biên bản</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Khách hàng</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Nhân viên</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-gray-600">Ngày</th>
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
                    <td className="py-3 px-4 text-sm text-gray-600">{doc.employeeName}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {doc.date.toLocaleDateString("vi-VN")}
                    </td>
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

        {/* Quick Actions */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Hành động nhanh</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/documents/new">
              <Button variant="primary">
                <Plus size={18} className="mr-2" />
                Tạo biên bản
              </Button>
            </Link>
            <Link href="/attendance">
              <Button variant="secondary">
                <Clock size={18} className="mr-2" />
                Chấm công
              </Button>
            </Link>
            <Link href="/customers">
              <Button variant="secondary">
                <Plus size={18} className="mr-2" />
                Thêm khách hàng
              </Button>
            </Link>
            <Link href="/ai">
              <Button variant="secondary">
                ✨ Mở trợ lý AI
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
