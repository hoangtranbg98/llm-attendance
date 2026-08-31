export interface Customer {
  id: string;
  name: string;
  phone: string;
  address: string;
  department?: string;
  contactPerson?: string;
  createdAt: Date;
}
