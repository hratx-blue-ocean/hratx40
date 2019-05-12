import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
const VolunteerModalItem = (props) => {



    return (
        <a href={`${props.opportunity.url}`} rel="noopener noreferrer" target="_blank" style={{color:"black", textDecoration:"none", margin:"5px"}}>
        <Card style={{display:"flex", flexDirection:"row", alignItems:"center", justify:"center", width:"100%"}}>
            <CardContent style={{width:"50%"}}>
              <h3>{props.opportunity.name}</h3>
              <p>{props.opportunity.time}</p>
            </CardContent>
            <br/>
            <CardContent style = {{width:'100%'}}>
              <p>{props.opportunity.description.slice(0,300)+'...'}</p>
            </CardContent> 
        </Card>  
      </a>
    )
}


export default VolunteerModalItem;