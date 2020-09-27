import React from 'react';
import DetailContext from "./DetailContext";
class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if(location.state) {
        return (
            <DetailContext title={location.state.title}
              year={location.state.year} poster={location.state.poster}
             genres={location.state.genres} summary={location.state.summary}/>
        )
        } else {
            return null;
        }
    }
}

export default Detail;