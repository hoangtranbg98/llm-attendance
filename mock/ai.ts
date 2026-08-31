import { AIDocumentExtraction } from "@/types/ai";

export const mockAIExtraction: AIDocumentExtraction = {
  customerName: "Công ty ABC",
  customerPhone: "0988111111",
  customerAddress: "KCN Quế Võ, Bắc Ninh",
  department: "Kỹ thuật",
  date: "31/08/2026",
  items: [
    {
      name: "Camera Hikvision",
      unit: "Cái",
      quantity: 2,
      unitPrice: 1800000,
    },
  ],
  paidAmount: 2000000,
};
