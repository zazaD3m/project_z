import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../components/ui/Form";

import * as yup from "yup";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import { Plus, Trash } from "lucide-react";

const schema = yup.object().shape({
  brands: yup.array().of(
    yup.object().shape({
      value: yup.string().trim().required("Enter brand"),
    }),
  ),
});

const BrandForm = () => {
  const form = useForm({
    defaultValues: {
      brands: [{ value: "" }],
    },
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const { handleSubmit, control, formState } = form;

  const { errors, isDirty, isSubmitting, isValid } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "brands",
    control: control,
  });

  function onSubmit(data) {
    const { brands } = data;
    const brandNames = brands
      .map((el, i) => {
        if (brands.length === 1) {
          return el.value;
        }
        if (brands.length - 1 === i) {
          return `and ${el.value}`;
        }
        if (brands.length - 2 === i) {
          return `${el.value} `;
        }
        return `${el.value}, `;
      })
      .join("");

    const submitMsg = `${brandNames} ${
      brands.length > 1 ? "have " : "has "
    } been added to brands`;
    toast.success(submitMsg, {
      duration: 5000,
    });
    console.log(data);
  }

  const onError = (errors) => {
    // let errorsArr = [];
    // let emptyFields = false;
    // let errorMsg = "";
    // for (const error in errors) {
    //   if (errors[error].message) {
    //     errorsArr.push(errors[error].message);
    //   }
    //   if (Array.isArray(errors[error])) {
    //     emptyFields = true;
    //   }
    // }
    // if (emptyFields) {
    //   errorsArr.push("Remove empty field");
    // }
    // errorsArr.forEach((err, i) => {
    //   errorMsg += `${i + 1}) ${err} \n `;
    // });
    // toast.error(<span>{errorMsg}</span>, {
    //   className: "border border-destructive",
    // });
    console.log(errors);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="flex flex-col items-center gap-y-12"
        >
          <div className="inputFields flex w-full max-w-sm flex-col gap-4">
            <div>
              <p className="text-xl font-semibold">{`Brand's'`}</p>
              <p className="mb-4">Enter {`brand's'`} you want to add</p>
            </div>
            {fields.map((field, index) => {
              return (
                <FormField
                  control={control}
                  key={field.id}
                  name={`brands.${index}.value`}
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormControl>
                          <div className="flex items-center gap-4">
                            <span
                              className={`${
                                errors?.brands?.[index] && "text-destructive"
                              } text-center text-lg`}
                            >
                              {index + 1}
                            </span>
                            <Input {...field} type="text" />
                            <Button
                              className={`${fields.length === 1 && "hidden"}`}
                              type="button"
                              size="icon"
                              variant="destructive"
                              onClick={() => remove(index)}
                            >
                              <Trash />
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              );
            })}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => append({ value: "" })}
            >
              <Plus />
            </Button>
          </div>
          <Button
            disabled={!isDirty || isSubmitting || !isValid}
            size="lg"
            type="submit"
          >
            Add {fields.length > 1 ? "Brands" : "Brand"}
          </Button>
        </form>
        <DevTool control={control} />
      </Form>
    </>
  );
};
export default BrandForm;
