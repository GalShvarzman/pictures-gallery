import * as React from 'react';
import './App.css';

import PicturesList from "./pictures-list";

class App extends React.PureComponent<{}, {}> {

    constructor(props:{}){
        super(props);
    }

      public render() {
        return (
              <PicturesList/>
        );
      }
}

export default App;