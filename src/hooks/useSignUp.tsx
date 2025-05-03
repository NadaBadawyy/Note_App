import { useFormik } from "formik";
import * as yup from "yup";
import { fieldType, SignupFormType } from "../lib/Types";
import axios from "axios";
import { baseUrl } from "../lib/Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function useSignUp() {
     const [signuploading, setSignuploading] = useState(false)
    let navigate=useNavigate()
  let SignUpFields: fieldType<SignupFormType>[] = [
    {
      htmlFor: "name",
      label: "Your Name",
      type: "name",
      id: "name",
      name: "name",
      placeholder: "Enter Your Name",
    },
    {
      htmlFor: "email",
      label: "Your Email",
      type: "email",
      id: "email",
      name: "email",
      placeholder: "Enter Your Email",
    },
    {
      htmlFor: "password",
      label: "Your Password",
      type: "password",
      id: "password",
      name: "password",
      placeholder: "Enter Your Password",
    },

    {
      htmlFor: "age",
      label: "Your Age",
      type: "number",
      id: "age",
      name: "age",
      placeholder: "Enter Your Age",
    },
    {
      htmlFor: "phone",
      label: "Your Phone",
      type: "tel",
      id: "phone",
      name: "phone",
      placeholder: "Enter Your Phone",
    },
  ];
  let initialValues = {
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
  };
  let validationSchema =yup.object({
   
        name: yup
          .string()
          .min(3, "enter at least 3 chars")
          .max(20, "enter at most 20 chars")
          .required("name is required"),
        email: yup
          .string()
          .email("enter a valid email")
          .required("email is required"),
        password: yup
          .string()
          .matches(
            /^[A-Z].{5,12}$/,
            "password starts with capital letter and must be 6-12 chars"
          )
          .required("password is required"),
        age: yup.number().required("age is required"),
        phone: yup.string().matches(/^\+201[0125][0-9]{8}$/,'enter a valid phone with code id').required('phone is requied'),
      
  })
  let handleSubmit = async(values: {}) => {
    setSignuploading(true)
    await axios.post(`${baseUrl}users/signup`,values).then((res)=>{  
        setSignuploading(false);      
        toast.success('You Registred successfully ');
        navigate('/login')


    }).catch((res)=>{        
        setSignuploading(false);
        toast.error(`${res.response.data.msg}`)
    ;
    })
  };
  let formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });
  return { formik, SignUpFields,signuploading};
}
