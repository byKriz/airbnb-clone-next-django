import React from "react";
import { Conversation } from "../components/inbox/Conversation";

export default function InboxPage() {
  return (
    <>
      <h1 className="my-6 text-2xl font-bold">Inbox</h1>

      <div className="flex flex-col gap-3">
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
      </div>
    </>
  );
}
