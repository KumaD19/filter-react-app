

import React from "react";
import RenderInitialList from "../RenderIntialList";

const FilteredList = ({ songs, searchValue}) => {
  
  const filterSongs = songs.filter(song =>
    song.artist.includes(searchValue)
  );

    return (
    <section>
      {
         filterSongs.map(song => <RenderInitialList name={song.name} artist={song.artist} album={song.album} key={song.id}/>)
       }

    </section>
    )
  };

export default FilteredList;