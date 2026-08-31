import { mockEmployees } from "@/mock/employees";
import { EmployeeDetailView } from "./employee-detail-view";

export function generateStaticParams() {
  return mockEmployees.map((employee) => ({ id: employee.id }));
}

export default async function EmployeeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <EmployeeDetailView id={id} />;
}
