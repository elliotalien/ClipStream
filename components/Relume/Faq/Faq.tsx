import {
    Button,
    Accordion,
    AccordionTrigger,
    AccordionContent,
    AccordionItem,
  } from "@relume_io/relume-ui";
  
  import type { ButtonProps } from "@relume_io/relume-ui";
  import { RxPlus } from "react-icons/rx";
  import { Faq5Defaults } from "@/Data/Data";
  
  type QuestionsProps = {
    title: string;
    answer: string;
  };
  
  type Props = {
    heading: string;
    description: string;
    footerHeading: string;
    footerDescription: string;
    button: ButtonProps;
    questions: QuestionsProps[];
  };
  
  export type Faq5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Faq5 = (props: Faq5Props) => {
    const { heading, description, questions, footerHeading, footerDescription, button } = {
      ...Faq5Defaults,
      ...props,
    } as Props;
    return (
      <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 relative top-[100px] max-[450px]:top-[71px] bg-black/95 text-white">
        <div className="container">
          <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
          </div>
          <Accordion type="multiple" className="grid items-start justify-stretch gap-4">
            {questions.map((question, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <RxPlus className="size-7 shrink-0 p-1 text-white transition-transform duration-300 md:size-8" />
                  }
                  className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                >
                  {question.title}
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">{question.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className=" mt-12 md:mt-18 lg:mt-20">
            <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              {footerHeading}
            </h4>
            <p className="md:text-md">{footerDescription}</p>
            <div className="mt-6 md:mt-8">
              <Button {...button}>{button.title}</Button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  

  