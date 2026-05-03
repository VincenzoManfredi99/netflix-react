import "./App.css";
import HeaderNetflix from "./components/headerNetflix";
import "bootstrap/dist/css/bootstrap.min.css";
import SottoTitoli from "./components/sottoTitoli";
import CardNetflix from "./components/card";
import FooterNetflix from "./components/footerNetflix";
import ProfilePage from "./components/profile";

function App() {
  return (
    <>
      {/*<header>
        <HeaderNetflix />
      </header>
      <main>
        <SottoTitoli testo="Saga di Batman" />
        <CardNetflix searchSaga="batman" />
        <SottoTitoli testo="Saga di Batman" />
        <CardNetflix searchSaga="harry potter" />
        <SottoTitoli testo="Saga di Scream" />
        <CardNetflix searchSaga="scream" />
      </main>
      <footer>
        <FooterNetflix />
      </footer>*/}
      <ProfilePage />
    </>
  );
}

export default App;
