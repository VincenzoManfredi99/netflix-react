import SottoTitoli from "./sottoTitoli";
import CardNetflix from "./card";
import FooterNetflix from "./footerNetflix";
import HeroNetflix from "./heroNetflix";
import HeaderNetflix from "./headerNetflix";

const HomeNetflix = () => {
  return (
    <>
      <header>
        <HeaderNetflix />
        <HeroNetflix />
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
      </footer>
    </>
  );
};

export default HomeNetflix;
