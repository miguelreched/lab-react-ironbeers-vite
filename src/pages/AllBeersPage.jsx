import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beerList, setBeerList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchBeer, setSearchBeer] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchBeer(event.target.value);
  };

  useEffect(() => {
    const endPoint =
      searchBeer.length > 0
        ? `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchBeer}`
        : "https://ih-beers-api2.herokuapp.com/beers";

    axios
      .get(endPoint)
      .then((response) => {
        setBeerList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  if (loading) { return (
      <div style={{ paddingTop: "200px" }}>
        <h3>cargando</h3>
      </div>
    );
  }

  if (beerList.length === 0) {
    return (
      <div>
        <input
          type="text"
          onChange={handleSearch}
          value={searchBeer}
        />

        <h2>{searchBeer} not found</h2>
      </div>
    );
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleSearch}
        value={searchBeer}
      />
      <div className="beer-container">
        {beerList.map((eachBeer) => {
          return (
            <Link to={`/beers/${eachBeer._id}`}>
              <img src={eachBeer.image_url} alt={eachBeer.name} width={50} />
              <h2>{eachBeer.name}</h2>
              <p>{eachBeer.tagline}</p>
              <p>
                <b>creada por:  </b>
                {eachBeer.contributed_by}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default AllBeersPage;
