import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";
import  Home  from "./component/home.jsx";
import  Jumbotron  from "./component/jumbotron.jsx";
import  Cards from "./component/cards.jsx";
import  Footer from "./component/footer.jsx";

function App() {
  let img = [
    "https://avatars.githubusercontent.com/u/63676653?v=4",
    "https://avatars.githubusercontent.com/u/19788020?v=4",
    "https://media-exp1.licdn.com/dms/image/C4E03AQF1xGz_cQzESA/profile-displayphoto-shrink_200_200/0/1609468795571?e=1668038400&v=beta&t=h3BrPhHgrcG0Af4ofge7zkOQaRlDEWqBAoOQCHl_vQ8",
    "https://media-exp1.licdn.com/dms/image/C4E03AQHb4GjapOKkCg/profile-displayphoto-shrink_800_800/0/1533756703637?e=1668038400&v=beta&t=7Nl2m0G_Urda-Iq7ip5B47eOoeBol5-IrY9v1LisJkI",
  ];
  let alt = ["Martin", "Abel", "Greivin", "Ronald"];
  let tittle = [
    "Martin Coimbra",
    "Abel Gonzalez",
    "Greivin Rodriguez",
    "Ronald Azofeifa",
  ];
  let description = [
    "Soy de Argentina",
    "Soy de Republica Dominicana",
    "Soy de Tiquicia Señores",
    "Soy de Tiquicia Señores",
  ];
  let link = [
    "https://github.com/MartinCoimbra",
    "https://github.com/abelgonzalezr",
    "https://github.com/ImFineZ",
    "https://github.com/ronald1710",
  ];
  let desLink = ["GitHub", "GitHub", "GitHub", "GitHub"];

  return (
    <div>
      <Home />,
      <div className="container">
      <Jumbotron />,
      <div className="container d-flex">   
      {img.map((singleimg, i) => {
        return <Cards key={i}  img={singleimg} alt={alt[i]} tittle={tittle[i]} description={description[i]} link={link[i]} desLink={desLink[i]} />;
      })}
      </div>
      </div>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
