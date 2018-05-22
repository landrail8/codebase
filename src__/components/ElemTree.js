import ReactDOM from 'react-dom';


export default class TreeFile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.file = props.file;
    this.state.fileStyle = props.fileStyle;
    
    // this.handleDirectoryClick = this.handleDirectoryClick.bind(this);
    // this.getChildrenByPath = this.getChildrenByPath.bind(this);
    // this.isVisible = this.isVisible.bind(this);
  }

  // onFileClick(id) {
  //   //console.log(file);
  //   //ReactDOM.render(<div>wefwefwefwefwef</div>,
  //   //  document.querySelector(`#${id}`));
    
  //   // RENDER info about file

  // };



  render() {
    
    const filePath = this.state.file.filePath;
    const filePathPlainString = filePath.replace(/\//g, "_").replace(/\./g, "_");
    const fileName = filePath.split('/').slice(-1).join('');
    const fileStyle = this.state.fileStyle;

    return (
      <div>
        <li id={filePathPlainString} className="_file" key={filePathPlainString} onClick={() => this.onFileClick(filePathPlainString)} style={fileStyle}><File className="file" />{`               ${fileName}`}</li>;
      </div>
    )
  }

  


}




