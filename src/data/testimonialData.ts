// testimonialData.ts

interface Testimonial {
    name: string;
    feedback: string;
    image: string;
  }
  
  export const testimonials: Testimonial[] = [
    {
      name: "John Doe",
      feedback:
        " I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.",
      image: "/avatar.svg"
    },
    {
      name: "Jane Doe 2",
      feedback:
        "As a professional athlete, I rely on high-performance gear for my training. This site offers a great selection of top-notch products.",
      image: "/avatar.svg"
    },
    {
        name: "Jane Doe 3",
        feedback:
          "As a professional athlete, I rely on high-performance gear for my training. This site offers a great selection of top-notch products.",
       image: "/avatar.svg"
      },
    // Add more testimonials as needed
  ];
  