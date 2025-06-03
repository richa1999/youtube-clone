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
    const intervalId = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          message: makeid(10),
        })
      );
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto mt-4">
      <div className="h-[550px] border border-gray-300 ml-2 p-4 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse shadow-md">
        {messages &&
          messages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
      </div>

      <form
        className="flex items-center gap-2 mt-4 ml-2"
        onSubmit={(e) => {
          e.preventDefault();
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
          placeholder="Type your message..."
          className="p-2 flex-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
