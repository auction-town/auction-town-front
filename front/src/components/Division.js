import React,{useState} from 'react';

function SelectList(props) {
  const list = [];
  for(let i = 0; i < props.moyeoList.length; i++){
    let data = props.moyeoList[i];
    list.push(<li key={data.key}>
      <a id={'/moyeoList/'+data.key} href={'/entryList/'+data.key} onClick={event =>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{data.title} {data.peoples}</a>
    </li>)
  }

  return <div>
    <ul>
      {list}
    </ul>
  </div>
}

function MainCalculator(props) {
  let mainSection = null;
  let value = null;
  for(let i = 0; i < props.moyeoList.length; i++){
    let data = props.moyeoList[i];
    if(props.calculator === '/moyeoList/'+data.key){
      for(let j = 0; j < data.value.length; j++){
        value = <>{value}
          <option>
            {data.value[j]}
          </option>
        </>
      }
      mainSection = <div>
        <h2>
          <p>{data.title} {data.peoples}</p>
        </h2>
        <div>
          <p>입력</p>
          <p>결제 한 사람</p>
          <select name='people'>
            {value}
          </select>
          <form>
            <p>사용처</p>
            <input></input>
            <p>결제금액</p>
            <input></input>
            <input type='submit'></input>
          </form>
        </div>
      </div>
    }
  }
  return <div>{mainSection}</div>
}

export default function Division() {
  const [moyeoList,setMoyeoList] = useState([ //setMoyeoList는 약속추가하기, 새로운 약속잡기를 통해 사용될 예정
    {key : 1, title : "회운님과 약속", peoples : "(2)", value : ["장준수","정회운"]},
    {key : 2, title : "다솜님과 약속", peoples : "(2)", value : ["장준수","이다솜"]},
    {key : 3, title : "프로젝트 약속", peoples : "(5)", value : ["장준수","정회운","이다솜","최강현","황수경"]}
  ]);

  const [calculator,setCalculator] = useState('/moyeoList/'+moyeoList[0].key);

  return <article className="article">
    <div className="division-title">
      <h1>친구랑 N빵 계산하기</h1>
      <p>오늘 친구와 사용한 금액 계산하기</p>
    </div>
    <section className='division-section'>
        <SelectList moyeoList={moyeoList} onChangeMode={(id) => {
          setCalculator(id);
        }}/>
        <MainCalculator calculator={calculator} moyeoList={moyeoList}/>
    </section>
  </article>
}