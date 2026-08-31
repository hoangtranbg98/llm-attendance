"use client";

import { useCallback, useState } from "react";
import { mockCustomers } from "@/mock/customers";
import { Customer } from "@/types/customer";

interface CustomerSelectorProps {
  value?: string;
  onSelect: (customer: Customer) => void;
}

export function CustomerSelector({ value, onSelect }: CustomerSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const getFilteredCustomers = useCallback(() => {
    if (searchQuery.trim() === "") {
      return mockCustomers;
    }
    const query = searchQuery.toLowerCase();
    return mockCustomers.filter(
      (c) =>
        c.name.toLowerCase().includes(query) ||
        c.phone.includes(query) ||
        c.address.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const filteredCustomers = getFilteredCustomers();

  const selectedCustomer = mockCustomers.find((c) => c.id === value);

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Chọn hoặc nhập tên khách hàng..."
          value={selectedCustomer?.name || searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {selectedCustomer && (
          <button
            onClick={() => {
              setSearchQuery("");
              setIsOpen(false);
            }}
            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        )}
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
          {filteredCustomers.length === 0 ? (
            <div className="p-4 text-center text-gray-500">Không tìm thấy khách hàng</div>
          ) : (
            filteredCustomers.map((customer) => (
              <button
                key={customer.id}
                onClick={() => {
                  onSelect(customer);
                  setIsOpen(false);
                  setSearchQuery("");
                }}
                className="w-full text-left px-4 py-3 hover:bg-blue-50 border-b border-gray-100 last:border-b-0 transition-colors"
              >
                <p className="font-medium text-gray-900">{customer.name}</p>
                <p className="text-sm text-gray-600">{customer.phone}</p>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
