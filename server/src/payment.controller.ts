import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateIntentDTO, IPaymentIntentResponse } from './dto/payment.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  // todo: remove after writing test cases
  @Get()
  public getHello() {
    return 'Hello World!';
  }

  @Post('intent')
  async createIntent(
    @Body() paymentIntentDTO: CreateIntentDTO,
  ): Promise<IPaymentIntentResponse> {
    return this.paymentService.createIntent(paymentIntentDTO);
  }
}
