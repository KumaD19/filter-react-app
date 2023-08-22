import Header from "./Header";

import React, { useState } from "react";
import FilteredList from "./FilteredList";

function App() {

  const songs = [
    {
      id:1,
      name:"King Kunta",
      artist:"Kendrick Lamar",
      album:"To pimp a butterfly"
    },
    {
      id:2,
      name:"Money Trees",
      artist:"Kendrick Lamar",
      album:"Good Kid, M.A.A.D City"
    },
    {
      id:3,
      name:"Flashing Lights",
      artist:"Kanye West",
      album:"Graduation"

    },
    {
      id:4,
      name:"I wonder",
      artist:"Kanye West",
      album:"Graduation"
    },
    {
      id:5,
      name:"Amtrak",
      artist:"Los Retros",
      album:"Looking Back"
    },
    {
      id:6,
      name:"Me and Your Mama",
      artist:"Donald Glover",
      album:"Awaken, My Love! "
    },
    {
      id:7,
      name:"Get you",
      artist:"Daniel Ceaser",
      album:"Freudian"
    }
  ]

  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (NewSearch) => {
    setSearchValue(NewSearch) 
  };
   
 
  return (
    <>
      <Header onSubmit={handleSearch} />
     <FilteredList  songs={songs} searchValue={searchValue}/>
    </>
  );
}

export default App;