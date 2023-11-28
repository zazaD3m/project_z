import { Button } from "../../../components/ui/Button";
import { Checkbox } from "../../../components/ui/Checkbox";
import { Input } from "../../../components/ui/Input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/Form";

import * as yup from "yup";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import { Plus, Trash } from "lucide-react";

const parentCategories = [
  {
    id: "men",
    label: "Men",
  },
  {
    id: "women",
    label: "Women",
  },
  {
    id: "kids",
    label: "Kids",
  },
];

const schema = yup.object().shape({
  parentCategories: yup.array().min(1, "Select at least 1 parent category"),
  addCategoryInputField: yup.array().of(
    yup.object().shape({
      value: yup.string().trim().required("Enter category"),
    }),
  ),
});

let renderCount = 0;

const CategoryForm = () => {
  renderCount++;

  const form = useForm({
    defaultValues: {
      parentCategories: [],
      addCategoryInputField: [{ value: "" }],
    },
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const { handleSubmit, control, formState } = form;

  const { errors, isDirty, isSubmitting, isValid } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "addCategoryInputField",
    control: control,
  });

  function onSubmit(data) {
    const submitMsg = `Categories - ${data.addCategoryInputField
      .map((el, i) => {
        if (data.addCategoryInputField.length === 1) {
          return el.value;
        }
        return i + 1 === data.addCategoryInputField.length
          ? `and ${el.value}`
          : i + 2 === data.addCategoryInputField.length
          ? el.value
          : `${el.value},`;
      })
      .join(" ")}  \n has been added to - ${data.parentCategories
      .map((el, i) => {
        if (data.parentCategories.length === 1) {
          return el;
        }
        if (data.parentCategories.length === 2) {
          return i === 0 ? `${el}` : ` and ${el}`;
        }
        if (data.parentCategories.length === 3) {
          return i === 0 ? `${el},` : i === 1 ? el : ` and ${el}`;
        }
      })
      .join(" ")}`;
    toast.success(submitMsg, {
      duration: 10000,
    });
  }

  const onError = (errors) => {
    let errorsArr = [];
    let emptyFields = false;
    let errorMsg = "";
    for (const error in errors) {
      if (errors[error].message) {
        errorsArr.push(errors[error].message);
      }
      if (Array.isArray(errors[error])) {
        emptyFields = true;
      }
    }
    if (emptyFields) {
      errorsArr.push("Remove empty field");
    }
    errorsArr.forEach((err, i) => {
      errorMsg += `${i + 1}) ${err} \n `;
    });
    toast.error(<span>{errorMsg}</span>, {
      className: "border border-destructive",
    });
  };

  return (
    <>
      <div>Render count: {renderCount / 2}</div>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="flex flex-col items-center gap-y-12"
        >
          <FormField
            control={control}
            name="parentCategories"
            render={() => (
              <FormItem className="rounded-lg border p-4 pt-2 shadow-sm">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold">
                    Select parent category
                  </h2>
                </div>
                {parentCategories.map((item) => (
                  <FormField
                    key={item.id}
                    control={control}
                    name="parentCategories"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="parentCategories-start flex flex-row items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              className="h-5 w-5"
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id,
                                      ),
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="w-full text-lg font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="inputFields flex w-full max-w-sm flex-col gap-4">
            <div>
              <p className="text-xl font-semibold">Categories</p>
              <p className="mb-4">Enter categories you want to add</p>
            </div>
            {fields.map((field, index) => {
              return (
                <FormField
                  control={control}
                  key={field.id}
                  name={`addCategoryInputField.${index}.value`}
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormControl>
                          <div className="flex items-center gap-4">
                            <span
                              className={`${
                                errors?.addCategoryInputField?.[index] &&
                                "text-destructive"
                              } text-center text-lg`}
                            >
                              {index + 1}
                            </span>
                            <Input {...field} />
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
            Add {fields.length > 1 ? "Categories" : "Category"}
          </Button>
        </form>
        <DevTool control={control} />
      </Form>
    </>
  );
};
export default CategoryForm;
