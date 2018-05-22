import React from 'react';
import { Header } from './../../components/header/index';
import { DevTools } from './../../utils/index';


export default class ContactPage extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    static propTypes = {
      //children: PropTypes.any.isRequired  
    };

    //static path = '/contact';
    
    render() {
        return (
            <div>
                <Header />
                <div className="alert alert-danger">Hi</div>
                
                { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }
    
}
