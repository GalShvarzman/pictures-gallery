import * as React from 'react';
import './pictures-list.css';
import PictureUpload from "./picture-upload";

interface IPicturesListState{
    picSrcList:string[]
}

class PicturesList extends React.PureComponent<{}, IPicturesListState> {
    constructor(props:{}){
        super(props);
        this.state = {
            picSrcList:[]
        }
    }

    componentDidMount() {
        this.setPictures();
    }

    setPicturesList = () => {
       this.setPictures();
    };

    setPictures = () => {
        const storedImgSrc = JSON.parse(localStorage.getItem("pictures") || "[]");
        this.setState({picSrcList:storedImgSrc});
};

    public render() {
       const list = this.state.picSrcList.map((imgSrc, index) => {
           return <img className="pic" key={index} src={imgSrc}/>
       });

        return (
            <div className="pic-list">
                <PictureUpload setPicturesList={this.setPictures}/>
                {list}
            </div>
        );
    }
}

export default PicturesList;