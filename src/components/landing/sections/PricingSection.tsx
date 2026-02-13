import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';
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
      "File uploads (higher storage)",
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
export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Choose the plan that fits your team. Upgrade anytime as you grow.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col transition-shadow duration-300 ${
                plan.highlighted
                  ? "border-blue-600 border-2 shadow-lg shadow-blue-100"
                  : "border-gray-200 hover:shadow-lg hover:border-blue-200"
              }`}
            >
              {plan.highlighted && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white hover:bg-blue-600 px-4">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="pb-2 pt-8">
                <CardTitle className="text-xl font-bold text-gray-900">
                  {plan.name}
                </CardTitle>
                <p className="text-sm text-gray-500">{plan.subtitle}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col pt-4">
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="sign-in">
                <Button
               
                  className={`w-full mt-8 ${
                    plan.highlighted
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {plan.price === "Free" ? "Get Started" : "Choose Plan"}
                </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};