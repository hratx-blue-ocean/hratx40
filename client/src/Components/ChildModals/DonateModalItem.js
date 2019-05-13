import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import './ChildModalStyles/DonateModalItem.css';

const DonateModalItem = (props) => {
    let descr;
    if (props.opportunity.mission) {
      descr = props.opportunity.mission.slice(0,300)+'...'
    } else {
      descr = ''
    }

    return (
        <a id="donate-modal-item-conatiner" href={`${props.opportunity.link}`} rel="noopener noreferrer" target="_blank">
        <Card id="dmi-card">
            <CardContent id="dmi-cc1">
              <h3>{props.opportunity.name}</h3>
            </CardContent>
            <br/>
            <CardContent id="dmi-cc2">
              <p>{descr}</p>
            </CardContent> 
        </Card>  
      </a>
    )
}


export default DonateModalItem;