import "./Main.css";
import Chart from "../charts/Chart";
import Boutonprincipal from "../boutons/boutonprincipal";


const Main = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <div className="main__greeting">
            <h1>Bienvenue Daniel Richard</h1>
          </div>
        </div>
        <div className="main__cards">
          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Votre score général</p>
              <img className="ehpadscore" src="../../img/ehpadscoregeneral.png"/>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Bien être des patients</p>
              <img className="ehpadscore" src="../../img/ehpadscoregeneral.png"/>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Gestion de l'établissement</p>
              <img className="ehpadscore" src="../../img/ehpadscoregeneral.png"/>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Votre score est basé sur 4 critères :</p>
              <div className="lignecrit">
                <p className="">Chutes</p>
                <img src="../../img/chutes.png"/>
              </div>
              <div className="lignecrit">
                <p className="">Mortalité</p>
                <img src="../../img/mortalite.png"/>
              </div>
              <div className="lignecrit">
                <p className="">Mesures de poids</p>
                <img src="../../img/poids.png"/>
              </div>
              <div className="lignecrit">
                <p className="">Évaluations de la douleur</p>
                <img src="../../img/douleur.png"/>
              </div>
            </div>
          </div>
        </div>
        
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Income</h1>
                <p>$75,300</p>
              </div>

              <div className="card2">
                <h1>Sales</h1>
                <p>$124,200</p>
              </div>

              <div className="card3">
                <h1>Users</h1>
                <p>3900</p>
              </div>

              <div className="card4">
                <h1>Orders</h1>
                <p>1881</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Main;
