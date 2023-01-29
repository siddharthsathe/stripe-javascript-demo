import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

describe('PaymentController', () => {
  let paymentController: PaymentController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PaymentController],
      providers: [
        PaymentService,
        {
          provide: ConfigService,
          useValue: {
            // Todo: Mock env file
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    paymentController = app.get<PaymentController>(PaymentController);
  });

  // todo: remove after writing test cases
  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(paymentController.getHello()).toBe('Hello World!');
    });
  });
});
