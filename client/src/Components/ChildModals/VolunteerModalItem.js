import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
const VolunteerModalItem = (props) => {



    return (
        <a id="volunteer-modal-item" href={`${props.opportunity.url}`} rel="noopener noreferrer" target="_blank">
        <Card id="vmi-card">
            <CardContent id="vmi-cc1">
              <h3>{props.opportunity.name}</h3>
              <p>{props.opportunity.time}</p>
            </CardContent>
            <br/>
            <CardContent id="vmi-cc2">
              <p>{props.opportunity.description.slice(0,300)+'...'}</p>
            </CardContent> 
        </Card>  
      </a>
    )
}


export default VolunteerModalItem;