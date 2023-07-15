import { Product } from 'src/app/products/utils/Products';
import { User } from './user.interface';

export interface Order {
  OrderDate: Date | string | null;
  OrderId: number;
  PaymentType: string;
  UserId: string;
  Products: (Product & { Quantity: number })[];
  TotalPrice?: number | undefined;
  User?: User | undefined;
}
