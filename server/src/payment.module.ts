import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { StripeModule } from './stripe/stripe.module';

@Module({
  imports: [ConfigModule.forRoot(), StripeModule],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
