import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const PLAN_PRICE_ID = {
  seeker_pro: "price_1TfyGfR0QcUZjQD7bayoYuJP",
  seeker_premium: "price_1TgRKYR0QcUZjQD7JOpypZEp",
  recruiter_growth: "price_1TgRLHR0QcUZjQD7Ezckv0SE",
  recruiter_enterprise: "price_1TgRLwR0QcUZjQD7fh80jJ0C",
};
