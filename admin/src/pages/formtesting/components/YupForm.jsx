import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import { Label } from "../../../components/ui/Label";

const schema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Email format is not valid")
    .required("E-mail is required"),
  channel: yup.string().required("Channel is required"),
});

const YupForm = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1> Yup youtube form</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <Label htmlFor="username">Username</Label>
          <Input type="text" id="username" {...register("username")} />
          <p>{errors.username?.message}</p>
        </div>
        <div>
          <Label htmlFor="email">E-mail</Label>
          <Input type="text" id="email" {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <Label htmlFor="channel">Channel</Label>
          <Input type="text" id="channel" {...register("channel")} />
          <p>{errors.channel?.message}</p>
        </div>
        <Button>Submit</Button>
      </form>
      <DevTool control={control} />
    </>
  );
};
export default YupForm;
