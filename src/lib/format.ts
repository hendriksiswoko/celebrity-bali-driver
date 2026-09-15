import type { Price } from "@/types/content";
import { PRICE_PLACEHOLDER } from "@/types/content";

/** Renders "USD 45" or, while unconfirmed, "USD XX". Never guesses a number. */
export function formatPrice(price: Price): string {
  return `${price.currency} ${price.amount}`;
}

export function isPricePlaceholder(price: Price): boolean {
  return price.amount === PRICE_PLACEHOLDER;
}
