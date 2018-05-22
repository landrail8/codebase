import React, { PropTypes } from 'react';
import TreeFile from './TreeFile';
import data from '../fileTreeStructure/structureFiles.json';
import { DevTools } from '../utils/index';
import { Header } from './header/index';

class App extends React.Component {
  constructor(props) {
      super(props);
  }
  
  static propTypes = {
    //children: PropTypes.any.isRequired  
  };

  //static path = '/';

  render() {
    return (
      <div>
        <Header />
        <TreeFile 
          path = "root" 
          data = {data}
          openedDirectories = {["root"]}
          directoryTheme = 'dark' //or light
        />
        { this.props.children }
        { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
      </div>
    )
  }
}

export default App;