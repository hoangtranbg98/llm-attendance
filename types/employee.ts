export interface Employee {
  id: string;
  employeeId: string;
  name: string;
  phone?: string;
  email?: string;
  department: string;
  position: string;
  telegram?: string;
  status: "active" | "inactive";
  createdAt: Date;
}
