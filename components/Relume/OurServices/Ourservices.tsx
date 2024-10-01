import { Layout6SlotDefaults } from "@/Data/Data"; 

type Props = {
  slot1: React.ReactNode[];
  slot2: React.ReactNode[];
};

export type Layout6SlotProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout6Slot = (props: Layout6SlotProps) => {
  const { slot1, slot2 } = {
    ...Layout6SlotDefaults,
    ...props,
  } as Props;
  
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-black/95 text-white relative top-[100px] max-[450px]:top-[71px]">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            {slot1.map((item, index) => (
              <div key={index}>{item}</div> 
            ))}
          </div>
          <div>
            {slot2.map((item, index) => (
              <div key={index}>{item}</div> 
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
