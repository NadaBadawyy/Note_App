import { ButtonInputProps } from '../lib/Types'

export default function FormButton<T>({formik,children}:ButtonInputProps<T>) {
  return (
    <>
      <button
                type="submit"
                className="text-white bg-sec hover:bg-primary focus:ring-none focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-40" disabled={!(formik.isValid&&formik.dirty)}
              >
                {children}
              </button>
    </>
  )
}
