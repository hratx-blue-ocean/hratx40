import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const DonateModalItem = (props) => {
    let descr;
    if (props.opportunity.mission) {
      descr = props.opportunity.mission.slice(0,300)+'...'
    } else {
      descr = ''
    }

    return (
        <a href={`${props.opportunity.link}`} rel="noopener" target="_blank" style={{color:"black", textDecoration:"none", margin:"5px"}}>
        <Card style={{display:"flex", flexDirection:"row", alignItems:"center", justify:"center", width:"100%"}}>
            <CardContent style={{width:"50%"}}>
              <h3>{props.opportunity.name}</h3>
            </CardContent>
            <br/>
            <CardContent style = {{width:'100%'}}>
              <p>{descr}</p>
            </CardContent> 
        </Card>  
      </a>
    )
}


export default DonateModalItem