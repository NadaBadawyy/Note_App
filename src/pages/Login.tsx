
import { Link } from "react-router-dom";
import useFormikHook from "../hooks/useLogin";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import RegisterDesign from "../components/RegisterDesign";
import RegisterImg from "../components/RegisterImg";
import Loading from "../components/Loading";

export default function Login() {
  let {formik,fields,loginloading}=useFormikHook()
  return (
    <>
      <div className="flex flex-col lg:flex-row object-center font ">
       <RegisterImg/>
        <div className=" mb-5 lg:mb-0 mt-10 lg:order-2 order-1">
          <RegisterDesign/>
          <div className="form md:mt-28 mt-5">
            <form onSubmit={formik.handleSubmit} className="max-w-xl lg:max-w-sm mx-auto p-5 md:p-0 ">
             {fields.map((item,i)=>{
              return <FormInput key={i} input={item}   formik={formik} />

             })}
             
              <Link to={'/signup'}><p className="text-sec underline mb-5">Don't have an account?</p></Link>

              <FormButton formik={formik} >
                {loginloading?<Loading/>:'login'}
              </FormButton>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
