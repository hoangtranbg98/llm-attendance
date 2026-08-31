import { AIDocumentExtraction, AIMessage } from "@/types/ai";
import { mockAIExtraction } from "@/mock/ai";

export const aiService = {
  async analyzeDocumentText(text: string): Promise<AIDocumentExtraction> {
    // Mock implementation - returns predefined mock data
    // Later, this will call the Hermes API
    console.log("Analyzing text:", text);
    
    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    return mockAIExtraction;
  },

  async chatWithAssistant(message: string, conversationHistory: AIMessage[] = []): Promise<string> {
    // Mock implementation - returns a generic response
    // Later, this will call the Hermes chatbot API
    console.log("Chat message:", message);
    console.log("Conversation history:", conversationHistory);
    
    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Simple mock responses based on keywords
    if (message.toLowerCase().includes("biên bản")) {
      return "Tôi có thể giúp bạn tạo một biên bản bàn giao và nghiệm thu thiết bị. Vui lòng cung cấp thông tin chi tiết về khách hàng, thiết bị và giá cả.";
    }
    
    if (message.toLowerCase().includes("chấm công")) {
      return "Để chấm công, vui lòng nhấp vào nút 'Chấm công vào' hoặc 'Chấm công ra' trên trang Attendance.";
    }
    
    return "Tôi đã nhận được tin nhắn của bạn: " + message + ". Bạn có thể yêu cầu tôi giúp gì khác không?";
  },
};
