import { FormikProps } from "formik";

export interface propsDataType{
    children:React.ReactNode
 }
 export interface SigninFormType{
    email:string,
    password:string,
  }
 export interface SignupFormType{
   name:string,
    email:string,
    password:string,
    age:number,
    phone:string
  }
 export interface TaskFormType{
  title:string,
  content:string,
  }

 export interface fieldType<T>{
    
    htmlFor: string;
    label: string;
    type: string;
    id: keyof T  ;
    name: string;
    placeholder: string;
 }

 export interface FormInputProps<T> {
   input: {
     htmlFor: string;
     label: string;
     type: string;
     id: keyof T;
     name: string;
     placeholder: string;
   };
   formik: FormikProps<T>;
 }
 
 export interface ButtonInputProps<T> {
   children:React.ReactNode,
   formik: FormikProps<T>;
 }
 
 
 export interface note{
  title:string,content:string,_id:string
}