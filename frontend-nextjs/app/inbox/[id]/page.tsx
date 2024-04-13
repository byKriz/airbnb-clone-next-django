import { ConversationDetails } from "@/app/components/inbox/ConversationDetails";

interface Props {
  params: { id: string };
}

export default function ConversationByIdPage({ params }: Props) {
  return (
    <>
      {/* InboxPageById: {params.id} */}
      <ConversationDetails />
    </>
  );
}
