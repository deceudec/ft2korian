import "./Main.css";
import Boutonprincipal from "../boutons/boutonprincipal";
import Boutonsecondaire from "../boutons/boutonsecondaire";
import '../../index.css';

export default function Main () {
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
              <Route path=""
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
        </div>
        <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Votre score est basé sur 4 critères :</p>
              <div className="lignecrit">
                <p className="">Chutes</p>
                <img src="../../img/chutes.svg"/>
              </div>
              <div className="lignecrit">
                <p className="">Mortalité</p>
                <img src="../../img/mortalité.svg"/>
              </div>
              <div className="lignecrit">
                <p className="">Mesures de poids</p>
                <img src="../../img/poids.svg"/>
              </div>
              <div className="lignecrit">
                <p className="">Évaluations de la douleur</p>
                <img src="../../img/douleur.svg"/>
              </div>
            </div>
          </div>
        </div>
        <div className="boutons" >
          <Boutonprincipal/>
          <Boutonsecondaire/>
        </div>
        <div className="card">
          <div className="card_inner">
            <h2>Pour résumer :</h2>
            <p> Actuellement, votre score est à revoir </p>
            <div className="cardgoch">
              <img className="iconeresume" src="../../img/confetti.png"/>
              <div className="colonnecard">
                <h3>Bravo :</h3>
                <li>Le taux de chutes entre 20h et 6h du matin a légèrement baissé.</li>
                <li>Le taux de mise en contention des patients a également baissé.</li>
                <li>Les évaluations de douleur ont été 1.5x plus fréquentes que le mois dernier.</li>
                <li>La fréquence des mesures de poids reste inchangée, elles se font l'après-midi et le matin.</li>
              </div>
            </div>
            <div className="carddroate">
              <img className="iconeresume" src="../../img/danger.png"/>
              <div className="colonnecard">
                <h3>Attention :</h3>
                <li>Vous avez accueilli 12 patients ce mois-ci.</li>
                <li>Vous avez perdu 4 patients ce mois-ci.</li>
                <li>Surveillez  votre jauge de capacité d'accueil</li>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card_inner">
            <h2>Retour de vos équipes</h2>
            <div className="ligneretourequipe">
              <img  className="iconeretour" src="../../img/iconeretourequipe.svg"/>
              <p>"Nous manquons de personnels qualifiés ce qui influe sur la qualité du travail des aides soignant(e)s actuel(le)s."</p>
            </div>
            <div className="ligneretourequipe">
              <img  className="iconeretour" src="../../img/iconeretourequipe.svg"/>
              <p>"Les patients sont heureux et bien traités, cependant certaines familles restent dubitatives."</p>
            </div>
            <div className="ligneretourequipe">
              <img  className="iconeretour" src="../../img/iconeretourequipe.svg"/>
              <p>"En terme de logistique, il manque du matériel de qualité mais pas forcément de premier prix."</p>
            </div>
          </div>
        </div>
    </main>
  );
};


