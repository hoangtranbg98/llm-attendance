import { Employee } from "@/types/employee";
import { mockEmployees } from "@/mock/employees";

export const employeeService = {
  async getAll(): Promise<Employee[]> {
    // Mock implementation
    return mockEmployees;
  },

  async getById(id: string): Promise<Employee | undefined> {
    // Mock implementation
    return mockEmployees.find((emp) => emp.id === id);
  },

  async search(query: string): Promise<Employee[]> {
    // Mock implementation
    const lowerQuery = query.toLowerCase();
    return mockEmployees.filter(
      (emp) =>
        emp.name.toLowerCase().includes(lowerQuery) ||
        emp.employeeId.toLowerCase().includes(lowerQuery) ||
        emp.email?.toLowerCase().includes(lowerQuery)
    );
  },

  async createEmployee(data: Partial<Employee>): Promise<Employee> {
    // Mock implementation
    const newEmployee: Employee = {
      id: `emp-${Date.now()}`,
      employeeId: `NV${Date.now()}`,
      status: "active",
      createdAt: new Date(),
      ...data,
    } as Employee;
    return newEmployee;
  },

  async updateEmployee(id: string, data: Partial<Employee>): Promise<Employee> {
    // Mock implementation
    const emp = mockEmployees.find((e) => e.id === id);
    if (!emp) throw new Error("Employee not found");
    return { ...emp, ...data };
  },
};
