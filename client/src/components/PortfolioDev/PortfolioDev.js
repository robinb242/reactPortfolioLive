import React, { Component } from 'react';
import _ from 'lodash'
// import './Candidate.css';
import {
   Container, Grid, Image, Card, Segment
} from 'semantic-ui-react';
import './PortfolioDev.css';

const PortfolioDev =() => (
  
<Container>
    <div>
    <Segment>
    <h1>Web Applications</h1>
    <hr />
        <Grid>
            <Grid.Row columns={3}>

                <Grid.Column>
                    <Card id="candiMatchCard">
                       <Image src={require('../../assets/images/candiMatchSS200.png')} size="medium" href="https://protected-lake-93815.herokuapp.com/" target="_blank" />
                        <h5>Candidate Profile Matching Application </h5>
                        <p> I programmed the front end of this site using React.js for a class assignment. It was supposed to poll users on their political ideals and match them up with a 
                        candidate whose platform most accurately reflects the users political vaules, but the back-end team didn't come through.</p>
                    </Card>
                 </Grid.Column>

                 <Grid.Column>
                     <Card id="walkingDeadCard">
                         <Image src={require('../../assets/images/walkingDeadClickyGame.png')} size="medium" href="https://pacific-reaches-69935.herokuapp.com/" target="_blank" />
                        <h5>Walking Dead themed Clicky Game</h5>
                        <p>A simple game built with React where you try to click on as many Walking Dead characters as you can without clicking on the same
                        one twice. I need to fix the graphics.</p>
                        </Card>
                 </Grid.Column>

                  <Grid.Column>
                      <Card id="petMatchCard">
                         <Image src={require('../../assets/images/petMatch.png')} size="medium" href="https://pet-match-app.herokuapp.com/" target="_blank" />
                        <h5>AdoptMeNow - Rescue pet finding app. </h5>
                       
                        <p>AdoptMeNow is a full stack, MVC (Model-View-Controller) application that connects people with animal welfare organizations (AWO)
                         in their area and helps streamline and simplify the pet adoption process.</p>
                        </Card>
                 </Grid.Column>
            </Grid.Row>
        </Grid>
        </Segment>
    </div>
</Container>

);

export default PortfolioDev;
