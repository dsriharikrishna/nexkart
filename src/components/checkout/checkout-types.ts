export interface CheckoutFormData {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  paymentMethod: "upi" | "card" | "netbanking" | "cod" | "atelier_credit";
  cardNumber?: string;
  cardExpiry?: string;
  cardCvc?: string;
}
