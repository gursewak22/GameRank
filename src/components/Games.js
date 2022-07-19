import React from "react";
import "./Games.css"



function Games(props){
    return(
            
            <div className="division">
            <div className="card" style={{width : "18rem"}}>
            <div className="card-body" >
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.platform}</h6>
                <li className="list-group-item">Score : {props.score} </li>
                <li className="list-group-item">Genre :  {props.genre}</li>
                <li className="list-group-item">Editors_choice :  {props.edit}</li>
                
            </div>
            </div>
            </div>
        
        // <div>
            

        //     Title : {props.title}
        //     platform :{props.platform}
        //     Score : {props.score}
        //     genre : {props.genre}
        //     Editor's Choice :  {props.edit}

        // </div>
    )
}
export default Games;