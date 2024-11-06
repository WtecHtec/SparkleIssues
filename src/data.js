export const pricingPlans = [
 {
   title: 'Free',
   price: '$0',
   period: 'forever',
   description: 'Perfect for getting started',
   buttonText: 'Get Started',
   features: [
     { text: 'Basic Sparkle configuration', included: true },
     { text: 'Permission scanning', included: true },
     { text: 'Up to 3 apps', included: true },
     { text: 'Community support', included: true },
     { text: 'Advanced configurations', included: false },
     { text: 'Bulk operations', included: false },
     { text: 'Priority support', included: false },
     { text: 'Custom branding', included: false },
   ],
 },
 {
   title: 'Pro',
   price: '$5',
   period: 'per month',
   description: 'Best for active developers',
   buttonText: 'Upgrade to Pro',
   popular: true,
   features: [
     { text: 'Basic Sparkle configuration', included: true },
     { text: 'Permission scanning', included: true },
     { text: 'Unlimited apps', included: true, highlight: true },
     { text: 'Community support', included: true },
     { text: 'Advanced configurations', included: true, highlight: true },
     { text: 'Bulk operations', included: true, highlight: true },
     { text: 'Priority support', included: true, highlight: true },
     { text: 'Custom branding', included: true },
   ],
 },
];

export const faqItems = [
 {
   title: 'Can I switch plans anytime?',
   content: 'Yes, you can upgrade or downgrade your plan at any time.',
 },
 {
   title: 'What payment methods do you accept?',
   content: 'We accept all major credit cards and PayPal.',
 },
 {
   title: 'Is there a free trial for the Pro plan?',
   content: 'Yes, you can try the Pro plan free for 14 days.',
 },
 {
   title: 'Do you offer refunds?',
   content: 'Yes, we offer a 30-day money-back guarantee for all paid plans.',
 },
];