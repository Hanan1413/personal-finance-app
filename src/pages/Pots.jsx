import React, {useContext} from "react";
import Pot from "../components/Pots/Pot";
import {PotContext} from "../contexts/potContext/PotContext";

const Pots = () => {
  const {state, dispatch} = useContext(PotContext);

  return( 
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {state.pots.map(pot =>(
    <Pot key={pot.id} title={pot.title} />
  ))}
  </div>
  
)
};

export default Pots;
