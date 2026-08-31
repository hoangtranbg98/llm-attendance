import { Document } from "@/types/document";
import { mockDocuments } from "@/mock/documents";

/* eslint-disable @typescript-eslint/no-unused-vars */

export const documentService = {
  async getAll(): Promise<Document[]> {
    // Mock implementation - replace with real API call
    return mockDocuments;
  },

  async getById(id: string): Promise<Document | undefined> {
    // Mock implementation
    return mockDocuments.find((doc) => doc.id === id);
  },

  async createDraft(data: Partial<Document>): Promise<Document> {
    // Mock implementation
    const newDoc: Document = {
      id: `doc-${Date.now()}`,
      documentNumber: `HT-${Date.now()}-2026`,
      status: "nháp",
      createdAt: new Date(),
      updatedAt: new Date(),
      ...data,
    } as Document;
    return newDoc;
  },

  async updateDraft(id: string, data: Partial<Document>): Promise<Document> {
    // Mock implementation
    const doc = mockDocuments.find((d) => d.id === id);
    if (!doc) throw new Error("Document not found");
    return { ...doc, ...data, updatedAt: new Date() };
  },

  async generatePdf(_id: string): Promise<Blob> {
    // Mock implementation - returns an empty blob for now
    return new Blob(["PDF content"], { type: "application/pdf" });
  },

  async saveToGoogleSheet(id: string): Promise<void> {
    // Mock implementation - will be replaced with real Sheets API
    console.log("Saving to Google Sheets:", id);
  },

  async printDocument(id: string): Promise<void> {
    // Mock implementation
    console.log("Printing document:", id);
  },
};
