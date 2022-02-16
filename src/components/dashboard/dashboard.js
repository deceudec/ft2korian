import '../dashboard.css';
import Illustration from '../../img/illustrationjolie.svg';
import { Checkbox } from '@mui/material';
import IcoLogistique from '../../img/Logistique.svg';
import IcoEquipes from '../../img/statutequipes.svg';
import IcoCompta from '../../img/compta.svg';
import IcoOccupation from '../../img/occupation.svg';
import IcoContention from '../../img/contentions.svg';
import IcoChutes from '../../img/chutes.svg;
import IcoDouleur from '../../img/douleur.svg';
import IcoMortalité from '../../img/mortalité.svg';
import IcoPoids from '../../img/poids.svg';

export default const Dashboard = () => {
    return (
        <div id="HeroDash">
            <div id="filtresgauche">
                <div className='filtre'>
                    <Checkbox/>
                    <p>Logistique</p>
                    <IcoLogistique/>
                </div>
                <div className='filtre'>
                    <Checkbox/>
                    <p>Statut des équipes</p>
                    <IcoEquipes/>
                </div>
                <div className='filtre'>
                    <Checkbox/>
                    <p>Comptabilité</p>
                    <IcoCompta/>
                </div>
                <div className='filtre'>
                    <Checkbox/>
                    <p>Occupation</p>
                    <IcoOccupation/>
                </div>
            </div>
            <Illustration/>
            <div id="filtresdroite">
                <div className='filtre'>
                    <Checkbox/>
                    <p>Contentions physiques</p>
                    <IcoContention/>
                </div>
                <div className='filtre'>
                    <Checkbox/>
                    <p>Chutes</p>
                    <IcoChutes/>
                </div>
                <div className='filtre'>
                    <Checkbox/>
                    <p>Mortalité</p>
                    <IcoMortalité/>
                </div>
                <div className='filtre'>
                    <Checkbox/>
                    <p>Évaluations de la douleur</p>
                    <IcoDouleur/>
                </div>
                <div className='filtre'>
                    <Checkbox/>
                    <p>Mesures de poids</p>
                    <IcoPoids/>
                </div>
            </div>
        </div>
    );
};

