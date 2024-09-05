import { CallToAction } from "@/src/components/main/callToAction";
import { Features } from "@/src/components/main/features";
import { Hero } from "@/src/components/main/hero";
import { HowItWork } from "@/src/components/main/how-work";
import { Scenarios } from "@/src/components/main/UseCase";
import { Testimonials } from "@/src/components/main/testimonials";
import { howItWorkSteps } from "@/src/data/howItWorksdata";
import Image from "next/image";


export default function Home() {
  return (
    <div>
    <Hero/>
 <HowItWork steps={howItWorkSteps} />
 <Scenarios/>
 <Features/>
 <Testimonials/>
 <CallToAction/>
    </div>
  );
}
