import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Stripe } from 'stripe';
import { CreateIntentDTO, IPaymentIntentResponse } from './dto/payment.dto';

@Injectable()
export class PaymentService {
  constructor(private readonly configService: ConfigService) {}

  stripe = new Stripe(this.configService.get<string>('STRIPE_SECRET_KEY'), {
    apiVersion: this.configService.get('STRIPE_API_VERSION'),
  });

  async createIntent({
    total,
    paymentMethodId,
    currency,
    customer,
  }: CreateIntentDTO): Promise<IPaymentIntentResponse> {
    try {
      const { client_secret }: Stripe.PaymentIntent =
        await this.stripe.paymentIntents.create({
          amount: total,
          confirmation_method: 'automatic',
          payment_method: paymentMethodId,
          currency,
          customer,
        });
      return { clientSecret: client_secret };
    } catch (error) {
      if (error.statusCode) {
        throw new BadRequestException(error);
      }
      throw new InternalServerErrorException(error);
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
