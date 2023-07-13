import { Product } from "src/app/products/utils/Products";
import { IUserVm } from "./user.interface";

export interface IOrderVm {
    OrderDate: Date | string | null;
    OrderId: number;
    PaymentType: string;
    UserId: string;
    Products: Product[];
    TotalPrice?: number | undefined;
    User?: IUserVm | undefined;
  }