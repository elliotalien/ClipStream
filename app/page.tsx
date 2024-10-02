import { Navbar1 } from "@/components/Relume/Navbar/Navbar";
import { Header79 } from "@/components/Relume/Hero/Hero";
import { Layout1Slot } from "@/components/Relume/Feature/Feature";
import { Layout242 } from "@/components/Relume/Process/Process";
import { Layout6Slot } from "@/components/Relume/OurServices/Ourservices";
import { Testimonial1 } from "@/components/Relume/Testimonial/testimonia";

export default function Home() {
  return (

    <div>
      <Navbar1 />
      <Header79 />
      <Layout1Slot />
      <Layout242 />
      <Layout6Slot />
      <Testimonial1/>
    </div>
  );
}
