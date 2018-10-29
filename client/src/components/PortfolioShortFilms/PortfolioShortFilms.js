import React from 'react';

// import './Candidate.css';
import {
Container,  Grid, Image, Card, Segment
} from 'semantic-ui-react';
import "./PortfolioShortFilms.css";

const PortfolioShortFilms =() => (
  
<Container id="shortFilmsContainer">
    <div>
    <Segment>
    <h1>Short Films</h1>
    <hr />
        <Grid>
            <Grid.Row columns={2}>

                <Grid.Column>
                <Card id="tattooUndergroundCard">
                   <Image src={require('../../assets/images/tattooUnderground.png')} size="medium" href="https://player.vimeo.com/video/47910614" rel="noreferrer noopener" target="_blank" alt="Tattoo Underground"/>
                    <h3>Tattoo Underground
                    </h3>
                    <p>Set Dresser: A short film by the late Barry Kimm which explores some deeply personal reasons people get tattoos.</p>
                    </Card>
                 </Grid.Column>

                 <Grid.Column>
                 <Card id ="feminineMystiqueCard">
                     <Image src={require('../../assets/images/feminineMystique200.png')} size="medium" href="https://vimeo.com/900342" rel="noreferrer noopener" target="_blank" alt="The Feminine Mystique" />
                    <h3>The Feminine Mystique
                    </h3>
                    <p>Key Grip: A single take steady cam short film. Directed and shot by Ryan Taylor.</p>
                    </Card>
                 </Grid.Column>
            </Grid.Row>
        </Grid>
        </Segment>
    </div>
</Container>

);

export default PortfolioShortFilms;