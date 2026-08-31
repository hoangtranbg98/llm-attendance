import { mockDocuments } from "@/mock/documents";
import { DocumentPreviewView } from "./document-preview-view";

export function generateStaticParams() {
  return mockDocuments.map((document) => ({ id: document.id }));
}

export default async function DocumentPreviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <DocumentPreviewView id={id} />;
}
