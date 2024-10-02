"use client";

import { useRef } from "react";
import { useMediaQuery } from "@relume_io/relume-ui";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { Layout415Defaults } from "@/Data/Data";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeatureSectionProps = {
  icon: ImageProps;
  title: string;
  description: string;
};

type Props = {
  heading: string;
  description: string;
  featureSections: FeatureSectionProps[];
};

export type Layout415Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout415 = (props: Layout415Props) => {
  const { heading, description, featureSections } = {
    ...Layout415Defaults,
    ...props,
  } as Props;

  const isMobile = useMediaQuery("(max-width: 767px)");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isMobile ? ["20% start", "end end"] : ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="px-[5%]  bg-black/95 text-white relative top-[100px] max-[450px]:top-[71px]" >
      <div className="container relative h-[300svh] lg:h-[300vh]">
        <div className="static grid h-full grid-cols-1 content-start items-center gap-x-20 gap-y-16 py-16 md:sticky md:top-0 md:h-[100svh] md:grid-cols-2 md:content-normal md:py-0 lg:h-screen">
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
          </div>
          <div className="sticky top-[25%] flex min-h-[24.5rem] flex-col items-center justify-center md:relative md:top-0 md:min-h-[auto]">
            {featureSections.map((section, index) => (
              <FeatureSection
                key={index}
                section={section}
                index={index}
                totalSections={featureSections.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  );
};

const FeatureSection = ({
  section,
  index,
  totalSections,
  scrollYProgress,
}: {
  section: FeatureSectionProps;
  index: number;
  totalSections: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const sectionScrollStart = index / totalSections;
  const sectionScrollEnd = (index + 1) / totalSections;

  const rotate = useTransform(
    scrollYProgress,
    [sectionScrollStart, sectionScrollEnd],
    [0 + index * 3, -30],
  );
  const translateY = useTransform(
    scrollYProgress,
    [sectionScrollStart, sectionScrollEnd],
    ["0vh", "-100vh"],
  );

  const translateX = useTransform(
    scrollYProgress,
    [sectionScrollStart, sectionScrollEnd],
    ["0vw", "-10vw"],
  );

  return (
    <motion.div
      className="absolute ml-6 mr-6 flex flex-col justify-between border border-white bg-background-primary p-8 md:ml-0 bg-black/95 text-white"
      style={{
        rotate: index === totalSections - 1 ? "9deg" : rotate,
        translateY: index === totalSections - 1 ? undefined : translateY,
        translateX: index === totalSections - 1 ? undefined : translateX,
        zIndex: `${totalSections - index}`,
      }}
    >
      <div className="rb-6 mb-6 md:mb-8">
        <img src={section.icon.src} alt={section.icon.alt} className="size-12" />
      </div>
      <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{section.title}</h3>
      <p>{section.description}</p>
    </motion.div>
  );
};

