import axios from "axios";
import React, { useEffect, useState } from "react";

function Row({ title, fetchURL }) {
    const [films, setFIlms] = useState([])

    useEffect (() => {
        axios.get(fetchURL).then((response) => {
            setFIlms(response.data.results)
        })
    }, [fetchURL])

    console.log(films)

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="realtive flex items-center">
        <div id={"slider"}>
            {films.map((item) => {
                <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                    <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                </div>
            })}
        </div> 
      </div>
    </>
  );
}

export default Row;
