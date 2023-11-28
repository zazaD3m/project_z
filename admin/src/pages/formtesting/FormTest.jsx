import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { Card, CardContent } from "../../components/ui/Card";
import Youtubeform from "./components/Youtubeform";
import YupForm from "./components/YupForm";

const FormTest = () => {
  const [showForm, setShowForm] = useState(null);
  return (
    <div className="grid place-items-center pt-12">
      <Card className="min-h-[500px] w-[500px] p-8">
        <CardContent>
          {showForm === null && (
            <>
              <Button onClick={() => setShowForm("youtube")}>Youtube</Button>
              <Button onClick={() => setShowForm("yup")}>Yup</Button>
            </>
          )}
          {showForm === "youtube" ? (
            <Youtubeform />
          ) : showForm === "yup" ? (
            <YupForm />
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
};
export default FormTest;
