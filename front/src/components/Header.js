import Logo from '../data/Logo.png'

export default function Header(props) {

  return <header className="header">
    <a href='/' className="brand-name">모여모여</a>
    <a href='/'><img src={Logo} className="logo" alt='logo'/></a>
    <a href='/' className="login" onClick={(event)=>{
      event.preventDefault();
      props.onChange(event.target.className);
    }}>로그인</a>
  </header>
}