
import React from 'react';
import "./Portfolio.css";
import PortfolioBroadcast from "../../components/PortfolioBroadcast/PortfolioBroadcast";
import PortfolioDev from "../../components/PortfolioDev/PortfolioDev";
import PortfolioFeatures from "../../components/PortfolioFeatures/PortfolioFeatures";
import PortfolioMusicVideo from "../../components/PortfolioMusicVideo/PortfolioMusicVideo";
import PortfolioShortFilms from "../../components/PortfolioShortFilms/PortfolioShortFilms";


const Portfolio = () => 

<div>
    <PortfolioDev />
    <br />
     <PortfolioBroadcast />
    <br />
    <PortfolioFeatures />
    <br />
    <PortfolioMusicVideo />
    <br />
    <PortfolioShortFilms />
</div>


export default Portfolio;