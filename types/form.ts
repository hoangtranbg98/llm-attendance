export type FormType = "biên bản bàn giao" | "yêu cầu nghỉ phép" | "yêu cầu tăng ca" | "đơn điều chỉnh chấm công" | "đơn công tác" | "yêu cầu thanh toán chi phí";

export interface Form {
  id: string;
  type: FormType;
  title: string;
  description: string;
}
