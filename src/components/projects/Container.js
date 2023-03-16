import React from "react";
import { useNavigate } from 'react-router-dom';
import LogoAggloMistral from '../../images/Logo-AggloMistral.png';
import LogoPortfolio from '../../images/Logo-Portfolio.PNG';
import LogoSDC from '../../images/Logo-sdc.png';
import LogoParc from '../../images/Logo-Parc.PNG';



const Container = () => {
    const navigate = useNavigate();
    const AggloMistral = () => navigate('/Agglomistral');
    const Sdc = () => navigate('/Sdc');
    const Portfolio = () => navigate('/Portfolio');
    const Parc = () =>navigate('/Parc'); 
    return (
        <div className="realisation">
            <div className="grid-container">
                <div className="container_img">
                    <a  onClick={AggloMistral}>
                        <img className="image_realisation" src={LogoAggloMistral} alt="Logo d'AggloMistral"></img>
                    </a>
                </div>       
                <div className="container_img">
                    <a onClick={Sdc}>
                        <img className="image_realisation" src={LogoSDC} alt="Logo de SDC"></img> 
                    </a>
                </div>              
                <div className="container_img">
                    <a onClick={Portfolio}>
                        <img className="image_realisation" src={LogoPortfolio} alt="Logo de Portfolio"></img>
                    </a>
                </div>
                <div className="container_img">
                    <a onClick={Parc}>
                        <img className="image_realisation" src={LogoParc} alt="Logo de Parc"></img>
                    </a>
                </div> 
                <div className="container_img">
                    <a onClick={Portfolio}>
                        <img className="image_realisation" src={LogoPortfolio} alt="Logo de Portfolio"></img>
                    </a>
                </div> 
                <div className="container_img">
                    <a onClick={Portfolio}>
                        <img className="image_realisation" src={LogoPortfolio} alt="Logo de Portfolio"></img>
                    </a>
                </div>                      
            </div>       
        </div>
     );
  };
  
  export default Container;
  