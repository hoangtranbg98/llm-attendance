import { Customer } from "@/types/customer";

export const mockCustomers: Customer[] = [
  {
    id: "cus-001",
    name: "Công ty ABC",
    phone: "0988111111",
    address: "KCN Quế Võ, Bắc Ninh",
    department: "Kỹ thuật",
    contactPerson: "Nguyễn Văn X",
    createdAt: new Date("2024-01-10"),
  },
  {
    id: "cus-002",
    name: "Công ty XYZ",
    phone: "0988222222",
    address: "Toà nhà Vincom, Hà Nội",
    department: "Kinh doanh",
    contactPerson: "Trần Thị Y",
    createdAt: new Date("2024-02-15"),
  },
  {
    id: "cus-003",
    name: "Công ty DEF",
    phone: "0988333333",
    address: "Phường Cầu Giấy, Hà Nội",
    department: "IT",
    contactPerson: "Lê Văn Z",
    createdAt: new Date("2024-03-20"),
  },
  {
    id: "cus-004",
    name: "Công ty GHI",
    phone: "0988444444",
    address: "Quận Đống Đa, Hà Nội",
    contactPerson: "Phạm Văn W",
    createdAt: new Date("2024-04-05"),
  },
];
