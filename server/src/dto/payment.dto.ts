import { IsDefined, IsOptional } from 'class-validator';

export class CreateIntentDTO {
  @IsDefined()
  total: number;

  @IsDefined()
  currency: string;

  @IsDefined()
  paymentMethodId: string;

  // required for unit tests BUT optional for HTTP requests
  @IsOptional()
  customer?: string;
}

export interface IPaymentIntentResponse {
  clientSecret: string;
}
