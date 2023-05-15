// @ts-nocheck
import { useSession } from "next-auth/react";
import { Button } from "./Button";
import ProfileImage from "./ProfileImage";
import { useEffect, useRef, useState } from "react";

function updateTextAreaSize(textArea?: HTMLTextAreaElement) {
    if (textArea == null) return;
    textArea.style.height = "0";
    textArea.style.height = `${textArea.scrollHeight}px`;
  }

  
export function NewTweetForm() {
  const seassion = useSession();
  const [inputValue, setInputValue] = useState("");
    const textAreaRef = useRef<HTMLTextAreaElement>();

  useEffect(() => {
    updateTextAreaSize()
  }, [inputValue])
  

  if (seassion.status !== "authenticated") return;

  return (
    <form className="flex flex-col gap-2 border-b px-4 py-2">
      <div className="flex gap-4">
        <ProfileImage src={seassion.data.user.image} />
        <textarea
          style={{ height: 0 }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Whats happening"
          className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
        />
      </div>
      <Button className="self-end">Tweet</Button>
    </form>
  );
}
