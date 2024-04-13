"use client";

import { CustomButton } from "../forms/CustomButton";
import { MessageItem } from "./MessageItem";

export function ConversationDetails() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
        <MessageItem
          userName={"User Name"}
          message={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          send={false}
        />

        <MessageItem
          userName={"Orther User Name"}
          message={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          send={true}
        />
      </div>

      <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
        <input
          type="text"
          placeholder="Text your message..."
          className="w-full p-2 bg-gray-200 rounded-xl"
        />

        <CustomButton
          name="send"
          onClick={() => console.log(1)}
          className="w-[100px]"
        />
      </div>
    </div>
  );
}
