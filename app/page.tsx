import { Hero } from "@/src/components/main/hero";
import { HowItWork } from "@/src/components/main/how-work";
import { howItWorkSteps } from "@/src/data/howItWorksdata";
import Image from "next/image";


export default function Home() {
  return (
    <div>
    <Hero/>
 <HowItWork steps={howItWorkSteps} />;
    </div>
  );
}
