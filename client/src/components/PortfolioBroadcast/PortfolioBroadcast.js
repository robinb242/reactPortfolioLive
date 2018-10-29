import React from 'react';
// import './Candidate.css';
import {
   Container, Grid, Image, Segment, Card
} from 'semantic-ui-react';
import "./PortfolioBroadcast.css";

const PortfolioBroadcast =() => (
  
<Container>
    <div>
    <Segment>
    <h1> Broadcast Commercials </h1>
    <hr />
        <Grid>
            <Grid.Row columns={2}>
                <Grid.Column>
                <Card className="portfolioCard" id="neilGaimanCard">
                   <Image src={require('../../assets/images/neilGaiman.png')} size="medium" href="https://www.youtube.com/watch?v=msRTrXiolS8" rel="noreferrer noopener" target="_blank" />
                    <h5>Neil Gaiman, Episode I: A Calendar of Tales
                    </h5>
                    <p>I served as the Line Producer on this series of spots for Blackberry phones. </p>
                </Card>
                </Grid.Column>

                <Grid.Column>
                <Card className="portfolioCard" id="brettFavreCard">
                     <Image src={require('../../assets/images/brettFavre.png')} size="medium" href="https://www.youtube.com/watch?v=msRTrXiolS8" rel="noreferrer noopener" target="_blank" />
                    <h5>Brett Farve/Hyundai Superbowl Commercial</h5>
                    
                    <p>I was a Set Decorator on this Superbowl Commercial. As a Vikings fan it was an incredible experience.</p>
                </Card>
                 </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
    </div>
</Container>

);

export default PortfolioBroadcast;
