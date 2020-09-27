import React from "react";
import './About.css';

function About(props){
    return (
        <div className="about__container">
            <span>리액트로 만든 첫번째 앱입니다.</span>
            <span>컴포넌트를 생성하고 사용하는 방법,</span>
            <span>라우터와 라우트를 통한 페이지 이동을 공부했습니다.</span>
        </div>
    )
}

export default About;