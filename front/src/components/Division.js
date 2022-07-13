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

  return <ol>
    {list}
  </ol>
}

function MainCalculator(props) {
  let mainSection = null;
  for(let i = 0; i < props.moyeoList.length; i++){
    let data = props.moyeoList[i];
    if(props.calculator === '/moyeoList/'+data.key){
      mainSection = props.moyeoList[i].key;
    }
  }
  return <h2>
    {mainSection}
  </h2>
}


export default function Division() {
  const [moyeoList,setMoyeoList] = useState([
    {key : 1, title : "준수님과 약속", peoples : "(2)"},
    {key : 2, title : "다솜님과 약속", peoples : "(2)"},
    {key : 3, title : "프로젝트 약속", peoples : "(5)"}
  ]);

  const [calculator,setCalculator] = useState('/moyeoList/'+moyeoList[0].key);

  return <article className="article">
    <div className="division-title">
      <h1>친구랑 N빵 계산하기</h1>
      <p>오늘 친구와 사용한 금액 계산하기</p>
    </div>
    <section className='division-section'>
      <div>
        <SelectList moyeoList={moyeoList} onChangeMode={(id) => {
          setCalculator(id);
        }}/>
      </div>
      <div>
        <MainCalculator calculator={calculator} moyeoList={moyeoList}/>
      </div>
    </section>
  </article>
}