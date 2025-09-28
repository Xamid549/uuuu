import React, { useEffect, useState } from "react";
import Header from "../../componets/Header/Header";
import "./home.css";

function Contact() {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
       const res = await fetch("https://dummyjson.com/products?limit=50");
const json = await res.json();
setData(json.products); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <HEader />
      <main>
        <div className="container">
          <div className="change">
            <input
              className="search1"
              type="text"
              placeholder="Search for anything..."/>
            <i id="searchlogo1" className="fa-solid fa-magnifying-glass"></i>

            <div className="sort">
              <h3>Sort by:</h3>
              <select>
                <option value="Most popular">Most popular</option>
                <option value="Cheap">Cheap</option>
                <option value="Expensive">Expensive</option>
              </select>
            </div>
          </div>

          <div className="box">
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!loading &&
              !error &&
              data.map((card, i) => (
                <div className="card" key={i}>
                 <img className="img" src={card.images[0]} alt={card.title} />

                  <div className="rating">
                    <i id="star" className="fa-solid fa-star"></i>
                    <i id="star" className="fa-solid fa-star"></i>
                    <i id="star" className="fa-solid fa-star"></i>
                    <i id="star" className="fa-solid fa-star"></i>
                    <i id="star" className="fa-solid fa-star"></i>
                    <h4 className="rat">4</h4>
                  </div>
                  <h2>{card.title}</h2>
                  <p></p>
                  <h2 className="cost">${card.price}</h2>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
