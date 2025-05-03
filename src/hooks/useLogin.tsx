import { useContext, useState } from "react";
import {  useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { baseUrl } from "../lib/Api";
import { toast } from "react-toastify";
import { fieldType, SigninFormType } from "../lib/Types";
import { useNavigate } from "react-router-dom";
import { Notes } from "../context/Notes";
export default function useFormikHook() {
  const [loginloading, setLoginloading] = useState(false)
  let {getNotes}=useContext(Notes)
  const navigate=useNavigate()
  let fields:fieldType<SigninFormType>[] =[
    {htmlFor:"email",
       label:"Your Email",
        type:"email",
         id:"email" ,
         name:"email",
          placeholder:"Enter Your Email"},
    {htmlFor:"password",
       label:"Your Password",
        type:"password",
         id:"password" ,
         name:"password",
          placeholder:"Enter Your Password"},
  ]

  let initialValues:{ email: string; password: string; } = {
    email: "",
    password: "",
  };
  let validationSchema = yup.object({
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
      .required("password is required")
  });
  let onSubmit = async (values: {email:string,password:string}) => {
    setLoginloading(true)
    await axios
      .post(`${baseUrl}users/signin`,values)
      .then((res) => {  
        setLoginloading(false)       
        localStorage.setItem('token',res.data.token)
        toast.success(`You Login Successfully`)
        navigate('/')
        getNotes();
      })
      .catch((res) => {
        setLoginloading(false)
        toast.error(`${res.response.data.msg}`)
      });
  };
  let formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return {
    formik,fields,loginloading
  };
}
