import React from 'react';
// import './Candidate.css';
import {
Container,  Grid, Image, Card, Segment
} from 'semantic-ui-react';
import "./PortfolioMusicVideo.css";

const PortfolioMusicVideo =() => (
  
<Container>
    <div>
    <Segment>
    <h1>Music Videos</h1>
    <hr />
        <Grid>
            <Grid.Row columns={2}>

                <Grid.Column>
                <Card id="dessaGhostsCard">
                   <Image src={require('../../assets/images/dessaGhosts.png')} size="medium" href="https://www.youtube.com/watch?v=B6A8T6qWPBo" rel="noreferrer noopener" target="_blank" alt="Dessa - Call Off Your Ghosts"/>
                    <h3>Dessa - Call Off Your Ghosts
                    </h3>
                    <p> Producer: A visual playground directed by Dan Cummings. Featuring the artwork of DZINE and the James Sewell Ballet.</p>
                    </Card>
                 </Grid.Column>

                 <Grid.Column>
                 <Card id="bethRestCard">
                     <Image src={require('../../assets/images/bethRest2.png')} size="medium" href="https://www.youtube.com/watch?v=wPSvDoqUl8Q" rel="noreferrer noopener" target="_blank" alt="Bon Iver - Beth Rest" />
                    <h3>Bon Iver - Beth Rest
                    </h3>
                    <p>First Assistant Director: Passion project of Justin Vernon. We spent two weeks at Justin's April Base Studio, building sets during the day and shooting
                    at night. Director of Photography: the late great Andre Durand.</p>
                </Card>
                 </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={2}>

                    <Grid.Column>
                    <Card id="dessaAlibiCard">
                       <Image src={require('../../assets/images/dessaAlibi.png')} size="medium" href="https://www.youtube.com/watch?v=J2_aY9gYTF0" rel="noreferrer noopener" target="_blank" alt="Dessa - Alibi"/>
                        <h3>Dessa: Alibi </h3>
                       <p>First Assistant Director: Some stop motion fun early in Dessa's career.</p>
                    </Card>
                     </Grid.Column>

                     <Grid.Column>
                     <Card id="owlCityCard">
                         <Image src={require('../../assets/images/owlCity.png')} size="medium" href="https://www.youtube.com/watch?v=Z3gstWVGnSM&list=RDZ3gstWVGnSM" rel="noreferrer noopener" target="_blank" alt="Owl City - Metropolis"/>
                        <h3>The Jingle Dress
                        </h3>
                        <p>First Assistant Director: Creative combination of live motion footage and animation.</p>
                     </Card>   
                     </Grid.Column>
            </Grid.Row>
        </Grid>
        </Segment>
    </div>
</Container>

);

export default PortfolioMusicVideo;