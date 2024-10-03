import dynamic from 'next/dynamic';
import { RxChevronRight } from 'react-icons/rx';
const Button = dynamic(() => import('@relume_io/relume-ui').then(mod => mod.Button), { ssr: false });
const Tagline = dynamic(() => import('@relume_io/relume-ui').then(mod => mod.Tagline), { ssr: false });
const Heading = dynamic(() => import('@relume_io/relume-ui').then(mod => mod.Heading), { ssr: false });
const Text = dynamic(() => import('@relume_io/relume-ui').then(mod => mod.Text), { ssr: false });
const Img = dynamic(() => import('@relume_io/relume-ui').then(mod => mod.Img), { ssr: false });

type Props = {
  slot1: React.ReactNode[];
  slot2: React.ReactNode[];
};

export type Layout1SlotProps = React.ComponentPropsWithoutRef<'section'> & Partial<Props>;

export const Layout1Slot = (props: Layout1SlotProps) => {
  const { slot1, slot2 } = {
    ...Layout1SlotDefaults,
    ...props,
  } as Props;

  return (
    <section id="About" className="px-[5%] py-16 md:py-24 lg:py-28 relative top-[100px] bg-black/95 text-white max-[450px]:top-[71px]">
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
    <Tagline key="tagline" className="text-white">
      Upload
    </Tagline>,
    <Heading key="heading" headingSize="h2" className="text-white">
      Effortless Video Upload and Segmentation
    </Heading>,
    <Text key="text" className="text-white">
      Our platform simplifies video uploads with a user-friendly interface. Experience advanced segmentation that automatically divides your large videos into manageable clips.
    </Text>,
    <div key="buttons" className="flex gap-3">
      <Button key="upload-button" variant="secondary" className="bg-white">
        Upload
      </Button>
      <Button
        key="learn-more-button"
        variant="link"
        size="link"
        className="text-white"
        iconRight={<RxChevronRight />}
      >
        Learn More
      </Button>
    </div>,
  ],
  slot2: [
    <Img
      key="feature-img"
      src="https://res.cloudinary.com/do5et2jlh/image/upload/v1727952839/Feature_gyljzn.jpg"
      alt="Feature Image"
      className="rounded-lg"
    />,
  ],
};
