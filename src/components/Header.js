import headerLogoPath from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={headerLogoPath} alt="Логотип сайта - слово Mesto" className="header__logo"/>
    </header>
  );
}

export default Header;