import React, { useEffect, useState, useContext } from "react";

//INTERNAL IMPORT
// import { ChatAppContect } from "../Context/ChatAppContext";
import { Filter, Friend } from "../Components/index";

const TenChat = () => {
  // const {} = useContext(ChatAppContect);
  return (
    <div>
      <Filter />
      <Friend />
    </div>
  );
};

export default TenChat;
