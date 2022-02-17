import React from "react";
import { ReactComponent as MoinsBien} from '../../../assets/img/Standardnégatif.svg';
import { ReactComponent as Mieux} from '../../../assets/img/Standardpositif.svg';
import { ReactComponent as Standard} from '../../../assets/img/Standard.svg';

export default function Legende (){
    return(
        <div className="souslegende">
                <div className="moins">
                    <MoinsBien />
                    <p id="txtmoinsbien">Moins bien que le standard Korian</p>
                </div>
                <div className="mmieux">
                    <Mieux />
                    <p id="txtmieux">Mieux que le standard Korian</p>
                </div>
                <div className="standard">
                    <Standard />
                    <p id="txtstandard">Standard Korian</p>
                </div>
            </div>
    )
}