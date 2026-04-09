import React, { useEffect, useState, useRef } from "react";
import Sidebar from "../components/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import Header from "../components/Header";
import { ChatData } from "../context/chatContext";
import { CgProfile } from "react-icons/cg";
import { SiRobotframework } from "react-icons/si";
import { LoadingSmall } from "../components/loading";
import { IoMdSend } from "react-icons/io";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const {
    fetchResponse,
    messages,
    prompt,
    setPrompt,
    newRequestLoading,
    loading,
    chats,
  } = ChatData();

  const submitHandler = (e) => {
    e.preventDefault();
    fetchResponse();
  };

  const messagecontainerRef = useRef();

  useEffect(() => {
    if (messagecontainerRef.current) {
      messagecontainerRef.current.scrollTo({
        top: messagecontainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 flex-col">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-4 bg-gray-800 text-2xl"
        >
          <GiHamburgerMenu />
        </button>

        <div className="flex-1 p-6 mb-20 md:mb-0">
          <Header />

          <div className="flex-1 p-6 max-h-[600px] overflow-y-auto mb-20 md:mb-0 thin-scrollbar">
            {messages && messages.length > 0 ? (
              messages.map((e, i) => {
                return (
                  <div key={i}>
                    <div className="mb-4 p-4 rounded bg-blue-700 text-white flex gap-1">
                      <div className="bg-white p-2 rounded-full text-black text-2xl h-10">
                        <CgProfile />
                      </div>
                      {e.question}
                    </div>

                    <div className="mb-4 p-4 rounded bg-gray-700 text-white flex gap-1">
                      <div className="bg-white p-2 rounded-full text-black text-2xl h-10">
                        <SiRobotframework />
                      </div>
                      <p dangerouslySetInnerHTML={{ __html: e.answer }}></p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No chat yet...</p>
            )}

            {newRequestLoading && <LoadingSmall />}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 right-0 left-auto p-4 bg-gray-900 w-full md:w-[75%]">
        <form
          onSubmit={submitHandler}
          className="flex justify-center items-center"
        >
          <input
            className="flex-grow p-4 bg-gray-700 rounded-l text-white outline-none"
            type="text"
            placeholder="Enter a promp here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
          />
          <button className="p-4 bg-gray-700 rounded-r text-2xl text-white">
            <IoMdSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
