import React from 'react'
import TreeFile from './TreeFile'
import data from '../fileTree/structureFiles.json'

class App extends React.Component {
  constructor(props) {
      super(props);
  }
  
  render() {
    return (
      <TreeFile 
          path = "root" 
          data = {data}
          openedDirectories = {["root"]}
          directoryTheme = 'dark' //or light
      />
    )
  }
}

export default App;