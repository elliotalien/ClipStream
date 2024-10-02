import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { Cta5Defaults } from "@/Data/Data";

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  video: string;
  videoType: string;
};

export type Cta5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Cta5 = (props: Cta5Props) => {
  const { heading, description, buttons, video, videoType } = {
    ...Cta5Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28  top-[100px] max-[450px]:top-[71px]">
      <div className="container">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="text-base text-text-alternative md:text-md">{description}</p>
          <div className="mt-6 flex gap-x-4 md:mt-8">
            {buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <video className="absolute inset-0 aspect-video size-full object-cover" autoPlay loop muted>
          <source src={video} type={videoType} />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

