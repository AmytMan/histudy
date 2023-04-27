import React from 'react';
import Effect from "../../components/Effect"
import Dashboar_content from './Dashboar_content';

function Dashboard() {
  return (
    <div>
        <Effect navtitle="Dashboard" content={<Dashboar_content/>}/>
       
    </div>
  )
}

export default Dashboard