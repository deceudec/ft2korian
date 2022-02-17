import React from "react";
import {ReactComponent as HorairesChutes} from "../../../assets/img/horaireschutes.svg";
import {ReactComponent as MortsChutesGraves} from "../../../assets/img/mortchutes.svg";
import {ReactComponent as Chutespatients} from "../../../assets/img/chutespatients.svg";
import {ReactComponent as Chutesan} from "../../../assets/img/chutesan.svg";
import {ReactComponent as ChutesChutesGraves} from "../../../assets/img/chuteschutesgraves.svg";
import {ReactComponent as CausesMorts} from "../../../assets/img/causesdeces.svg";


function Chutes (){
    return(
        <div className="sectionChutes">
            <h2>Chutes</h2>
            <div className="Divchutes">
                <div className="lignechute">
                    <div className="ContenantViz">
                        <h3>Horaires fréquents de chute</h3>
                        <HorairesChutes/>
                    </div>
                    <div className="ContenantViz">
                        <h3>Taux de mortalité des chutes graves</h3>
                        <MortsChutesGraves/>
                    </div>
                </div>
                <div className="lignechute">
                    <div className="ContenantViz">
                        <h3>Nombre de chutes moyen / patients / an</h3>
                        <Chutespatients/>
                    </div>
                    <div className="ContenantViz">
                        <h3>Nombre de chutes / an</h3>
                        <Chutesan/>
                    </div>
                </div>
                <div className="lignechute">
                    <div className="ContenantViz">
                        <ChutesChutesGraves/>
                    </div>
                    <div className="ContenantViz">
                        <h3>Causalité des décès</h3>
                        <CausesMorts/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Chutes;