import { Navbar1 } from "@/components/Relume/Navbar/Navbar";
import { Header79 } from "@/components/Relume/Hero/Hero";
import { Layout1Slot } from "@/components/Relume/Feature/Feature";
import { Layout242 } from "@/components/Relume/Process/Process";
import { Layout415 } from "@/components/Relume/OurServices/Services";
import { Testimonial1 } from "@/components/Relume/Testimonial/testimonia";
import { Cta5 } from "@/components/Relume/Cta/Cta";
import { Faq5 } from "@/components/Relume/Faq/Faq";
import { Footer5 } from "@/components/Relume/Footer/Footer";


export default function Home() {
  return (

    <div>
      <Navbar1 />
      <Header79 />
      <Layout1Slot />
      <Layout242 />
      <Layout415 />
      <Testimonial1/>
      <Cta5/>
      <Faq5/>
      <Footer5/>
    </div>
  );
}
