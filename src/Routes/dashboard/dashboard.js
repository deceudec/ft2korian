import './dashboard.css';
import Chutes from './sections/chutes';
import Herodash from './sections/Herodash';
import Pointdinteret from './sections/pointdinteret';

export default function Dashboard () {
    return (
        <div class="Dashboard">
            <Herodash/> 
            <Pointdinteret/>
            <Chutes/>
        </div>
    );
};

