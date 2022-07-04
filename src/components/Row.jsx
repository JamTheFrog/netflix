import axios from "axios";
import React, { useEffect, useState } from "react";
import { Movie } from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Row({ title, fetchURL, rowID }) {
  const [films, setFIlms] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setFIlms(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowID)
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    let slider = document.getElementById("slider" + rowID)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={slideLeft} size = {40} className="group-hover:block bg-white  left-0 rounded-full absolute opacity-20 hover:opacity-100 cursor-pointer z-10 hidden"/>
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {films.map((item, id) => (
            <Movie item={item} key={id} />
          ))}
        </div>
        <MdChevronRight onClick={slideRight} size = {40} className=" group-hover:block bg-white rounded-full absolute opacity-20 hover:opacity-100 cursor-pointer z-10 right-0 hidden"/>
      </div>
    </>
  );
}

export default Row;
