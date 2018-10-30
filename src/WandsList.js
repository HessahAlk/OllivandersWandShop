import React, { Component } from "react";
 import WandCard from "./WandCard";

 class WandsList extends Component {
   render() {
     let wandcard = this.props.wands.map(wand => (
       <WandCard wand={wand} key={wand.core} />
     ));
     return (
       <div className="content col-10">
         <div className="wands">
           <h3>Wands</h3>
           <div className="row">{wandcard}</div>
         </div>
       </div>
     );
   }
 }

 export default WandsList;
