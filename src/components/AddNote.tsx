import  { useContext, useEffect} from "react";
import { TaskModal } from "../context/TaskModal";
import useTask from "../hooks/useTask";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import Loading from "./Loading";
import { Notes } from "../context/Notes";

export default function AddNote() {
  let { handlecloseModal, showModal } = useContext(TaskModal);
  let {formik,field,taskLoading}=useTask()
  let {noteItem}=useContext(Notes)
  useEffect(()=>{
    
  },[noteItem])
  return (
    <>
      {showModal && (
        <>
          <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#8080808a] flex justify-center items-center font ">
            <div className="bg-white shadow-xl p-5 w-full md:p-28  rounded-xl m-10 md:m-72 relative">
              <div className="">
                <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto">
                  <FormInput formik={formik} input={field}/>
                  <div className="mb-5">
                    <label
                      htmlFor="content"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Content
                    </label>
                    <textarea
                      rows={10}
                      id="content"
                      name="content"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="bg-back border font-mono border-gray-300 p-2.5  focus:border-2 focus:outline-primary focus:border-primary focus:ring-primary text-sm rounded-lg block w-full "
                      placeholder="Your content "
                      defaultValue={formik.initialValues.content}

                    />
                     {(formik.touched.content&&formik.errors.content)&&<span className="text-sm text-red-500  font-mono">{formik.errors.content}</span>}
                  </div>

                  

                  <FormButton formik={formik}>
                    {taskLoading?<Loading/>: noteItem?<><i className="fa-solid fa-pen-to-square"></i> Update Task</>:<><i className="fa-solid fa-plus mx-1"></i> Add Task</>}
                  </FormButton>
                </form>
                <div
                  className=" absolute top-0 right-0 m-2 md:m-7 cursor-pointer "
                  onClick={handlecloseModal}
                >
                  <i className="fa-solid fa-circle-xmark text-sec text-3xl"></i>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
