# Movie App 2020

React JS Fundamentals Course (2020 Update!);

리액트로 만든 첫번째 앱입니다.

컴포넌트를 생성하고 사용하는 방법,

라우터와 라우트를 통한 페이지 이동을 공부했습니다.

<a href="https://junil-git.github.io/movie_app_2020" target="_blank">Here!</a>

<h1>React 기초 정리</h1>

<h3>component란?</h3>
<p>HTML을 반환하는 함수이다.</p>

<h3>JSX란?</h3>
<p>js의 확장된 문법이다. React의 "element"를 생성한다.<p>

<h3>axios</h3>
<p>HTTP 통신 라이브러리이다</p>
<p>download => npm i axios</p>

<h3>async / await</h3>
<p>async/await는 비동기 처리 방식으로,
async는 프로미스를 반환시키며 요청값이 나올 때 까지 대기시킨다.
비동기를 동기처럼 사용

1. 기본적인 코드 사용
function fetchUser(){
    //do network request in 10 secs.... //10초 정도 걸리는 요청값
    return 'junil';
}

const user = fetchUser();       //
console.log(user);              //user는 10초 정도 걸리기 때문에 값이 없음 error

2. async/await 코드 사용
async function fetchUser(){     //async와 await을 사용하여 요청값을 받을 떄까지 대기시킴
    await axios.get("url");
}

const user = fetchUser();       //요청값을 다 받았으면 실행
console.log(user)               //정상적 결과 출력
</p>

 <h3>PropTypes (TypeScript배우면 안써도된다.)</h3>
 <p>property들의 type을 체크 해준다. 
    download = npm i prop-types
    import PropTypes from "prop-types"</p>

<h3>map을 이용한 데이터 나열</h3>
<p>
리턴값을 컴포넌트로 주게 되면 배열값들이 하나씩 분배됨
    this.state.movies.map(movie =>{ 
                  return <Movie key = {movie.id} d={movie.id} itle={movie.title} summary={movie.summary} year={movie.year} poster={movie.medium_cover_image} genres={movie.genres}></Movie>})
</p>

<h3>react-router-dom</h3>
<p>download => npm i react-router-dom</p>
<p>리액트는 원페이지이기때문에 페이지이동을 하려면 라우터를 이용해서 주소를 바꿔야한다.</p>
<p>속성값 path = 경로설정 component = 해당 컴포넌트 설정 exact = path의 값과의 정확성</p>
