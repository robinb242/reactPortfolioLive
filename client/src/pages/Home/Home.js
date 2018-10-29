import React from "react";
import { Grid, Container, Segment, Image } from 'semantic-ui-react';
import "./Home.css";



/* MAIN BODY*/ 

class Home extends React.Component {
  handleClick = (event) => {
    console.log ("handlePageLoad function");
  };

  render() {
    return <div>
     <Container textAlign ="center">
      <h1>Robin Bertuccelli</h1>
        
     </Container>
     <Segment textAlign ="center">
     <Container>
    <Image id="robinCircleLeft" src={require('../../assets/images/BertuccelliRobin3Circle2.png')}  floated='left' size='medium' alt='Robin Bertuccelli' />
    <span className="overlay">My Name is John</span>
    </Container>
    <h2>
      Hello and thanks for stopping by. I am a Full Stack Developer with 12 years experience creating media for multiple platforms. I prefer
      a minimalist aesthetic and this approach seems optimal for 90% of the websites I have built. A little bling is fun, but design should 
      complement function and intuitiveness.
    </h2>
   
    <h2>
     I write code that facilitates the consumption of data. Humans strive to build things, in the 21st century we build with code. I spend my days trying to find the best way to talk to 
     machines. Below is a table of some of the technologies I have used in developing projects.
    </h2> 
  </Segment>
{/* Table of technologies */}

<Segment>

    <Grid columns={6}>
    
      <Grid.Row>
        <Grid.Column>
           <a href="https://www.w3.org/TR/html52/"  rel="noreferrer noopener" target="_blank" className="nav-link"> <Image src={require('../../assets/images/icons/html5.png')}  alt="HTML5 Logo" size='tiny' /> </a> 
        </Grid.Column>

        <Grid.Column> 
          <a href="https://www.w3.org/Style/CSS/" rel="noreferrer noopener" target="_blank" className="nav-link"> <Image src={require('../../assets/images/icons/css3.png')}  alt="CSS3 Logo" size='tiny' /> </a> 
        </Grid.Column>

        <Grid.Column>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="noreferrer noopener" target="_blank" className="nav-link"> <Image src={require('../../assets/images/icons/javascript.png')}  alt="Javascript Logo" size='tiny' /> </a> 
        </Grid.Column>
      
        <Grid.Column>
        <a href="https://jquery.com/" rel="noreferrer noopener" target="_blank" className="nav-link"> <Image src={require('../../assets/images/icons/jquery.png')}  alt="JQuery Logo" size='tiny' /> </a> 
        </Grid.Column>

        <Grid.Column>
        <a href="https://dev.mysql.com/doc/" rel="noreferrer noopener" target="blank" className="nav-link"> <Image src={require('../../assets/images/icons/mysql.png')} alt="MySQL Logo" size='tiny' /> </a>
        </Grid.Column>

        <Grid.Column>
        <a href="https://www.mongodb.com/" rel="noreferrer noopener" target="blank" className="nav-link"> <Image src={require('../../assets/images/icons/mongo.jpg')} alt="MongoDB Logo" size='tiny' /> </a>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column> 
        <a href="https://nodejs.org" rel="noreferrer noopener" target="blank" className="nav-link"> <Image src={require('../../assets/images/icons/node_js.png')} alt="NodeJS Logo" size='tiny' /> </a>
        </Grid.Column>

        <Grid.Column>
        <a href="https://reactjs.org/" rel="noreferrer noopener" target="blank" className="nav-link"> <Image src={require('../../assets/images/icons/react.png')} alt="React Logo" size='tiny' /> </a>
        </Grid.Column>

        <Grid.Column>
        <a href="http://www.drupal.com/" rel="noreferrer noopener" target="blank" className="nav-link"> <Image src={require('../../assets/images/icons/drupal.png')} alt="Drupal Logo" size='tiny' /> </a>
        </Grid.Column>

        <Grid.Column>
        <a href="https://expressjs.com/" rel="noreferrer noopener" target="blank" className="nav-link"> <Image src={require('../../assets/images/icons/expressjs.png')} alt="Express Logo" size='tiny' /> </a>
        </Grid.Column>

        <Grid.Column>
        <a href="https://handlebarsjs.com/" rel="noreferrer noopener" target="blank" className="nav-link"> <Image src={require('../../assets/images/icons/handlebars.png')} alt="Express Logo" size='tiny' /> </a>
        </Grid.Column>

        <Grid.Column>
        <a href="https://react.semantic-ui.com/" rel="noreferrer noopener" target="blank" className="nav-link"> <Image src={require('../../assets/images/icons/semanticUI.png')} alt="Express Logo" size='tiny' /> </a>
        </Grid.Column>


      </Grid.Row>
    
    </Grid>
  </Segment>

  <Segment>
  <h5>
I am seeking a position as a Web Developer. I am quite focused about making my career in the web development sector. I have recently graduated from 
the Full Stack Web Development Bootcamp at the University of Minnesota. Though I am an entry-level candidate, I have sound knowledge about HTML5, CSS, Javascript, 
JQuery, Bootstrap, Node.js, MYSQL, MongoDB, React.js, as well as the Drupal CMS. The program was six months of intense exposure to the foundations of web development 
and technologies on the cutting edge. 
<br></br>
<br></br>
My past experience has given me many skills that will transfer well into a team development environment. I have gained a well rounded perspective of every facet of media 
production over the past eleven years in freelance filmmaking. As an Assistant Director and Producer I am responsible for scheduling production and shoots, managing the 
shoot, and am the main point of contact for communication between creative departments and clients. I balance the desire to create the highest quality possible media product
while being aware of the project objectives and the constraints of a budget . A list of a few of the projects I have worked on is included in my resume.  
<br></br>
<br></br>
I also have experience working for a large publicly traded company as a Systems Integrator and Team Leader at Whole Foods Market. My experience with Whole Foods was quite 
dynamic. In the period I worked there, the company “grew up”, and my role evolved as well. The job was initially hands on hardware, software, network, database support.
My role evolved into being a communicator, trying to find the best way to increase automation or information access and managing an implementation team. I
am very good at trouble shooting challenges and quickly understand how a new software system can be utilized to increase efficiency. I was rewarded for my work buy being 
recognized as a Team All-Star.
<br></br>
<br></br>
While I have enjoyed the freedom to work on many different projects as a freelancer, I am seeking a more permanent position or long term project. I believe the breadth of
my experience covers the skills you are looking for in this position. I am very interested in this position and look forward to speaking with a company representative to 
discuss this position. Thank you for considering speaking with me about how I can serve your company.

 </h5>
  </Segment>

    </div>






  }
}

export default Home;

