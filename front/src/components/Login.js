export default function Login(props) {

  return <article className="login-article">
  <p className='login-title'>로그인</p>
  <form>
    <p>아이디</p>
    <input className="login-id-input" placeholder="아이디를 입력하세요"></input>
    <p>비밀번호</p>
    <input className="login-pw-input" placeholder="암호 입력하세요"></input>
    <input className="login-submit" type="submit" value="로그인" onClick={event => {
      event.preventDefault();
    }}></input>
  </form>
  </article>
}