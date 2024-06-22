import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils/firebase.utils";
import SignUpForm from "../sign-up-form/sign-up-form.component";
import SignInpForm from "../sign-in-form/sign-in-form.component";
import "./authentication.styles.scss"

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInpForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
