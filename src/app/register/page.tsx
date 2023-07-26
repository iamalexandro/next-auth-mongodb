"use client";

import axios from "axios";
import { FormEvent } from "react";

// project imports
import Image from "next/image";

function RegisterPage() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    try {
      const res = await axios
        .post("/api/auth/signup", {
          fullname: formData.get("fullname"),
          email: formData.get("email"),
          password: formData.get("password"),
        })
        .then((res) => {
          //navigate to code auth view
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="text-center items-center flex h-screen">
      <form onSubmit={handleSubmit} className="w-full">
        <h1 className="text-3xl mb-8">Signup</h1>
        <input
          type="text"
          placeholder="John Doe"
          name="fullname"
          className="block bg-zinc-800 px-4 py-4 mb-10 mx-auto w-10/12 sm:w-6/12 lg:w-4/12 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="block bg-zinc-800 px-4 py-4 mb-10 mx-auto w-10/12 sm:w-6/12 lg:w-4/12 focus:outline-none"
        />
        <input
          type="password"
          placeholder="******"
          name="password"
          className="block bg-zinc-800 px-4 py-4 mb-10 mx-auto w-10/12 sm:w-6/12 lg:w-4/12 focus:outline-none"
        />
        <button className="bg-cyan-900 px-4 py-4 block mx-auto w-5/12 sm:w-3/12 lg:w-2/12">
          Signup
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
