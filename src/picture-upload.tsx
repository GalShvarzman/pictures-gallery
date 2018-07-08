import * as React from 'react';
import './picture-upload.css';

interface IPictureUploadProps{
    setPicturesList():void
}

class PictureUpload extends React.PureComponent<IPictureUploadProps, {}> {
    constructor(props:IPictureUploadProps){
        super(props);
    }

    onSelect = (event:any)=>{
        event.preventDefault();
        if(event.target.files){
            for(let file of event.target.files){
                const fr = new FileReader();
                fr.readAsDataURL(file);
                fr.onload = () => {
                    const storedImgSrc = JSON.parse(localStorage.getItem("pictures") || "[]");
                    storedImgSrc.push(fr.result);
                    localStorage.setItem("pictures", JSON.stringify(storedImgSrc));
                    this.props.setPicturesList();
                }
            }
        }
    };

    public render() {
        return (
                <label className="file-label">+
                    <input accept="image/png, image/jpeg" className="upload-file" type="file" onChange={this.onSelect}/>
                </label>
        );
    }
}

export default PictureUpload;