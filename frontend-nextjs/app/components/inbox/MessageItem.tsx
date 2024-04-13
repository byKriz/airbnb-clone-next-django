import React from "react";

interface Props {
  userName: string;
  message: string;
  send: boolean;
}

export function MessageItem({ userName, message, send }: Props) {
  return (
    <div className={`w-[80%] py-4 px-6 rounded-xl ${send ? "bg-blue-200 ml-[20%]" : "  bg-gray-200"}`}>
      <h3 className="font-bold text-gray-500">{userName}</h3>
      <p>{message}</p>
    </div>
  );
}
