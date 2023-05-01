import { useDrawerStore } from "../store/drawer";
import Drawer from "./Drawer";

const Header = () => {
  const { drawerToggle } = useDrawerStore();

  return (
    <>
      <header className="flex justify-between w-full p-5 shadow-sm">
        <div className="flex gap-5">
          <div>
            <button onClick={drawerToggle}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          <div>
            <p>한국문학</p>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <i className="fa-solid fa-question"></i>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
