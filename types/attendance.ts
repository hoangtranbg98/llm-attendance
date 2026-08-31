export type AttendanceStatus = "có mặt" | "đi muộn" | "vắng" | "chưa chấm công" | "thiếu chấm công ra";

export interface AttendanceRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  checkInTime?: string;
  checkOutTime?: string;
  workDuration?: string;
  status: AttendanceStatus;
  date: Date;
}
