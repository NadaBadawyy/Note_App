import { useFormik } from 'formik'
import  { useContext, useState } from 'react'
import * as yup from 'yup'
import { fieldType, TaskFormType } from '../lib/Types'
import { baseUrl, Proaxios } from '../lib/Api'
import { toast } from 'react-toastify'
import { TaskModal } from '../context/TaskModal'
import { Notes } from '../context/Notes'

export default function useTask() {

    const [taskLoading, settaskLoading] = useState(false)
    const {handlecloseModal}=useContext(TaskModal)
    const {getNotes,noteItem}=useContext(Notes)
    
    let field:fieldType<TaskFormType>={
        htmlFor:"title",
            label:"Your Title",
             type:"text",
              id:"title" ,
              name:"title",
               placeholder:"Your Title"
    }
    const initialValues={
        title: (noteItem)?noteItem?.title: '',
        content:(noteItem)?noteItem?.content: ''
    }
    const validationSchema=yup.object({
        title:yup.string().min(3,'enter at least 3 characters').required('title is required'),
        content:yup.string().min(10,'enter at least 10 characters').required('content is required'),
    })
    const onSubmit=(values:{})=>{
        settaskLoading(true);
        {noteItem? Proaxios.put(`${baseUrl}notes/${noteItem?._id}`,values).then(()=>{
            settaskLoading(false);
            toast.success('Note Updated successfully');
            handlecloseModal();
            getNotes()

        }).catch((res)=>{
            settaskLoading(false);
            console.log(res);}): Proaxios.post(`${baseUrl}notes`,values).then(()=>{
            settaskLoading(false);
            toast.success('Note added successfully');
            handlecloseModal();
            getNotes()

        }).catch((res)=>{
            settaskLoading(false);
            console.log(res);})}
       
        
    }
    const formik=useFormik({
        initialValues,
        validationSchema,
        onSubmit,
        enableReinitialize:true
    })
    
  return {formik,taskLoading,field}
}
