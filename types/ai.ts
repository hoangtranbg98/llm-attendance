export interface AIDocumentExtraction {
  customerName?: string;
  customerPhone?: string;
  customerAddress?: string;
  department?: string;
  date?: string;

  items: Array<{
    name: string;
    unit?: string;
    quantity?: number;
    unitPrice?: number;
  }>;

  paidAmount?: number;
}

export interface AIMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface AIChatSession {
  id: string;
  messages: AIMessage[];
  createdAt: Date;
  updatedAt: Date;
}
