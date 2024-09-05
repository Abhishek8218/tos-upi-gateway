// howItWorkData.ts

export interface HowItWorkStep {
    stepNumber: number;
    description: string;
    imageUrl: string;
  }
  
  export const howItWorkSteps: HowItWorkStep[] = [
    {
      stepNumber: 1,
      description:
        "Customer will select the product on your website and proceed to checkout.",
      imageUrl: "/step-1.png",
    },
    {
      stepNumber: 2,
      description:
        "During checkout, UPIGateway generates a dynamic QR code that is displayed on your website.",
      imageUrl: "/step-2.png",
    },
    {
      stepNumber: 3,
      description:
        "The customer will make the payment through any UPI app by scanning the QR code.",
      imageUrl: "/step-3.png",
    },
    {
      stepNumber: 4,
      description:
        "After payment, UPIGateway will verify the transaction and send a status response through webhook.",
      imageUrl: "/step-4.png",
    },
  ];
  