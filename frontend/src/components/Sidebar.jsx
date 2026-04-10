import { IoIosCloseCircle } from "react-icons/io";
import { ChatData } from "../context/ChatContext";
import { MdDelete } from "react-icons/md";
import { UserData } from "../context/UserContext";
import { LoadingSpinner } from "./loading";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const { chats, createChat, createLod, setSelected, deleteChat } = ChatData();

  const { logoutHandler } = UserData();

  const deleteChatHandler = (e, id) => {
    e.stopPropagation();
    if (confirm("are you sure you want to delete this chat")) {
      deleteChat(id);
    }
  };

  const clickEvent = (id) => {
    setSelected(id);
    toggleSidebar();
  };
  return (
    <div
      className={`fixed inset-0 bg-slate-900 p-4 transition-transform transform md:relative md:translate-x-0 md:w-1/4 md:block border-r border-emerald-900 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        className="md:hidden p-2 mb-4 bg-slate-800 rounded text-2xl text-emerald-200"
        onClick={toggleSidebar}
      >
        <IoIosCloseCircle />
      </button>

      <div className="text-2xl font-semibold mb-6 text-emerald-200">Gem</div>
      <div className="mb-4">
        <button
          onClick={createChat}
          className="w-full py-2 bg-emerald-700 hover:bg-emerald-600 rounded text-white"
        >
          {createLod ? <LoadingSpinner /> : "New Chat"}
        </button>
      </div>
      <div>
        <p className="text-sm text-emerald-300 mb-2">Recent</p>

        <div className="max-h-[500px] overflow-y-auto mb-20 md:mb-0 thin-scrollbar">
          {chats && chats.length > 0 ? (
            chats.map((e) => (
              <div
                key={e._id}
                role="button"
                tabIndex={0}
                className="w-full text-left py-2 px-2 bg-slate-800 hover:bg-slate-700 rounded mt-2 flex justify-between items-center cursor-pointer text-emerald-50"
                onClick={() => clickEvent(e._id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") clickEvent(e._id);
                }}
              >
                <span>{e.latestMessage.slice(0, 38)}...</span>
                <button
                  className="bg-rose-700 text-white text-xl px-3 py-2 rounded-md hover:bg-rose-600"
                  onClick={(event) => deleteChatHandler(event, e._id)}
                >
                  <MdDelete />
                </button>
              </div>
            ))
          ) : (
            <p>No chats yet</p>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 mb-6 w-full">
        <button
          className="bg-rose-700 text-white text-xl px-3 py-2 rounded-md hover:bg-rose-600"
          onClick={() => logoutHandler(navigate)}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
