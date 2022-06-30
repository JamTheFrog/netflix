import axios from "axios";
import React, { useEffect, useState } from "react";
import { Movie } from "./Movie";


function Row({ title, fetchURL }) {
    const [films, setFIlms] = useState([])

    useEffect (() => {
        axios.get(fetchURL).then((response) => {
            setFIlms(response.data.results)
        })
    }, [fetchURL])

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="realtive flex items-center">
        <div id={"slider"}>
            {films.map((item, id) => (<Movie item={item} key={id}/>))}
        </div> 
      </div>
    </>
  );
}

export default Row;
