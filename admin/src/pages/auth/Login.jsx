import { Card, CardHeader, CardTitle } from "../../components/ui/Card";
import UserAuthForm from "./UserAuthForm";

const Login = () => {
  return (
    <div className="grid h-screen place-items-center">
      <Card className="flex h-[400px] w-[500px] flex-col justify-around">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Login to your account
          </CardTitle>
        </CardHeader>
        <UserAuthForm />
      </Card>
    </div>
  );
};
export default Login;
