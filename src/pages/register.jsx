import React, { useState } from "react";
import { useRouter } from "next/router";
import { auth } from "utils/nhost";
const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.register(email, password);
    } catch (err) {
      console.log(err);
    }
    router.push("/login");
  };
  return (
    <div className="container py-10 mx-auto">
      <h1 className="capitalize text-4xl text-center title">register</h1>
      <form className="mx-auto mt-5 formy" onSubmit={handleSubmit}>
        <div className="flex-col flex mb-3">
          <label htmlFor="email" className="label text-2xl mb-4">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="rounded py-2 px-2 my-input border border-gray-200"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex-col flex mb-6">
          <label htmlFor="password" className="label text-2xl mb-4">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="rounded py-2 px-2 border my-input border-gray-200"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className=" btn-form text-white px-4 py-2  font-medium ">
          Register
        </button>
      </form>
    </div>
  );
};
export default Register;
