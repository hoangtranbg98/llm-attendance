import { mockCustomers } from "@/mock/customers";
import { CustomerDetailView } from "./customer-detail-view";

export function generateStaticParams() {
  return mockCustomers.map((customer) => ({ id: customer.id }));
}

export default async function CustomerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <CustomerDetailView id={id} />;
}
