import { mockDocuments } from "@/mock/documents";
import { DocumentDetailView } from "./document-detail-view";

export function generateStaticParams() {
  return mockDocuments.map((document) => ({ id: document.id }));
}

export default async function DocumentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <DocumentDetailView id={id} />;
}
