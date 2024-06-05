import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { generateName, makeid } from "../utils/helpers";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.message);

  useEffect(() => {
    // api polling
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          message: makeid(10),
        })
      );
    }, 500);

    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <div>
      <div className="h-[550px] border border-black ml-2 p-2 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {messages &&
          messages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("ON FORM SUBMIT", liveMessage);
          dispatch(
            addMessage({
              name: "You",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          placeholder="Type your message here"
          className="p-2 w-96"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2 ml-2 rounded-lg">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
