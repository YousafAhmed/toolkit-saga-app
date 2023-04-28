import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "./catState";

function App() {
  const cats = useSelector((state) => state.cats.catsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>CATS GALLERY</h1>
      <p>Description of different cat breeds</p>
      <hr />
      <div className="Gallery">
        {cats.map((cat) => (
          <div key={cat.id} className="row">
            <div className="column column-left">
              <img
                alt={cat.name}
                src={cat.image.url}
                width="200"
                height="200"
              />
            </div>

            <div className="column column-right">
              <h2>{cat.name}</h2>
              <h5>Temperament: {cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button>VIEW MORE</button>
    </div>
  );
}

export default App;
