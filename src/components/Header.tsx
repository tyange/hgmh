import { Link } from "react-router-dom";
import { useDrawerStore } from "../store/drawer";

const Header = () => {
  const { drawerToggle } = useDrawerStore();

  return (
    <>
      <header className="flex items-center justify-between w-full p-3 shadow-sm">
        <div className="flex gap-5">
          <div className="dropdown">
            <label tabIndex={0} className="m-1">
              <button onClick={drawerToggle}>
                <i className="fa-solid fa-bars"></i>
              </button>
              <ul
                tabIndex={0}
                className="p-2 shadow dropdown-content menu menu-compact bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/to-be-published">출간예정도서</Link>
                </li>
              </ul>
            </label>
          </div>
          <div>
            <Link to="/">한국문학</Link>
          </div>
        </div>
        <div>
          <ul className="menu menu-horizontal">
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
