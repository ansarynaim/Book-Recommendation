import { useState } from "react";
import "./styles.css";

const bookWorld = {
  Romantic: [
    {
      title: "It ends with us",
      Rating: "8.3/10"
    },
    {
      title: "The Proposal",
      IMDb: "9.2/10"
    },
    {
      title: "Beautiful Disaster",
      IMDb: "8.5/10"
    }
  ],
  Fantasy: [
    {
      title: "The Name of the wind",
      IMDb: "9.5/10"
    },
    {
      title: "The way of kings",
      IMDb: "9.6/10"
    },
    {
      title: "A game of thrones",
      IMDb: "9.5/10"
    }
  ],
  Horror: [
    {
      title: "Carrier",
      IMDb: "8.7/10"
    },
    {
      title: "The Haunting of hill",
      IMDb: "8.0/10"
    },
    {
      title: "Alita",
      IMDb: "9.4/10"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Romantic");

  function clickHandler(book) {
    setGenre(book);
  }

  return (
    <div className="app">
      <h1 className="head">Popular Books According Catagory.</h1>
      <div className="button-div">
        {Object.keys(bookWorld).map((book) => (
          <button onClick={() => clickHandler(book)} className="handleBtn">
            {book}
          </button>
        ))}
      </div>

      <div className="list-div">
        {bookWorld[selectedGenre].map((series) => (
          <div className="output_div">
            <h2>{series.title}</h2>
            <h5>{`IMDb : ${series.IMDb}`}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
