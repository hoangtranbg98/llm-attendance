"use client";

import { useState, useEffect, useRef } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { AIMessage } from "@/types/ai";
import { aiService } from "@/services/ai-service";
import { Send } from "lucide-react";

export default function AIPage() {
  const [messages, setMessages] = useState<AIMessage[]>([
    {
      id: "msg-0",
      role: "assistant",
      content: "Xin chào Nguyễn Văn A! 👋 Tôi là Hermes, trợ lý AI của HTechCom. Tôi có thể giúp bạn tạo biên bản, phân tích dữ liệu, và trả lời các câu hỏi về công ty. Bạn cần giúp gì?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: AIMessage = {
      id: `msg-${Date.now()}`,
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await aiService.chatWithAssistant(inputValue, messages);
      const assistantMessage: AIMessage = {
        id: `msg-${Date.now() + 1}`,
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout title="Trợ lý AI - Hermes">
      <div className="max-w-3xl mx-auto h-[calc(100vh-180px)] flex flex-col bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              ✨
            </div>
            <div>
              <h2 className="font-semibold">Trợ lý AI — Hermes</h2>
              <p className="text-xs opacity-90">Sẵn sàng giúp đỡ</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white opacity-70 hover:opacity-100"
          >
            {isOpen ? "−" : "+"}
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                  message.role === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-white text-gray-900 border border-gray-200 rounded-bl-none"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
                <p
                  className={`text-xs mt-2 ${
                    message.role === "user" ? "text-blue-100" : "text-gray-500"
                  }`}
                >
                  {message.timestamp.toLocaleTimeString("vi-VN", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-900 border border-gray-200 px-4 py-3 rounded-lg rounded-bl-none">
                <p className="text-sm">Hermes đang suy nghĩ...</p>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 p-4 bg-white">
          <div className="flex gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder="Nhập yêu cầu của bạn..."
              disabled={isLoading}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
            />
            <Button
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
              variant="primary"
              className="flex items-center gap-2"
            >
              <Send size={18} />
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Nhấn Enter để gửi hoặc Shift+Enter để xuống dòng
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
