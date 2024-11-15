import React, { useState } from "react";
import "./styles.css";
import Input from "../input/Input";
import Button from "../Button/Button";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth, db, provider } from "../../firebase";
import { getDoc, Timestamp } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SignupSigninComponent = () => {
  const [loginForm, setLoginForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signupWithEmail = (event) => {
    setLoading(true);
    event.preventDefault();
    console.log("name", name);
    console.log("email", email);
    console.log("password", password);
    console.log("confirmPassword", confirmPassword);

    //authentication

    if (name != "" && email != "" && password != "" && confirmPassword != "") {
      if (password == confirmPassword) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log("User++++++", user);
            toast.success("User Created Successfully!!",{
              position:"top-center",
            });
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");

            createDoc(user);
            setLoading(false);
            navigate("/");

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage,{
              position:"top-center"
            });
            setLoading(false);
            // ..
          });
      } else {
        toast.error("Password and confirm password does not matched",{
          position:"top-center"
        });
      }
    } else {
      toast.error("All fields are Mandetory",{
        position:"top-center"
      });
      setLoading(false);
    }
  };

  function loginUsingEmail(e) {
    e.preventDefault();
    if (email != "" && password != "") {
      // console.log("User", email);
      // console.log("Password", password);
      setLoading(true);

      //login
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          toast.success("Successfully logged in!",{
            position: "top-center"
          });
          console.log("User LogedIn", user);
          setLoading(false);
          createDoc(user);
          navigate("/");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setLoading(false);
          toast.error(errorMessage,{
            position:"top-center"
          });
        });
    } else {
      toast.error("All fields are mandetory!",{
        position:"top-center"
      });
      setLoading(false);
    }
  }

  async function createDoc(user) {
    if (!user) return;
    const userRef = doc(db, "users", user.uid);
    const userData = await getDoc(userRef);
    if (!userData.exists()) {
      try {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName ? user.displayName : name,
          email,
          photoURL: user.photoURL ? user.photoURL : "",
          createdAt: new Date(), // Adds the current timestamp
        });
        toast.success("Doc Created",{
          position:"top-center"
        });
      } catch (error) {
        toast.error(error.message,{
          position:"top-center"
        });
      }
    } else {
      toast.error("doc already exits!",{
        position:"top-center"
      });
    }
  }

  function googleAuth(e) {
    e.preventDefault()
    setLoading(true);
    try {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log(user);
          createDoc(user);
          setLoading(false);
          navigate('/dashboard')
          toast.success("Successfully Login!",{
            position:"top-center"
          });

          // IdP data available using getAdditionalUserInfo(result)
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          setLoading(false);
          toast.error(errorMessage,{
            position:"top-center"
          });
        });
    } catch (error) {
      toast.error(error.message,{
        position:"top-center"
      });
      setLoading(false);
    }
  }
  return (
    <>
      {loginForm ? (
        <>
          <div className="signup-wrapper">
            <h2 className="title">
              Login On <span style={{ color: "var(--theme)" }}>FinTrack</span>.
            </h2>
            <form>
              <Input
                type={"Email"}
                label={"Email"}
                state={email}
                setState={setEmail}
                placeholder={"JohnDoe@gmail.com"}
              />
              <Input
                type={"password"}
                label={"Password"}
                state={password}
                setState={setPassword}
                placeholder={"Password"}
              />
              <Button
                disabled={loading}
                text={loading ? "Loading...." : "Login"}
                onClick={loginUsingEmail} // corrected here
              />
              <p className="l-login">or</p>
              <Button
                text={loading ? "Loading...." : "SignUp Using Google"}
                blue={true}
                onClick={googleAuth}
              />
              <p
                className="l-login"
                style={{ cursor: "pointer" }}
                onClick={() => setLoginForm(!loginForm)}
              >
                Don't Have an Account? <span> Click Here</span>{" "}
              </p>
            </form>
          </div>
        </>
      ) : (
        <div className="signup-wrapper">
          <h2 className="title">
            Sign Up to <span style={{ color: "var(--theme)" }}>FinTrack</span>.
          </h2>
          <form>
            <Input
              type={"text"}
              label={"Full Name"}
              state={name}
              setState={setName}
              placeholder={"John Doe"}
            />
            <Input
              type={"Email"}
              label={"Email"}
              state={email}
              setState={setEmail}
              placeholder={"JohnDoe@gmail.com"}
            />
            <Input
              type={"password"}
              label={"Password"}
              state={password}
              setState={setPassword}
              placeholder={"Password"}
            />
            <Input
              type={"password"}
              label={"Confirm Password"}
              state={confirmPassword}
              setState={setConfirmPassword}
              placeholder={"Confirm Password"}
            />
            <Button
              disabled={loading}
              text={loading ? "Loading...." : "SignUp Using Email and Password"}
              onClick={signupWithEmail} // corrected here
            />
            <p className="l-login">or</p>
            <Button
              text={loading ? "Loading...." : "SignUp Using Google"}
              blue={true}
              onClick={googleAuth}
            />
            <p
              className="l-login"
              onClick={() => setLoginForm(!loginForm)}
              style={{ cursor: "pointer" }}
            >
              Already Have an Account ? <span>Click Here</span>{" "}
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default SignupSigninComponent;
