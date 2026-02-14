// import { Check } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Link } from 'react-router-dom';
// import axios from "axios";
// const plans = [
//   {
//     name: "Basic",
//     subtitle: "For individuals / small teams",
//     price: "Free",
//     period: "",
//     highlighted: false,
//     features: [
//       "1 Workspace",
//       "Up to 5 Members",
//       "10 Projects",
//       "Basic task management",
//       "Basic dashboard",
//       "Community support",
//     ],
//   },
//   {
//     name: "Pro",
//     subtitle: "For growing teams",
//     price: "₹499",
//     period: "/ month",
//     highlighted: true,
//     features: [
//       "Up to 5 Workspaces",
//       "Up to 25 Members",
//       "Unlimited Projects",
//       "Advanced dashboard & analytics",
//       "Roles & permissions",
//       "File uploads (higher storage)",
//       "Email notifications",
//       "Priority support",
//     ],
//   },
//   {
//     name: "Enterprise",
//     subtitle: "For organizations",
//     price: "₹1,000",
//     period: "/ month",
//     highlighted: false,
//     features: [
//       "Unlimited Workspaces",
//       "Unlimited Members",
//       "Advanced permissions",
//       "Audit logs",
//       "SSO / security features",
//       "API access",
//       "Dedicated support",
//     ],
//   },
// ];
// // export const loader = async () => {
// //   return null;
// // };
// export default  function PricingSection  () {
//     const loadRazorpay = () => {
//   return new Promise((resolve) => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";

//     script.onload = () => resolve(true);
//     script.onerror = () => resolve(false);

//     document.body.appendChild(script);
//   });
// };

// const handlePayment = async () => {
//   const sdkLoaded = await loadRazorpay();

//   if (!sdkLoaded) {
//     alert("Razorpay SDK failed to load");
//     return;
//   }

//   if (!window.Razorpay) {
//     alert("Razorpay unavailable");
//     return;
//   }

//   let order;

//   try {
//     const orderResponse = await axios.post(
//       "http://localhost:5000/create-order",
//       { amount: 1 } // rupees
//     );

//     order = orderResponse.data;
//   } catch {
//     alert("Order creation failed");
//     return;
//   }

//   const options = {
//     key: "rzp_live_SFZPGaqeecH12u", // ✅ TEST KEY
//     amount: order.amount,
//     currency: order.currency,
//     name: "Your Company",
//     description: "Test Payment",
//     order_id: order.id,

//     handler: async function (response) {
//       try {
//         const verifyResponse = await axios.post(
//           "http://localhost:5000/verify-payment",
//           response
//         );

//         if (verifyResponse.data.success) {
//           alert("Payment Successful ✅");
//         } else {
//           alert("Payment Verification Failed ❌");
//         }
//       } catch {
//         alert("Verification Error");
//       }
//     },

//     prefill: {
//       name: "Test User",
//       email: "test@example.com",
//     //   contact: "9999999999",
//     },

//     theme: {
//       color: "#3399cc",
//     },
//   };

//   const paymentObject = new window.Razorpay(options);
//   paymentObject.open();
// };

//   return (
//     <section id="pricing" className=" bg-gray-50 w-full overflow-y-auto ">
//       <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Simple, transparent pricing
//           </h2>
//           <p className="text-xl text-gray-700 max-w-3xl mx-auto">
//             Choose the plan that fits your team. Upgrade anytime as you grow.
//           </p>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
//           {plans.map((plan) => (
//             <Card
//               key={plan.name}
//               className={`relative flex flex-col transition-shadow duration-300 ${
//                 plan.highlighted
//                   ? "border-blue-600 border-2 shadow-lg shadow-blue-100"
//                   : "border-gray-200 hover:shadow-lg hover:border-blue-200"
//               }`}
//             >
//               {plan.highlighted && (
//                 <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white hover:bg-blue-600 px-4">
//                   Most Popular
//                 </Badge>
//               )}
//               <CardHeader className="pb-2 pt-8">
//                 <CardTitle className="text-xl font-bold text-gray-900">
//                   {plan.name}
//                 </CardTitle>
//                 <p className="text-sm text-gray-500">{plan.subtitle}</p>
//                 <div className="mt-4">
//                   <span className="text-4xl font-bold text-gray-900">
//                     {plan.price}
//                   </span>
//                   {plan.period && (
//                     <span className="text-gray-500 ml-1">{plan.period}</span>
//                   )}
//                 </div>
//               </CardHeader>
//               <CardContent className="flex-1 flex flex-col pt-4">
//                 <ul className="space-y-3 flex-1">
//                   {plan.features.map((feature) => (
//                     <li key={feature} className="flex items-start gap-2">
//                       <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
//                       <span className="text-gray-700 text-sm">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
               
//                 <Button
//                onClick={handlePayment}
//                   className={`w-full mt-8 ${
//                     plan.highlighted
//                       ? "bg-blue-600 text-white hover:bg-blue-700"
//                       : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50"
//                   }`}
//                 >
//                   {plan.price === "Free" ? "Get Started" : "Choose Plan"}
//                 </Button>
               
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


// import { Check } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import axios from "axios";
// import { startPayment } from "../../../hooks/payment";



// import { Loader2 } from "lucide-react";
// import { useUserProfileQuery } from "../../../hooks/use-user";
// import { useState } from "react";

// const plans = [
//   {
//     name: "Basic",
//     subtitle: "For individuals / small teams",
//     price: "Free",
//     period: "",
//     highlighted: false,
//     features: [
//       "1 Workspace",
//       "Up to 5 Members",
//       "10 Projects",
//       "Basic task management",
//       "Basic dashboard",
//       "Community support",
//     ],
//   },
//   {
//     name: "Pro",
//     subtitle: "For growing teams",
//     price: "₹499",
//     period: "/ month",
//     highlighted: true,
//     features: [
//       "Up to 5 Workspaces",
//       "Up to 25 Members",
//       "Unlimited Projects",
//       "Advanced dashboard & analytics",
//       "Roles & permissions",
//       "File uploads (higher storage)",
//       "Email notifications",
//       "Priority support",
//     ],
//   },
//   {
//     name: "Enterprise",
//     subtitle: "For organizations",
//     price: "₹1,000",
//     period: "/ month",
//     highlighted: false,
//     features: [
//       "Unlimited Workspaces",
//       "Unlimited Members",
//       "Advanced permissions",
//       "Audit logs",
//       "SSO / security features",
//       "API access",
//       "Dedicated support",
//     ],
//   },
// ];

// export default function PricingSection() {
//   const [paymentSuccess, setPaymentSuccess] = useState(false);
// const [selectedPlan, setSelectedPlan] = useState<string | null>(null);


//   const { data: user, isPending: isLoadingUser } = useUserProfileQuery();
//   const isPlanActive =
//   user?.subscriptionStatus === "Active" &&
//   (!user.subscriptionExpiryDate ||
//     new Date(user.subscriptionExpiryDate) > new Date());
 
//     const isCurrentPlan = (planName: string) =>
//   user?.subscriptionPlan === planName && isPlanActive;
//   const token = localStorage.getItem("token");
//   const loadRazorpay = () => {
//     return new Promise<boolean>((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";

//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);

//       document.body.appendChild(script);
//     });
//   };

//   const handlePayment = async (plan: any) => {

//     if (plan.price === "Free") {
//       alert("Free plan selected");
//       return;
//     }

//     if (!user) {
//       alert("User not loaded");
//       return;
//     }

//     const sdkLoaded = await loadRazorpay();

//     if (!sdkLoaded || !window.Razorpay) {
//       alert("Razorpay SDK failed");
//       return;
//     }

//     let order;

//     try {
//       const amount = 1
//         // plan.name === "Pro" ? 499 :
//         // plan.name === "Enterprise" ? 1000 : 1;

//       const orderResponse = await axios.post(
//         `${import.meta.env.VITE_API_URL}/users/create-order`,
//         { amount ,
//             planName: plan.name,

//          },
//           {
//     headers: {
//       Authorization: `Bearer ${token}`,  // ✅ REQUIRED
//     },
//   }
//       );

//       order = orderResponse.data;

//     } catch (err) {
//       console.error(err);
//       alert("Order creation failed");
//       return;
//     }

//     const options = {
//       key: import.meta.env.razorpay_key, // ⚠️ Use TEST key in dev
//       amount: order.amount,
//       currency: order.currency,
//       name: "Your Company",
//       description: `${plan.name} Subscription`,
//       order_id: order.id,

//       handler: async function (response: any) {
//         try {
//           const verifyResponse = await axios.post(
//           `  ${import.meta.env.VITE_API_URL}/users/verify-payment`,
          
//             response,
//              {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }
//           );

//           if (verifyResponse.data.success) {
//            setPaymentSuccess(true);
//           } else {
//             alert("Payment Verification Failed ❌");
//           }

//         } catch (err) {
//           console.error(err);
//           alert("Verification Error");
//         }
//       },

//       // ✅ REAL USER PREFILL
//       prefill: {
//         name: user.name,
//         email: user.email,
//       },

//       theme: {
//         color: "#3399cc",
//       },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   // ✅ Loading UI
//   if (isLoadingUser) {
//     return (
//       <div className="flex justify-center items-center py-20">
//         <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
//       </div>
//     );
//   }

//   return (
//     <section id="pricing" className="bg-gray-50 w-full overflow-y-auto">
//       <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">

//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Simple, transparent pricing
//           </h2>
//           <p className="text-xl text-gray-700 max-w-3xl mx-auto">
//             Choose the plan that fits your team. Upgrade anytime as you grow.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
//           {plans.map((plan) => (
//             <Card
//               key={plan.name}
//               className={`relative flex flex-col transition-shadow duration-300 ${
//                 plan.highlighted
//                   ? "border-blue-600 border-2 shadow-lg shadow-blue-100"
//                   : "border-gray-200 hover:shadow-lg hover:border-blue-200"
//               }`}
//             >
//               {plan.highlighted && (
//                 <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4">
//                   Most Popular
//                 </Badge>
//               )}

//               <CardHeader className="pb-2 pt-8">
//                 <CardTitle className="text-xl font-bold text-gray-900">
//                   {plan.name}
//                 </CardTitle>
//                 <p className="text-sm text-gray-500">{plan.subtitle}</p>

//                 <div className="mt-4">
//                   <span className="text-4xl font-bold text-gray-900">
//                     {plan.price}
//                   </span>
//                   {plan.period && (
//                     <span className="text-gray-500 ml-1">{plan.period}</span>
//                   )}
//                 </div>
//               </CardHeader>

//               <CardContent className="flex-1 flex flex-col pt-4">
//                 <ul className="space-y-3 flex-1">
//                   {plan.features.map((feature) => (
//                     <li key={feature} className="flex items-start gap-2">
//                       <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
//                       <span className="text-gray-700 text-sm">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
// {/* 
//                 <Button
//                   onClick={() => handlePayment(plan)}
//                   className={`w-full mt-8 ${
//                     plan.highlighted
//                       ? "bg-blue-600 text-white hover:bg-blue-700"
//                       : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50"
//                   }`}
//                 >
//                   {plan.price === "Free" ? "Get Started" : "Choose Plan"}
//                 </Button> */}

//                 <Button
//   disabled={isCurrentPlan(plan.name)}
//   onClick={() => handlePayment(plan)}
//   className={`w-full mt-8 ${
//     isCurrentPlan(plan.name)
//       ? "bg-gray-300 cursor-not-allowed"
//       : plan.highlighted
//       ? "bg-blue-600 text-white hover:bg-blue-700"
//       : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50"
//   }`}
// >
//   {isCurrentPlan(plan.name)
//     ? "Current Plan"
//     : plan.price === "Free"
//     ? "Get Started"
//     : "Choose Plan"}
// </Button>

//               </CardContent>
//             </Card>
//           ))}
//         </div>

//       </div>
//       {paymentSuccess && (
//   <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//     <div className="bg-white rounded-xl p-8 max-w-md text-center shadow-xl">
      
//       <h2 className="text-2xl font-bold text-green-600 mb-3">
//         Payment Successful 🎉
//       </h2>

//       <p className="text-gray-600 mb-6">
//         Your subscription is now active. You can start using premium features.
//       </p>

//       <div className="flex gap-3 justify-center">
//         <button
//           onClick={() => window.location.href="/dashboard"}
//           className="bg-blue-600 text-white px-5 py-2 rounded-lg"
//         >
//           Go to Dashboard
//         </button>

//         <button
//           onClick={() => setPaymentSuccess(false)}
//           className="border px-5 py-2 rounded-lg"
//         >
//           Close
//         </button>
//       </div>

//     </div>
//   </div>
// )}

//     </section>
//   );
// }


// import { Check, Loader2 } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import axios from "axios";
// import { useUserProfileQuery } from "../../../hooks/use-user";
// import { useState } from "react";

// const plans = [
//   {
//     name: "Basic",
//     subtitle: "For individuals / small teams",
//     price: "Free",
//     period: "",
//     highlighted: false,
//     features: [
//       "1 Workspace",
//       "Up to 5 Members",
//       "10 Projects",
//       "Basic task management",
//       "Basic dashboard",
//       "Community support",
//     ],
//   },
//   {
//     name: "Pro",
//     subtitle: "For growing teams",
//     price: "₹499",
//     period: "/ month",
//     highlighted: true,
//     features: [
//       "Up to 5 Workspaces",
//       "Up to 25 Members",
//       "Unlimited Projects",
//       "Advanced dashboard & analytics",
//       "Roles & permissions",
//       "File uploads",
//       "Email notifications",
//       "Priority support",
//     ],
//   },
//   {
//     name: "Enterprise",
//     subtitle: "For organizations",
//     price: "₹1,000",
//     period: "/ month",
//     highlighted: false,
//     features: [
//       "Unlimited Workspaces",
//       "Unlimited Members",
//       "Advanced permissions",
//       "Audit logs",
//       "SSO / security features",
//       "API access",
//       "Dedicated support",
//     ],
//   },
// ];

// export default function PricingSection() {
//   const { data: user, isPending: isLoadingUser } = useUserProfileQuery();
//   const [paymentSuccess, setPaymentSuccess] = useState(false);

//   const token = localStorage.getItem("token");

//   // ✅ Subscription validity check
//   const isSubscriptionActive =
//     user?.subscriptionStatus === "Active" &&
//     (!user.subscriptionExpiryDate ||
//       new Date(user.subscriptionExpiryDate) > new Date());

//   const hierarchy = ["Basic", "Pro", "Enterprise"];

//   const isCurrentPlan = (planName: string) =>
//     user?.subscriptionPlan === planName && isSubscriptionActive;

//   const isUpgrade = (planName: string) => {
//     const currentIndex = hierarchy.indexOf(
//       user?.subscriptionPlan ?? "Basic"
//     );
//     const planIndex = hierarchy.indexOf(planName);

//     return planIndex > currentIndex;
//   };

//   const getButtonText = (plan: any) => {
//     if (isCurrentPlan(plan.name)) return "Current Plan";

//     if (isSubscriptionActive && isUpgrade(plan.name))
//       return "Upgrade Plan";

//     if (plan.price === "Free") return "Get Started";

//     return "Choose Plan";
//   };

//   const loadRazorpay = () => {
//     return new Promise<boolean>((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";

//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);

//       document.body.appendChild(script);
//     });
//   };

//   const handlePayment = async (plan: any) => {
//     if (plan.price === "Free") {
//       alert("Free plan selected");
//       return;
//     }

//     if (!user) {
//       alert("User not loaded");
//       return;
//     }

//     const sdkLoaded = await loadRazorpay();

//     if (!sdkLoaded || !window.Razorpay) {
//       alert("Razorpay SDK failed");
//       return;
//     }

//     let order;

//     try {
//       const amount =
//         plan.name === "Pro"
//           ? 499
//           : plan.name === "Enterprise"
//           ? 1000
//           : 1;

//       const orderResponse = await axios.post(
//         `${import.meta.env.VITE_API_URL}/users/create-order`,
//         {
//           amount,
//           planName: plan.name,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       order = orderResponse.data;
//     } catch (err) {
//       console.error(err);
//       alert("Order creation failed");
//       return;
//     }

//     const options = {
//       key: import.meta.env.VITE_RAZORPAY_KEY,
//       amount: order.amount,
//       currency: order.currency,
//       name: "TaskHub",
//       description: `${plan.name} Subscription`,
//       order_id: order.id,

//       handler: async function (response: any) {
//         try {
//           const verifyResponse = await axios.post(
//             `${import.meta.env.VITE_API_URL}/users/verify-payment`,
//             {
//               ...response,
//               planName: plan.name,
//             },
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             }
//           );

//           if (verifyResponse.data.success) {
//             setPaymentSuccess(true);
//           } else {
//             alert("Payment Verification Failed ❌");
//           }
//         } catch (err) {
//           console.error(err);
//           alert("Verification Error");
//         }
//       },

//       prefill: {
//         name: user.name,
//         email: user.email,
//       },

//       theme: {
//         color: "#3399cc",
//       },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   if (isLoadingUser) {
//     return (
//       <div className="flex justify-center items-center py-20">
//         <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
//       </div>
//     );
//   }

//   return (
//     <section className="bg-gray-50 w-full py-16">
//       <div className="max-w-6xl mx-auto px-4">

//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900">
//             Simple, transparent pricing
//           </h2>
//           <p className="text-gray-600 mt-3">
//             Upgrade anytime as you grow 🚀
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {plans.map((plan) => (
//             <Card
//               key={plan.name}
//               className={`relative transition-all duration-300 ${
//                 isCurrentPlan(plan.name)
//                   ? "border-green-500 border-2 shadow-lg"
//                   : plan.highlighted
//                   ? "border-blue-600 border-2 shadow-lg"
//                   : "border-gray-200 hover:shadow-md"
//               }`}
//             >
//               {isCurrentPlan(plan.name) && (
//                 <Badge className="absolute top-3 right-3 bg-green-600">
//                   Active
//                 </Badge>
//               )}

//               <CardHeader>
//                 <CardTitle>{plan.name}</CardTitle>
//                 <p className="text-sm text-gray-500">{plan.subtitle}</p>

//                 <div className="mt-3">
//                   <span className="text-3xl font-bold">
//                     {plan.price}
//                   </span>
//                   <span className="text-gray-500 ml-1">
//                     {plan.period}
//                   </span>
//                 </div>
//               </CardHeader>

//               <CardContent>
//                 <ul className="space-y-2 mb-6">
//                   {plan.features.map((feature) => (
//                     <li key={feature} className="flex gap-2 text-sm">
//                       <Check className="w-4 h-4 text-blue-600" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 <Button
//                   disabled={isCurrentPlan(plan.name)}
//                   onClick={() => handlePayment(plan)}
//                   className={`w-full transition-all duration-300 ${
//                     isCurrentPlan(plan.name)
//                       ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white cursor-not-allowed"
//                       : isSubscriptionActive && isUpgrade(plan.name)
//                       ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:scale-105"
//                       : plan.highlighted
//                       ? "bg-blue-600 text-white hover:bg-blue-700"
//                       : "bg-white border border-gray-300"
//                   }`}
//                 >
//                   {getButtonText(plan)}
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* ✅ Success Modal */}
//       {paymentSuccess && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-xl p-8 max-w-md text-center shadow-xl">

//             <h2 className="text-2xl font-bold text-green-600 mb-3">
//               Payment Successful 🎉
//             </h2>

//             <p className="text-gray-600 mb-2">
//               Your subscription is now active.
//             </p>

//             <p className="font-semibold text-blue-600 mb-6">
//               Plan: {user.subscriptionPlan}
//             </p>

//             <div className="flex gap-3 justify-center">
//               <button
//                 onClick={() => (window.location.href = "/dashboard")}
//                 className="bg-blue-600 text-white px-5 py-2 rounded-lg"
//               >
//                 Go to Dashboard
//               </button>

//               <button
//                 onClick={() => setPaymentSuccess(false)}
//                 className="border px-5 py-2 rounded-lg"
//               >
//                 Close
//               </button>
//             </div>

//           </div>
//         </div>
//       )}
//     </section>
//   );
// }


import { Check, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import axios from "axios";
import { useUserProfileQuery } from "../../../hooks/use-user";
import { useState } from "react";

const plans = [
  {
    name: "Basic",
    subtitle: "For individuals / small teams",
    price: "Free",
    period: "",
    highlighted: false,
    features: [
      "1 Workspace",
      "Up to 5 Members",
      "10 Projects",
      "Basic task management",
      "Basic dashboard",
      "Community support",
    ],
  },
  {
    name: "Pro",
    subtitle: "For growing teams",
    price: "₹499",
    period: "/ month",
    highlighted: true,
    features: [
      "Up to 5 Workspaces",
      "Up to 25 Members",
      "Unlimited Projects",
      "Advanced dashboard & analytics",
      "Roles & permissions",
      "File uploads",
      "Email notifications",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    subtitle: "For organizations",
    price: "₹1,000",
    period: "/ month",
    highlighted: false,
    features: [
      "Unlimited Workspaces",
      "Unlimited Members",
      "Advanced permissions",
      "Audit logs",
      "SSO / security features",
      "API access",
      "Dedicated support",
    ],
  },
];

export default function PricingSection() {
  const { data: user, isPending: isLoadingUser, refetch } =
    useUserProfileQuery();

  const [paymentSuccess, setPaymentSuccess] = useState(true);
  const token = localStorage.getItem("token");

  // ✅ Subscription validity
  const isSubscriptionActive =
    user?.subscriptionStatus === "Active" &&
    (!user.subscriptionExpiryDate ||
      new Date(user.subscriptionExpiryDate) > new Date());

  const hierarchy = ["Basic", "Pro", "Enterprise"];

  const isCurrentPlan = (planName: string) =>
    user?.subscriptionPlan === planName && isSubscriptionActive;

  const isUpgrade = (planName: string) => {
    const currentIndex = hierarchy.indexOf(
      user?.subscriptionPlan ?? "Basic"
    );
    const targetIndex = hierarchy.indexOf(planName);

    return targetIndex > currentIndex;
  };

  const getButtonText = (plan: any) => {
    if (isCurrentPlan(plan.name)) return "Current Plan";
    if (isSubscriptionActive && isUpgrade(plan.name))
      return "Upgrade Plan";
    if (plan.price === "Free") return "Get Started";
    return "Choose Plan";
  };

  const loadRazorpay = () => {
    return new Promise<boolean>((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (plan: any) => {
    if (plan.price === "Free") {
      alert("Free plan selected");
      return;
    }

    if (!user) {
      alert("User not loaded");
      return;
    }

    const sdkLoaded = await loadRazorpay();

    if (!sdkLoaded || !window.Razorpay) {
      alert("Razorpay SDK failed");
      return;
    }

    let order;

    try {
      const amount =
        plan.name === "Pro"
          ? 499
          : plan.name === "Enterprise"
          ? 1000
          : 1;

      const orderResponse = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/create-order`,
        { amount, planName: plan.name },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      order = orderResponse.data;
    } catch (err) {
      console.error(err);
      alert("Order creation failed");
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: order.amount,
      currency: order.currency,
      name: "TaskHub",
      description: `${plan.name} Subscription`,
      order_id: order.id,

      handler: async function (response: any) {
        try {
          const verifyResponse = await axios.post(
            `${import.meta.env.VITE_API_URL}/users/verify-payment`,
            { ...response, planName: plan.name },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          if (verifyResponse.data.success) {
            setPaymentSuccess(true);
            refetch();
          }
        } catch (err) {
          console.error(err);
        }
      },

      prefill: {
        name: user.name,
        email: user.email,
      },
    };

    new window.Razorpay(options).open();
  };

  if (isLoadingUser) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <section className="bg-gray-50 w-full py-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* ✅ CONDITIONAL HEADER */}
        {!isSubscriptionActive ? (
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Simple, transparent pricing
            </h2>
            <p className="text-gray-600 mt-3">
              Choose the plan that fits your team
            </p>
          </div>
        ) : (
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-600">
              Your Active Plan
            </h2>
            <p className="text-gray-600 mt-2">
              {user.subscriptionPlan} • Expires{" "}
              {user.subscriptionExpiryDate
                ? new Date(
                    user.subscriptionExpiryDate
                  ).toDateString()
                : "Never"}
            </p>
          </div>
        )}

        {/* ✅ PLANS */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative transition-all ${
                isCurrentPlan(plan.name)
                  ? "border-green-500 border-2 shadow-lg"
                  : plan.highlighted && !isSubscriptionActive
                  ? "border-blue-600 border-2 shadow-lg"
                  : "border-gray-200"
              }`}
            >
              {plan.highlighted && !isSubscriptionActive && (
                <Badge className="absolute top-3 right-3 bg-blue-600">
                  Most Popular
                </Badge>
              )}

              {isCurrentPlan(plan.name) && (
                <Badge className="absolute top-3 right-3 bg-green-600">
                  Active
                </Badge>
              )}

              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <p className="text-sm text-gray-500">
                  {plan.subtitle}
                </p>
                <div>
                  <span className="text-3xl font-bold">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-1">
                    {plan.period}
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm">
                      <Check className="w-4 h-4 text-blue-600" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  disabled={isCurrentPlan(plan.name)}
                  onClick={() => handlePayment(plan)}
                  className={`w-full ${
                    isCurrentPlan(plan.name)
                      ? "bg-green-600 text-white"
                      : isSubscriptionActive && isUpgrade(plan.name)
                      ? "bg-purple-600 text-white"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {getButtonText(plan)}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* ✅ SUCCESS MODAL */}
      {/* {paymentSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-green-600">
              Payment Successful 🎉
            </h2>
            <p className="mt-2">
              Plan Activated: {user?.subscriptionPlan}
            </p>
            <button
              onClick={() => setPaymentSuccess(false)}
              className="mt-4 border px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )} */}

       {paymentSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md text-center shadow-xl">

            <h2 className="text-2xl font-bold text-green-600 mb-3">
              Payment Successful 🎉
            </h2>

            <p className="text-gray-600 mb-2">
              Your subscription is now active.
            </p>

            <p className="font-semibold text-blue-600 mb-6">
              Plan: {user.subscriptionPlan}
            </p>

            <div className="flex gap-3 justify-center">
              <button
                onClick={() => (window.location.href = "/dashboard")}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                Go to Dashboard
              </button>

              <button
                onClick={() => setPaymentSuccess(false)}
                className="border px-5 py-2 rounded-lg"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

