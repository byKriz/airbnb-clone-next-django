"use client";

import React, { useState } from "react";

import { CustomModal } from "./CustomModal";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import { CustomButton } from "../forms/CustomButton";

export function LoginModal() {
  const loginModal = useLoginModal();

  //   const content = (
  //     <h1 className="mb-6 text-2xl">Welcome to FakeArbnb, please login</h1>
  //   );

  return (
    <CustomModal
      isOpen={loginModal.isOpen}
      close={loginModal.close}
      title="Log In"
    >
      {/* <h1 className="mb-6 text-2xl">Welcome to FakeArbnb, please login</h1> */}

      <form className=" space-y-4">
        <input
          placeholder="your@email.com"
          type="email"
          name=""
          id=""
          className="w-full h-[54px] border border-gray-300 rounded-xl px-4"
        />
        <input
          placeholder="your password"
          type="password"
          name=""
          id=""
          className="w-full h-[54px] border border-gray-300 rounded-xl px-4"
        />

        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          <span className="">The Error Message</span>
        </div>

        <CustomButton
          name="Sign In"
          onClick={() => {
            console.log("Sign in Clicked");
          }}
        />
      </form>
    </CustomModal>
  );
}
