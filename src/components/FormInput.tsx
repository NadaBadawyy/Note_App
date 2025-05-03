
import {   FormInputProps} from '../lib/Types';



export default function FormInput<T>({formik,input}:FormInputProps<T>) {
   let {htmlFor,label,type,id,name,placeholder}=input
   
  return (
    <>
    <div className="mb-5">
                <label
                  htmlFor={htmlFor}
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  {label}
                </label>
                <input
                  type={type}
                  id={String(id) }
                  className="bg-back border border-gray-300 focus:outline-primary text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 font-mono"
                  placeholder={placeholder}
                  name={name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  defaultValue={String(formik.initialValues[id])}
                />
                {(formik.touched[id]&&formik.errors[id])&&<span className="text-sm text-red-500  font-mono">{String(formik.errors[id])}</span>}
              </div>
      
    </>
  )
}
