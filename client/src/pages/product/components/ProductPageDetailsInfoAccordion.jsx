import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

const ProductPageDetailsInfoAccordion = () => {
  return (
    <Accordion type="multiple">
      <AccordionItem value="productPageAccordionItem-1">
        <AccordionTrigger className="text-sm font-normal xl:text-base">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent className="text-xs font-light xl:text-sm">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="productPageAccordionItem-2">
        <AccordionTrigger className="text-sm font-normal xl:text-base">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent className="text-xs font-light xl:text-sm">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="productPageAccordionItem-3">
        <AccordionTrigger className="text-sm font-normal xl:text-base">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent className="text-xs font-light xl:text-sm">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default ProductPageDetailsInfoAccordion;
