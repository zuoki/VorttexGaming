import { SignUp } from "@clerk/nextjs";
import "./SignUp.css";
export default function Page() {
  return (
    <div className="aca">
      <SignUp className="SignUp" />
    </div>
  );
}
