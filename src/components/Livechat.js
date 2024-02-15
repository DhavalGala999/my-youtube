import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRamdomName, generateRandomMessage } from "../utils/helper";
const Livechat = () => {
  const [liveMessages, setLiveMessages] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      console.log("API");
      dispatch(
        addMessage({
          name: generateRamdomName(),
          message: generateRandomMessage(),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  });
  return (
    <>
      <div className=" border border-black rounded-md bg-slate-100 w-96 h-[400px] overflow-y-scroll flex flex-col-reverse ml-5 sm:w-auto">
        {chatMessages.map((msg, i) => (
          <Chat key={i} name={msg.name} message={msg.message} />
        ))}
      </div>
      <form
        className="w-96 mt-3 ml-5 sm:w-auto md:flex md:items-center lg:justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Dhaval",
              message: liveMessages,
            })
          );
          setLiveMessages("");
        }}
      >
        <input
          type="text"
          className=" px-2 w-80 py-2 border border-black sm:w-auto md:h-8"
          value={liveMessages}
          onChange={(e) => setLiveMessages(e.target.value)}
          placeholder="Enter comment..."
        />
        <button className=" p-2 my-2 border border-gray-100 bg-green-100 ">
          Send
        </button>
      </form>
    </>
  );
};

export default Livechat;
