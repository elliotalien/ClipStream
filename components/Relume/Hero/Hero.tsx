import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React from "react";
import Image from 'next/image';
import { headerData } from "@/Data/Data";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  imagesPartOne: ImageProps[];
  imagesPartTwo: ImageProps[];
};

const imageColumns = [
  { className: "-mt-[20%] animate-loop-vertically-top" },
  { className: "-mt-[50%] animate-loop-vertically-bottom" },
  { className: "animate-loop-vertically-top" },
  { className: "mt-[-30%] animate-loop-vertically-bottom" },
  { className: "mt-[-20%] animate-loop-vertically-top" },
];

export type Header79Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header79 = (props: Header79Props) => {
  const { heading, description, buttons, imagesPartOne, imagesPartTwo } = {
    ...headerData,  
    ...props,
  } as Props;

  return (
    <section id="Home" className="relative top-[100px] max-[450px]:top-[71px]">
      <div className="px-[5%]">
        <div className="flex max-h-[60rem] min-h-svh items-center">
          <div className="container py-4 md:py-4 lg:py-4">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-[50px]">
                {heading}
              </h1>
              <p className="text-text-alternative md:text-md">{description}</p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                {buttons.map((button, index) => (
                  <Button key={index} {...button}>
                    {button.title}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 z-10 bg-black/50" />
            <div className="grid w-full grid-cols-2 gap-x-4 px-4 md:grid-cols-3 lg:grid-cols-5 bg-black/95">
              {imageColumns.map((column, index) => (
                <AnimatedImageColumn
                  key={index}
                  imagesPartOne={imagesPartOne}
                  imagesPartTwo={imagesPartTwo}
                  className={column.className}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ImageGrid = ({ images }: { images: ImageProps[] }) => (
  <React.Fragment>
    {images.map((image, index) => (
      <div key={index} className="grid size-full grid-cols-1 gap-4">
        <div className="relative w-full pt-[120%]">
          <Image
            src={image.src}
            alt={image.alt || ''}
            layout="fill"
            objectFit="cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
          />
        </div>
      </div>
    ))}
  </React.Fragment>
);

const AnimatedImageColumn = ({
  imagesPartOne,
  imagesPartTwo,
  className,
}: {
  imagesPartOne: ImageProps[];
  imagesPartTwo: ImageProps[];
  className: string;
}) => (
  <div className={`grid size-full columns-2 grid-cols-1 gap-4 self-center ${className}`}>
    <ImageGrid images={imagesPartOne} />
    <ImageGrid images={imagesPartTwo} />
  </div>
);