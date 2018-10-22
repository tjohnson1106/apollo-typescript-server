"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Stripe = require("stripe");
console.log(process.env.STRIPE_SECRET);
exports.stripe = new Stripe(process.env.STRIPE_SECRET);
//# sourceMappingURL=stripe.js.map