import { IoIosCloseCircle } from "react-icons/io";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-800 p-4 transition-transform transform md:relative md:translate-x-0 md:w-1/4 md:block ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        onClick={toggleSidebar}
        className="absolute right-4 top-4 rounded bg-gray-700 p-2 text-2xl text-white"
        aria-label="Close sidebar"
      >
        <IoIosCloseCircle className="h-8 w-8" />
      </button>

      <div className="text-2xl font-semibold mb-6">Gem</div>
      <div className="mb-4">
        <button className="w-full py-2 bg-gray-700 hover:bg-gray-600 rounded">
          New Chat
        </button>
      </div>
      <div>
        <p className="text-sm text-gray-400 mb-2">Recent Chats</p>
      </div>

      <div className="max-h-[500px] overflow-y-auto mb-20 md:mb-0">
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
        <button className="w-full text-left py-2 px-2 mt-2 bg-gray-700 hover:bg-gray-600 rounded">
          Hello Gem, how's going on !!!
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
