import * as React from 'react';
import './App.css';
import PictureUpload from "./picture-upload";
import PicturesList from "./pictures-list";

class App extends React.PureComponent<{}, {}> {
    public picListRef:any;

    constructor(props:{}){
        super(props);
        this.picListRef = React.createRef();
    }

    setPicturesList = () => {
       this.picListRef.current.setPicturesList();
    };


      public render() {
        return (
          <>
              <PictureUpload setPicturesList={this.setPicturesList}/>
              <PicturesList ref={this.picListRef}/>
          </>
        );
      }
}

export default App;
