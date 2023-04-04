import React, { useState } from "react";
import axios from "axios";
const Content = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState({})

  const onSearchHandler = () => {
    if (!searchTerm) {
      return;
    }
    axios({
      method: "GET",
      url: `http://www.omdbapi.com/?t=${searchTerm}&apiKey=cf75b0d`,
    }).then((response) => {
      setData(response.data);
    });
    // setSearchTerm("");
  }


  return (
    <div className="h-screen bg-slate-800 w-full pt-7">
      <div className="w-full flex items-center justify-center">
        <input
          className="text-[19px] mr-4 outline-none rounded-md p-2 w-[50%]"
          type="text"
          placeholder="Type a movie name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="border border-white rounded-md p-2 text-white font-bold w-20"
          onClick={onSearchHandler}
        >
          Search
        </button>
      </div>
      {
           data ?
          <div className="mt-10 w-full flex items-center justify-center text-white font-bold flex-wrap">
            <div>
              <img
                src={data.Poster}
                alt="image"
                className="border border-white rounded-lg"
              />
            </div>
            <div className="ml-5 bg-slate-700 p-2 rounded-md">
              <h1>Title : {data.Title}</h1>
              <div className="pt-2" />
              <p>Director: {data.Director}</p>
              <div className="pt-2" />
              <p>Year: {data.Year}</p>
              <div className="pt-2" />
              <p>Country: {data.Country}</p>
              <div className="pt-2" />
              <p>Genre: {data.Genre}</p>
              <div className="pt-2" />
              <p>Actors: {data.Actors}</p>
              <div className="pt-2" />
              <p>Language: {data.Langauge}</p>
              <div className="pt-2" />
              <p>Rating: {data.imdbRating}</p>
              <div className="pt-2" />
              <p>Plot: {data.Plot}</p>
            </div>
          </div>
        : null
      }
    </div>
  );
};

export default Content;
