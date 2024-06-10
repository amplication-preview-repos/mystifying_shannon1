export type Order = {
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
