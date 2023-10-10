import { Home, Info, Mail, Phone } from "lucide-react";

import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

const ContactPage = () => {
  return (
    <section className="container  bg-bggray py-12 ">
      <div className="flex flex-col rounded-sm bg-primary-foreground p-12 px-10 shadow-sm md:flex-row">
        <section className="mb-8 w-full space-y-8 md:mb-0">
          <h2 className="text-4xl">Contact</h2>
          <div className="space-y-2">
            <div className="w-full space-y-4 md:w-3/4">
              <Input label="Name" id="contactPageFormName" type="text" />
              <Input label="Surname" id="contactPageFormSurname" type="text" />
              <Input label="Email" id="contactPageFormEmail" type="email" />
              <div className="relative">
                <textarea
                  id="contactPageFormMessage"
                  rows="4"
                  className="peer block w-full resize-none rounded-lg border-2  border-gray-300 px-2.5 pb-2.5 pt-4  text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="contactPageFormMessage"
                  className="absolute left-1.5 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  Your Message
                </label>
              </div>
              <Button type="button">click me</Button>
            </div>
          </div>
        </section>
        <section className="w-full space-y-8">
          <h2 className="text-2xl md:text-4xl">Get In Touch With Us</h2>
          <div className="flex items-center gap-2 text-sm">
            <Home className="mb-2" />

            <p>33 New Montgo asdfh afjds 723 fdha</p>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="mb-2" />

            <p>(+995) 547 514</p>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="mb-2" />

            <p>demo@demo.mail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <Info className="mb-2" />

            <p>Monday - Friday 10 AM - 8 AM</p>
          </div>
        </section>
      </div>
    </section>
  );
};
export default ContactPage;
