import { AttendanceRecord } from "@/types/attendance";
import { mockAttendance } from "@/mock/attendance";

export const attendanceService = {
  async getToday(): Promise<AttendanceRecord[]> {
    // Mock implementation - returns today's records
    return mockAttendance;
  },

  async getByDate(date: Date): Promise<AttendanceRecord[]> {
    // Mock implementation
    return mockAttendance.filter((record) => record.date.toDateString() === date.toDateString());
  },

  async getByEmployee(employeeId: string): Promise<AttendanceRecord[]> {
    // Mock implementation
    return mockAttendance.filter((record) => record.employeeId === employeeId);
  },

  async checkIn(employeeId: string): Promise<AttendanceRecord> {
    // Mock implementation
    const record: AttendanceRecord = {
      id: `att-${Date.now()}`,
      employeeId,
      employeeName: "Mock Employee",
      department: "Mock Department",
      checkInTime: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
      status: "có mặt",
      date: new Date(),
    };
    return record;
  },

  async checkOut(employeeId: string): Promise<AttendanceRecord> {
    // Mock implementation
    const record: AttendanceRecord = {
      id: `att-${Date.now()}`,
      employeeId,
      employeeName: "Mock Employee",
      department: "Mock Department",
      checkInTime: "08:00",
      checkOutTime: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
      status: "có mặt",
      date: new Date(),
    };
    return record;
  },
};
