import React from 'react-dom';
import Legende from './legende';
import {ReactComponent as LegStandard} from '../../../assets/img/legendestandardviz.svg';
import {ReactComponent as VizTauxMortalité} from '../../../assets/img/vizinteret.svg';
import {ReactComponent as IconeDanger} from '../../../assets/img/dangerinteret.svg';

 function Pointdinteret () {
    return(
    <><h2>Point d'intérêt</h2><div className="pointdinteret">
            <Legende/>
            <div className="vizdinteret">
                <div className="gaucheinteret">
                    <div className="indicationstandard">
                        <LegStandard/>
                        <p>Standard Korian</p>
                    </div>
                    <h3>Taux de mortalité au fil des mois</h3>
                    <VizTauxMortalité/>
                </div>
                <div className="droiteinteret">
                    <IconeDanger/>
                    <p>Novembre</p>
                    <p>4 décès</p>
                </div>
            </div>

        </div>
        </>
)
}
export default Pointdinteret;