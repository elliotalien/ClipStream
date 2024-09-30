import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  icon: ImageProps;
  heading: string;
  description: string;
  button: ButtonProps;
};

type Props = {
  heading: string;
  sections: SectionProps[];
};

export type Layout242Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout242 = (props: Layout242Props) => {
  const { heading, sections } = { ...props, ...Layout242Defaults } as Props;
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 relative top-[100px] ">
      <div className="container flex flex-col items-start ">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">{heading}</h3>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {sections.map((section, index) => (
            <div key={index}>
              <div className="rb-5 mb-5 md:mb-6">
                <img src={section.icon.src} className="size-12" alt={section.icon.alt} />
              </div>
              <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">{section.heading}</h3>
              <p className="mb-5 md:mb-6">{section.description}</p>
              <div className="mt-6 flex items-center gap-4 md:mt-8">
                <Button
                  variant={section.button.variant}
                  size={section.button.size}
                  iconRight={section.button.iconRight}
                  iconLeft={section.button.iconLeft}
                  className="text-white"
                >
                  {section.button.title}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout242Defaults: Layout242Props = {
  heading: "Effortlessly upload and segment your videos into smaller clips.",
  sections: [
    {
      icon: {
        src: "icons/Upload.png",
        alt: "Relume logo 1",
      },
      heading: "Automatic video segmentation made simple and efficient.",
      description:
      "Our platform allows you to upload large videos seamlessly.",
      button: {
        title: "Upload",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      icon: {
        src: "icons/Download.png",
        alt: "Relume logo 2",
      },
      heading: "Transform your videos into easily shareable clips in seconds.",
      description:
      "Experience the convenience of automatic video trimming after your upload.",
      button: {
        title: "Download",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      icon: {
        src: "icons/Play.png",
        alt: "Relume logo 3",
      },
      heading: "Start your video editing journey with just a few clicks.",
      description:
        "Join our community and make video sharing effortless.",
      button: {
        title: "Play",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};
