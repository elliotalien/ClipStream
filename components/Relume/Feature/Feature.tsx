import { Button, Tagline, Heading, Text, Img } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type Props = {
  slot1: React.ReactNode[];
  slot2: React.ReactNode[];
};

export type Layout1SlotProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout1Slot = (props: Layout1SlotProps) => {
  const { slot1, slot2 } = {
    ...Layout1SlotDefaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 relative top-[100px]">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>{slot1}</div>
          <div>{slot2}</div>
        </div>
      </div>
    </section>
  );
};

export const Layout1SlotDefaults: Layout1SlotProps = {
  slot1: [
    <Tagline>Upload</Tagline>,
    <Heading headingSize="h2">Effortless Video Upload and Segmentation</Heading>,
    <Text>
      Our platform simplifies video uploads with a user-friendly interface. Experience advanced segmentation that automatically divides your large videos into manageable clips.
    </Text>,
    <div className="flex gap-3">
      <Button variant="secondary" className="bg-white">Upload</Button>
      <Button variant="link" size="link" className="text-white" iconRight={<RxChevronRight />}>
      Learn More
      </Button>
    </div>,
  ],
  slot2: [<Img src="/Feature.jpg" />],
};
