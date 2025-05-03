import { Link } from 'react-router-dom'

export default function RegisterDesign() {
  return (
    <>
      <div className="pt-20 px-20 text-[#162F84]  md:ms-40 ">
          <Link to={'/login'}><span className="mx-7 p-2 border-2 rounded-lg border-[#162F84]">
              SignIn
            </span></Link>
            <Link to={'/signup'}><span className=" p-2 border-2 rounded-lg border-[#162F84]">
              SignUp
            </span></Link>
          </div>
    </>
  )
}
