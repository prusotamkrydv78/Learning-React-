import React, { useState } from 'react'

const Login = () => {
    let [user,setUser] = useState({
        firstName: '',
        email:'',
        password: ''
    })
    const handleInputField = (e) => {
       let {name,value} = e.target
        setUser({...user, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
    }
  return (
    <div>
         <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 text-white text-2xl">
          <div className="flex gap-5 flex-col ">
            <label htmlFor="firstName">firstName</label>
            <input
              type="text"
              name="firstName"
              className="text-black outline-none border-none rounded-sm px-2"
              value={user.firstName}
              onChange={handleInputField}
            />
          </div>
          <div className="flex gap-5 flex-col ">
            <label htmlFor="email">email</label>
            <input
              type="text"
              name="email"
              className="text-black outline-none border-none rounded-sm px-2"
              value={user.email}
              onChange={handleInputField}
            />
          </div>
          <div className="flex gap-5 flex-col ">
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              className="text-black outline-none border-none rounded-sm px-2"
              value={user.password}
              onChange={handleInputField}
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-12">
          <button
            type="submit"
            className="bg-slate-400 font-bold h-10 w-[10rem]
          rounded-sm text-xl capitalize cursor-pointer hover:bg-slate-300 transition-colors "
          >
            login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
