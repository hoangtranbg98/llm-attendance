"use client";

import { MainLayout } from "@/components/layout/main-layout";

export default function FormsPage() {
  return (
    <MainLayout title="Biểu mẫu">
      <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Biểu mẫu</h3>
        <p className="text-gray-600">Biểu mẫu sẽ được kết nối với backend sau.</p>
      </div>
    </MainLayout>
  );
}
