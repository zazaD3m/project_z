import { Plus, X } from "lucide-react";
import { Card } from "../../../components/ui/Card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/Form";

const ProductFormImageField = ({
  control,
  name,
  label,
  watchImage,
  watch,
  resetField,
  setValue,
}) => {
  return (
    <Card className="flex w-fit flex-col items-center gap-4 p-4">
      <h2>{label}</h2>
      <Card className="relative h-[200px] w-[200px] border-dashed transition-all hover:bg-accent">
        <FormField
          control={control}
          name={name}
          render={({ field: { value, onChange, ...field } }) => (
            <FormItem className="h-full w-full">
              <FormLabel
                className="flex h-full w-full items-center justify-center object-cover"
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                onDragLeave={(e) => {
                  e.preventDefault();
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  setValue(name, e.dataTransfer.files[0]);
                }}
              >
                <Plus size={80} />
              </FormLabel>
              <FormControl>
                <input
                  {...field}
                  value={value?.fileName}
                  onChange={(event) => {
                    onChange(event.target.files[0]);
                  }}
                  type="file"
                  className="hidden"
                />
              </FormControl>
              <FormMessage className="bg-card text-center text-base" />
            </FormItem>
          )}
        />
        {watchImage && (
          <div className="absolute top-0 z-50 h-full w-full ">
            <img
              className="h-full w-full"
              src={URL.createObjectURL(watch(name))}
              alt=""
            />
            <div className="absolute right-2 top-2 hover:scale-110">
              <X
                size={28}
                onClick={() => {
                  resetField(name);
                }}
              />
            </div>
          </div>
        )}
      </Card>
    </Card>
  );
};
export default ProductFormImageField;
