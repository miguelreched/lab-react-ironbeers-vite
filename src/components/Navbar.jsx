import { NavLink } from "react-router-dom";
function Navbar() {
  const activeOrNot = (navInfo) => {

    if (navInfo.isActive === true) {
      return "active-url";
    } else {
      return "inactive-url";
    }
  };
  return (
    <header>
      <nav>
        <NavLink to={"/"} className={activeOrNot}>
          Home{""}
        </NavLink> |

        <NavLink to={"/beers"} className={activeOrNot}>
          Beers{""}
        </NavLink> |

        <NavLink to={"/random-beer"} className={activeOrNot}>
          Random Beer{""}
        </NavLink> |

        <NavLink to={"/new-beer"} className={activeOrNot}>
          New Beer{""}
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
