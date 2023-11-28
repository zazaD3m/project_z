/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
import { Label } from "../../../components/ui/Label";
import { Input } from "../../../components/ui/Input";
import { Button } from "../../../components/ui/Button";

import { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

const Youtubeform = () => {
  const form = useForm({
    // set a default values for form
    defaultValues: {
      username: "Batman",
      email: "adfs@mail.com",
      channel: "asdfasd",
      social: {
        // if we want to get nested object in submitted form, when u register input name should be social.twitter || social.facebook etc.
        twitter: "asdf",
        facebook: "adfg",
      },
      phoneNumbers: ["", ""], // if we want to get array in submitted form, when u register input name should be phoneNumbers.0 || .1 etc.
      phNumbers: [
        // if we want dynamic form fields that user can add on its own
        { number: "" },
      ],
      age: 0,
      dob: new Date(),
    },
    // GET default values from db
    // async () => {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/users/1",
    //   );
    //   const data = await response.json();
    //   return {
    //     username: "Batman",
    //     email: data.email,
    //     channel: "",
    //   };
    // },
    // mode: "onBlur", // default validation mode
  });
  const {
    register, // function to register form field to hookform
    control, // control for hookform devtools
    handleSubmit, // handler function to listen to forms onSubmit event listener
    formState, // object that tracks form state
    watch, // watch form values change
    getValues, // get value from input field
    setValue, // set value programatically, by default this doesn't change input state, we can add options to change it
    reset, // function that resets form values to their defaults
    trigger, // function that triggers manual validation
  } = form;

  const {
    errors, // object that tracks form s errors
    touchedFields, // state that tracks if user interacted with form field
    dirtyFields, // state that tracks if user has changed form field, value is tracked against default value so if you revert it to default value it will revert to false
    isDirty, // state that tracks entire form for changed fields
    isValid, //
    isSubmitting, //
    isSubmitted, //
    isSubmitSuccessful, //
    submitCount, //
  } = formState;

  // console.log({ isSubmitting, isSubmitted, isSubmitSuccessful, submitCount });

  // function for handling dynamic form fields
  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control: control,
  });

  const onSubmit = (data) => {
    // data = form data
    console.log("form submitted");
    console.log(data);
  };

  const onError = (errors) => {
    console.log("Form errors", errors);
  };

  // get values from input fields without rerender and tied to an action
  // to specify input field getValues("username")
  // to specify multiple input fields getValues(["username", "emial", ...])
  const handleGetvalues = () => {
    console.log("Get values", getValues());
  };

  // set value programatically, by default this doesn't change input state, we can add options to change it
  const handleSetvalue = () => {
    setValue("username", "", {
      shouldValidate: true,
      shouldTouch: true,
      shouldDirty: true,
    });
  };

  // store input field data in variable to show in UI, rerenders on every onChange
  // for watching multiple values watch(["username", "email", ...])
  // to watch entire form use watch()
  // const watchUsername = watch("username");

  // this way UI wont rerender
  // useEffect(() => {
  //   const subscription = watch((value) => {
  //     console.log(value);
  //   });
  //   return () => subscription.unsubscribe;
  // }, [watch]);

  // when form is submitted form is reset to its default values
  // useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     reset();
  //   }
  // }, [isSubmitSuccessful, reset]);

  renderCount++;
  return (
    <>
      <h2>Watchded value: </h2>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        noValidate // stop browser validation to allow hookform validation
      >
        <h1 className="mb-4">render count: {renderCount / 2}</h1>
        <div className="username my-2 mb-2 space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            autoComplete="on"
            type="text"
            id="username"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
            })}
          />
          <div className="flex items-center">
            <p className="text-destructive">{errors.username?.message}</p>
          </div>
        </div>
        <div className="email my-2 mb-2 space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            autoComplete="on"
            type="email"
            id="email"
            {...register("email", {
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Invalid email format",
              },
              validate: {
                // custom validation
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@example.com" ||
                    "Enter a different email address"
                  );
                },
                notBlackListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("baddomain.com") ||
                    "This domain is not supported"
                  );
                },
                // async validation
                emailAvailable: async (fieldValue) => {
                  const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users?email=${fieldValue}`,
                  );
                  const data = await response.json();
                  return data.length == 0 || "Email already exists";
                },
              },
            })}
          />
          <div className="flex items-center">
            <p className="text-destructive">{errors.email?.message}</p>
          </div>
        </div>
        <div className="channel my-2 mb-2 space-y-2">
          <Label htmlFor="channel">Channel</Label>
          <Input
            type="text"
            id="channel"
            {...register("channel", {
              required: {
                value: true,
                message: "Channel name is required",
              },
            })}
          />
          <div className="flex items-center">
            <p className="text-destructive">{errors.channel?.message}</p>
          </div>
        </div>
        <div className="socials my-2 mb-2 space-y-2">
          <Label htmlFor="twitter">Twitter</Label>
          <Input
            type="text"
            id="twitter"
            {...register("social.twitter", {
              required: {
                value: true,
                message: "Twitter is required",
              },
            })}
          />
          <div className="flex items-center">
            <p className="text-destructive">
              {errors.social?.twitter?.message}
            </p>
          </div>
          <Label htmlFor="facebook">Facebook</Label>
          <Input
            type="text"
            id="facebook"
            {...register("social.facebook", {
              // disabled: true,
            })}
          />
        </div>
        <div className="phonenumbers my-2 mb-2 space-y-2">
          <Label htmlFor="primary-phone">Primary phone number</Label>
          <Input
            type="text"
            id="primary-phone"
            {...register("phoneNumbers.0")}
          />

          <Label htmlFor="secondary-phone">Secondary phone number</Label>
          <Input
            type="text"
            id="secondary-phone"
            {...register("phoneNumbers.1")}
          />
        </div>
        <div className="dynamicListOfPhoneNumbers my-2 mb-2 space-y-2">
          <div>
            {/* Dynamic form fields with add and remove field functionality */}
            <Label>List of phone numbers</Label>
            <div>
              {fields.map((field, i) => {
                return (
                  <div className="my-4 space-y-2" key={field.id}>
                    <Input type="text" {...register(`phNumbers.${i}.number`)} />
                    {i > 0 && (
                      <Button
                        type="button"
                        variant="destructive"
                        onClick={() => remove(i)}
                      >
                        Remove phone number
                      </Button>
                    )}
                  </div>
                );
              })}
              <Button
                className="my-2"
                type="button"
                onClick={() => append({ number: "" })}
              >
                Add phone number
              </Button>
            </div>
          </div>
        </div>
        {/* get numberic value from the form */}
        <div className="age my-2 mb-2 space-y-2">
          <Label htmlFor="age">Age</Label>
          <Input
            type="number"
            id="age"
            {...register("age", {
              valueAsNumber: true,
              required: {
                value: true,
                message: "Age is required",
              },
            })}
          />
          <div className="flex items-center">
            <p className="text-destructive">{errors.age?.message}</p>
          </div>
        </div>
        {/* get date value from the form */}
        {/* <div className="dateofbirth my-2 mb-2 space-y-2">
          <Label htmlFor="dob">Date of birth</Label>
          <Input
            type="date"
            id="dob"
            {...register("dob", {
              valueAsDate: true,
              required: {
                value: true,
                message: "Date of birth is required",
              },
            })}
          />
          <div className="flex items-center">
            <p className="text-destructive">{errors.dob?.message}</p>
          </div>
        </div> */}

        <div className="mt-10 flex flex-wrap gap-x-4 gap-y-4">
          <Button disabled={!isDirty || isSubmitting}>Submit</Button>
          <Button type="button" onClick={handleGetvalues}>
            Get values
          </Button>
          <Button type="button" onClick={() => reset()}>
            REset
          </Button>
          <Button type="button" onClick={handleSetvalue}>
            Set value
          </Button>
          {/* to validate certain input pass arg to trigger("username") */}
          <Button type="button" onClick={() => trigger()}>
            Validate
          </Button>
        </div>
      </form>
      <DevTool control={control} />
    </>
  );
};
export default Youtubeform;
