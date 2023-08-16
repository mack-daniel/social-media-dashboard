import { useState } from "react";
import { articles, cards } from "./assets/data";
import Articles from "./components/Articles";
import Card from "./components/Card";

function App() {
  const [click, setClick] = useState(false);

  return (
    <main className={`${click && "light"}`}>
      <div className="container py-3">
        <div className="d-lg-flex justify-content-between align-items-center mb-4">
          <div className="d-flex flex-column">
            <h3 className={`${click && "active"}`}>Social Media Dashboard</h3>
            <p className="secondary-text">Total Followers: 23,004</p>
          </div>

          <div className="secondary-text d-flex gap-3 align-items-center w-lg-100 theme py-3">
            Dark Mode
            <div
              className="toggle px-1 rounded-5 ms-auto"
              onClick={() => setClick(!click)}
            >
              <button
                className={`${click && "active"} rounded-5 border-0 `}
              ></button>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-lg-4 g-4 text-center">
          {articles.map((item) => (
            <Articles {...item} key={item.id} click={click} />
          ))}
        </div>

        <h3 className={`${click && "active"} my-4`}>0verview - Today</h3>

        <div className="row row-cols-1 row-cols-lg-4 g-4">
          {cards.map((item) => (
            <Card {...item} key={item.id} click={click} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
