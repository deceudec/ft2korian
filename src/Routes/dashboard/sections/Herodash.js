import React from 'react-dom';
import { ReactComponent as Illustration} from '../../../assets/img/illustrationjolie.svg';
import { Checkbox } from '@mui/material';
import { ReactComponent as IcoLogistique} from '../../../assets/img/Logistique.svg';
import { ReactComponent as IcoEquipes} from '../../../assets/img/statutequipes.svg';
import { ReactComponent as IcoCompta} from '../../../assets/img/compta.svg';
import { ReactComponent as IcoOccupation} from '../../../assets/img/occupation.svg';
import { ReactComponent as IcoContention} from '../../../assets/img/contentions.svg';
import { ReactComponent as IcoChutes} from '../../../assets/img/chutes.svg' ;
import { ReactComponent as IcoDouleur} from '../../../assets/img/douleur.svg';
import { ReactComponent as IcoMortalité} from '../../../assets/img/mortalité.svg';
import { ReactComponent as IcoPoids} from '../../../assets/img/poids.svg';

function Herodash(){
    return(
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
    )
}
export default Herodash;
