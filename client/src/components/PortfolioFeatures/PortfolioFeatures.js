import React from 'react';
// import './Candidate.css';
import {
Container,  Grid, Image, Card, Segment
} from 'semantic-ui-react';
import "./PortfolioFeatures.css";

const PortfolioFeatures =() => (
  
<Container>
    <div>
    <Segment>
    <h1>Feature Films</h1>
    <hr />
        <Grid>
            <Grid.Row columns={2}>

                <Grid.Column>
                    <Card id="profileCard">
                       <Image src={require('../../assets/images/profile200.png')} size="medium" href="https://www.youtube.com/watch?v=2zEgzlin07M" rel="noreferrer noopener" target="_blank" alt="Profile of a Killer"/>
                        <h5>Profile Of A Killer</h5>
                       <p>First Assistant Director. Written and directed by Caspian Tredwell-Owen.
                        The FBI tracks down a 16 year old serial killer.</p>
                    </Card>
                </Grid.Column>

                     <Grid.Column>
                     <Card id="intoTemptationCard">
                         <Image src={require('../../assets/images/intoTemptation.png')} size="medium" href="https://www.youtube.com/watch?v=AOwy16r4FKI" rel="noreferrer noopener" target="_blank" alt="Into Temptation" />
                        <h3>Into Temptation
                        </h3>
                        <p>Second Assistant Director: The first feature length film I worked on. Starring Jeremy Sisto and Kristin Chenoweth.
                         Directed by Patrick Coyle.</p>
                    </Card>
                 </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={2}>

                <Grid.Column>
                    <Card id="publicDomainCard">
                       <Image src={require('../../assets/images/publicDomain.png')} size="medium" href="http://www.dailymotion.com/video/x5afyer" rel="noreferrer noopener" target="_blank" alt="The Public Domain"/>
                        <h3>The Public Domain
                        </h3>
                        <p>First Assistant Director: The second film I made with Patrick Coyle. Staring an ensemble cast featuring Emily Bridges.</p>
                    </Card>
                     </Grid.Column>

                     <Grid.Column>
                        <Card id="jingleDressCard">
                         <Image src={require('../../assets/images/jingleDress2.png')} size="medium" href="https://www.youtube.com/watch?v=JdASEjOjJCU" rel="noreferrer noopener" target="_blank" alt="The Jingle Dress"/>
                        <h3>The Jingle Dress
                        </h3>
                        <p>First Assistant Director: A film partially financed by a Minnesota State Arts and Culture Grant. Explores the Native American experience
                        leaving the reservation and coming to the city.</p>
                        </Card>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </Segment>
    </div>
</Container>

);

export default PortfolioFeatures;