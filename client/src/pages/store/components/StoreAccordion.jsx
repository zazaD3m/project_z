import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import StoreFilterBrand from "./StoreFilterBrand";
import StoreFilterColor from "./StoreFilterColor";
import StoreFilterSize from "./StoreFilterSize";

const filterVariants = {
  size: <StoreFilterSize className="" mobile={1} />,
  brand: <StoreFilterBrand className="" mobile={1} />,
  color: <StoreFilterColor className="" mobile={1} />,
};

const StoreAccordion = ({ data }) => {
  return (
    <Accordion type="single" collapsible className="text-sm font-medium">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="translate-y-2 rounded-sm bg-bggray p-4 no-underline focus:no-underline">
          {data.title}
        </AccordionTrigger>
        <AccordionContent className="overflow-hidden rounded-b-sm bg-bggray">
          <div className="rounded-sm border-s-muted bg-white p-4">
            {data.content
              ? data.content.map((item, i) => <h1 key={i}>{item}</h1>)
              : filterVariants[data.title]}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default StoreAccordion;
