import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/Form";
import { Input } from "../../../components/ui/Input";

const ProductFormTextInput = ({
  control,
  name,
  placeholder,
  inputType = "text",
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-semibold">{placeholder}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} type={inputType} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default ProductFormTextInput;
