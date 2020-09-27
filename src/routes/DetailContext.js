import React from 'react';
import './DetailContext.css';

function DetailContext(props){
    const { genres, poster, title, year, summary} = props;
    return(
        <div className="total__box">
            <img src={poster} alt={title} title={title}/>
            <div className="textBox">
                <span>{title}</span>
                <span>{year}</span>
                <ul >{genres.map((e,id)=>
                    <li key={id}>{e}</li>
                )}</ul>
                <span>{summary}</span>
            </div>
        </div>
    )
}

export default DetailContext;