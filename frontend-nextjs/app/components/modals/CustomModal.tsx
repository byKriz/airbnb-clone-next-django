"use client";

import { useCallback, useEffect, useState } from "react";

import CloseIcon from "@/app/icons/CloseIcon";

interface Props {
  title?: string;
  children: React.ReactNode;
  isOpen: boolean;
  close: () => void;
}

export function CustomModal({
  title = "The Title",
  children,
  isOpen,
  close,
}: Props) {
  // const loginModal =
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);

    setTimeout(() => {
      close();
    }, 300);
  }, [close]);

  if (!isOpen) return null;

  return (
    <div className="flex items-center justify-center fixed inset-0 z-50 bg-black/60">
      <div className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6 mx-auto h-auto">
        <div
          className={`transition duration-300 ease-in-out  ${showModal ? "translate-y-0 opacity-100" : "translate-y-full opacity-10"}`}
        >
          <div className="w-full h-auto rounded-xl relative flex flex-col bg-white">
            <header className="h-[60px] flex justify-center items-center p-6 rounded-t-md relative border-b">
              <div className="p-3 absolute left-3 hover:bg-gray-300 rounded-full cursor-pointer" onClick={() => handleClose()}>
                <CloseIcon className="size-5" />
              </div>

              <h2 className="text-lg font-bold">{title}</h2>
            </header>

            <section className="p-6">{children}</section>
          </div>
        </div>
      </div>
    </div>
  );
}
