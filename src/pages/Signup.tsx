
import { Link } from "react-router-dom";
import useSignUp from "../hooks/useSignUp";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import RegisterDesign from "../components/RegisterDesign";
import RegisterImg from "../components/RegisterImg";
import Loading from "../components/Loading";

export default function Signup() {
  let { formik, SignUpFields,signuploading } = useSignUp();
  return (
    <>
      <div className="flex flex-col lg:flex-row object-center font">
        <RegisterImg />
        <div className="mb-5 lg:mb-0 mt-10 lg:order-2 order-1">
          <RegisterDesign />
          <div className="form mt-5 md:mt-10">
            <form onSubmit={formik.handleSubmit} className="max-w-xl lg:max-w-sm mx-auto p-5 md:p-0">
              {SignUpFields.map((item, i) => {
                return <FormInput formik={formik} input={item} key={i} />;
              })}
              <Link to={"/login"}>
                <p className="text-sec underline mb-5">Have an account?</p>
              </Link>

              <FormButton formik={formik}>
                {signuploading?<Loading/>:'Reister'}
              </FormButton>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
