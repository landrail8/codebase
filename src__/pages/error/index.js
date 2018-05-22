import React from 'react';
import { Link } from 'react-router-dom';
import { DevTools } from './../../utils/index';


export default class ErrorPage extends React.Component {

    render() {
        return (
            <div className="alert alert-danger">
                <h3>Страница не найдена</h3>
                <p>Перейти на <Link to="/">главную</Link></p>
                
                { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }
    
}