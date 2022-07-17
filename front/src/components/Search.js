import React,{useState} from 'react';
import Exit from '../data/exit_btn.png'

export default function Search(props) {


  return <article className="search">
    <div className="search_box">
        <h2>아이디/비밀번호 찾기</h2>
        <img id='login' className="exit_btn" src={Exit} alt="exit" onClick={event =>{
          event.preventDefault();
          props.onChange(event.target.id);
        }}/>
      <div className='search_other_menu'>
        <a id='search_go_id' className='search_other_id' href="/" onClick={event =>{
          event.preventDefault();
          props.onChange(event.target.id);
        }}>아이디 찾기</a>
        <a id='search_go_pw' className='search_other_pw' href="/" onClick={event =>{
          event.preventDefault();
          props.onChange(event.target.id);
        }}>비밀번호 찾기</a>
      </div>
    </div>
  </article>
}