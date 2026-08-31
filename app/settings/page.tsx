"use client";

import { MainLayout } from "@/components/layout/main-layout";

export default function SettingsPage() {
  return (
    <MainLayout title="Cài đặt">
      <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Cài đặt</h3>
        <p className="text-gray-600">Cài đặt sẽ được kết nối với backend sau.</p>
      </div>
    </MainLayout>
  );
}
