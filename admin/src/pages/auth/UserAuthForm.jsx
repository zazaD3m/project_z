import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { CardContent, CardFooter } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Label } from "../../components/ui/Label";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserAuthForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      console.log(event.target[0].value);
      console.log(event.target[1].value);
      navigate("/");
    }, 1000);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="loginAuthEmail">Email</Label>
            <Input
              id="loginAuthEmail"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="loginAuthPassword">Password</Label>
            <Input
              id="loginAuthPassword"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button disabled={isLoading} className="w-full">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign In with Email
          </Button>
        </CardFooter>
      </form>
    </>
  );
};
export default UserAuthForm;
