"use client";

import { MainLayout } from "@/components/layout/main-layout";

export default function ReportsPage() {
  return (
    <MainLayout title="Báo cáo">
      <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Báo cáo</h3>
        <p className="text-gray-600">Báo cáo sẽ được kết nối với backend sau.</p>
      </div>
    </MainLayout>
  );
}
