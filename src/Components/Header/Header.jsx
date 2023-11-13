import './Header.css';

const Header = () => {
  return(
    //jsx => js vanila + xml
    <header className='Header'>
      <h2>Logo</h2>
      <nav>
        <a href="/">home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </nav>
    </header>
  )
}

export default Header;
