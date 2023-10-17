import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const RecoverAccount = () => {
  return (
    <section className="container grid place-items-center bg-bggray px-6 py-20 sm:px-36 lg:px-96 xl:px-[700px]">
      <div className="flex w-full flex-col items-center rounded-md bg-primary-foreground p-8 shadow-sm">
        <h2 className="mb-4">Reset Your Password</h2>
        <p className="mb-4 text-xs font-light">
          We will send you an email to reset your password
        </p>
        <form
          className="h-full w-full"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex flex-col space-y-6">
            <Input label="Email" id="registerFormEmail" type="email" />
            <Button type="button" className="mx-auto w-40">
              Submit
            </Button>

            <Button
              asChild
              type="button"
              variant="ghost"
              className="mx-auto w-40 rounded-full hover:bg-secondary"
            >
              <Link to="/account/login">Cancel</Link>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default RecoverAccount;
