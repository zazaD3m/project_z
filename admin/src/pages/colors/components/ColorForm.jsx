import { Button } from "../../../components/ui/Button";
import { Card, CardContent } from "../../../components/ui/Card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/Form";
import { Input } from "../../../components/ui/Input";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const schema = yup.object({
  colorLabel: yup.string().required("Color label is required"),
  colorHex: yup.string().required("Color Hex value is required"),
});

const ColorForm = ({ currentColor, currentHex, page }) => {
  const [colorValue, setColorValue] = useState(currentHex || null);

  const form = useForm({
    defaultValues: {
      colorLabel: currentColor || "",
      colorHex: currentHex || "",
    },
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const { handleSubmit, control, getValues } = form;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="flex flex-col items-center justify-center pt-6">
      <Card>
        <CardContent className="flex w-96 flex-col items-center gap-y-8 pt-6">
          {page === "edit" && (
            <div>
              <p>
                Current color: <span>{currentColor}</span>
              </p>
              <p>
                Current hex value: <span>{currentHex}</span>
              </p>
            </div>
          )}
          <Form {...form}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center gap-y-8"
            >
              <FormField
                control={control}
                name="colorLabel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold">
                      Color label
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={`${currentColor || "red"}`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="colorHex"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold">
                      Color hex value
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={`${currentHex || "FF0000"}`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">
                {page === "edit" ? "Edit" : "Add New"} Color
              </Button>
              <div className="flex w-full gap-x-8">
                <Button
                  type="button"
                  onClick={() => {
                    setColorValue(getValues("colorHex"));
                  }}
                >
                  Check Color
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    setColorValue(null);
                  }}
                >
                  Hide Color
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      {colorValue && (
        <div className="relative mt-10 flex h-80 w-80 flex-col items-center justify-center rounded-lg bg-white">
          <h2 className="absolute top-4 text-xl text-black">Your Color:</h2>
          <div
            className="h-36 w-36 rounded-full"
            style={{ backgroundColor: `#${colorValue}` }}
          ></div>
        </div>
      )}
    </div>
  );
};
export default ColorForm;

// <div className="flex justify-center pt-6">
//   <Card>
//     <CardContent className="flex w-96 flex-col items-center gap-y-8 pt-6">
//       <div className="grid gap-2">
//         <Label htmlFor="addColorLabelInput">Label</Label>
//         <Input id="addColorLabelInput" type="text" />
//         {currentLabel && (
//           <div className="flex gap-x-2">
//             <p>Current Label:</p>
//             <span>{currentLabel}</span>
//           </div>
//         )}
//       </div>
//       <div className="grid gap-2">
//         <Label htmlFor="addColorHexInput">Hex value</Label>
//         <Input id="addColorHexInput" type="text" />
//         {currentHex && (
//           <div className="flex gap-x-2">
//             <p>Current Hex:</p>
//             <span>{currentHex}</span>
//           </div>
//         )}
//       </div>
//     </CardContent>
//     <CardFooter>
//       <Button className="w-full">
//         {page === "edit" ? "Edit" : "Save"} Color
//       </Button>
//     </CardFooter>
//   </Card>
// </div>;
