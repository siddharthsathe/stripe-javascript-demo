# Description

Example of integrating Stripe in your ReactJS / Nestjs application.

# Steps to run - Both frontend & backend

1. Clone this repository.
2. Run `docker-compose.yml` from the root level.
3. Set environment variables for Stripe secret & publishable key in your `.env` file.
3. Check the logs, both services should be up & running.
4. Open up http://localhost:3000 in your favourite browser, enter valid payment details and your payment will be captured! 


# Planned additions

1. UPI demo with Stripe.
2. Demonstrate use of capturing payment and payment methods data with [webhooks](https://stripe.com/docs/webhooks).
