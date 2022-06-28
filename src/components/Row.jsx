import axios from "axios";
import React, { useEffect, useState } from "react";

function Row({ title, fetchURL }) {
    const [movies, setMovies] = useState([])

    useEffect (() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="realtive flex items-center">
        <div id={"slider"}>

        </div>
      </div>
    </>
  );
}

export default Row;
