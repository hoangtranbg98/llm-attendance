import { Customer } from "@/types/customer";
import { mockCustomers } from "@/mock/customers";

export const customerService = {
  async getAll(): Promise<Customer[]> {
    // Mock implementation
    return mockCustomers;
  },

  async getById(id: string): Promise<Customer | undefined> {
    // Mock implementation
    return mockCustomers.find((cus) => cus.id === id);
  },

  async search(query: string): Promise<Customer[]> {
    // Mock implementation
    const lowerQuery = query.toLowerCase();
    return mockCustomers.filter(
      (cus) =>
        cus.name.toLowerCase().includes(lowerQuery) ||
        cus.phone.includes(query) ||
        cus.address.toLowerCase().includes(lowerQuery)
    );
  },

  async createCustomer(data: Partial<Customer>): Promise<Customer> {
    // Mock implementation
    const newCustomer: Customer = {
      id: `cus-${Date.now()}`,
      createdAt: new Date(),
      ...data,
    } as Customer;
    return newCustomer;
  },

  async updateCustomer(id: string, data: Partial<Customer>): Promise<Customer> {
    // Mock implementation
    const cus = mockCustomers.find((c) => c.id === id);
    if (!cus) throw new Error("Customer not found");
    return { ...cus, ...data };
  },
};
