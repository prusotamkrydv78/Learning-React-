import React, { useState } from "react";

const Resitration = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });
  const handleInputField = (e) => {
 
  let name = e.target.name
  let value = e.target.value
  console.log(name)
    setUser(() => ({ ...user, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user);
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
            <label htmlFor="lastName">lastName</label>
            <input
              type="text"
              name="lastName"
              className="text-black outline-none border-none rounded-sm px-2"
              value={user.lastName}
              onChange={handleInputField}
            />
          </div>
          <div className="flex gap-5 flex-col ">
            <label htmlFor="email">email</label>
            <input
              type="email"
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
          <div className="flex gap-5 flex-col ">
            <label htmlFor="phone">phone</label>
            <input
              type="text"
              name="phone"
              className="text-black outline-none border-none rounded-sm"
              value={user.phone}
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
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Resitration;
