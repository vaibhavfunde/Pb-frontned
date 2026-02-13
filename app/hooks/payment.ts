import { postData } from "@/lib/fetch-utils";

declare global {
  interface Window {
    Razorpay: any;
  }
}

// ✅ Load Razorpay SDK (safe, avoids duplicate loads)
export const loadRazorpaySdk = () => {
  return new Promise<boolean>((resolve) => {
    const existing = document.querySelector(
      'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
    );

    if (existing) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });
};

// ✅ Create Order API
export const createOrderApi = (amount: number) => {
  return postData<any>("/create-order", { amount });
};

// ✅ Verify Payment API
export const verifyPaymentApi = (data: any) => {
  return postData<any>("/verify-payment", data);
};

// ✅ Start Payment Flow
export const startPayment = async ({
  plan,
  user,
}: {
  plan: any;
  user: { name: string; email: string };
}) => {
  const sdkLoaded = await loadRazorpaySdk();

  if (!sdkLoaded || !window.Razorpay) {
    throw new Error("Razorpay SDK failed to load");
  }

  const amount =
    plan.name === "Pro" ? 499 :
    plan.name === "Enterprise" ? 1000 : 1;

  // ✅ Create backend order
  const order = await createOrderApi(amount);

  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY,
    amount: order.amount,
    currency: order.currency,
    name: "Your Company",
    description: `${plan.name} Subscription`,
    order_id: order.id,

    handler: async function (response: any) {
      const verify = await verifyPaymentApi(response);

      if (verify.success) {
        alert("Payment Successful ✅");
      } else {
        alert("Payment Verification Failed ❌");
      }
    },

    prefill: {
      name: user.name,
      email: user.email,
    },

    theme: {
      color: "#3399cc",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
