

import { Link } from "react-router-dom";


function HomePage() {
  return (
    <div>
      <Link to={"/beers"}>
        <h3>All Beers</h3>
      </Link>

      <Link to={"/random-beer"}>
        <h3>Random Beer</h3>
      </Link>

      <Link to={"/new-beer"}>
        <h3>New Beer</h3>
      </Link>
    </div>
  );
}

export default HomePage