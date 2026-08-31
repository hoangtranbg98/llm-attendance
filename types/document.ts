export type DocumentStatus = "nháp" | "hoàn tất" | "đã xuất PDF" | "đã gửi" | "đã hủy";

export interface DocumentItem {
  id: string;
  name: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface Document {
  id: string;
  documentNumber: string;
  customerName: string;
  customerId: string;
  customerPhone: string;
  customerAddress: string;
  department?: string;
  date: Date;
  employeeId: string;
  employeeName: string;
  items: DocumentItem[];
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  status: DocumentStatus;
  createdAt: Date;
  updatedAt: Date;
}
