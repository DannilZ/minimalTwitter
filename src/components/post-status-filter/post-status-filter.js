import React, {Component} from 'react';

import './post-status-filter.css';

export default class PostStatusFiter extends Component  {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', lable: 'Все'},
            {name: 'like', lable: 'Понравилось'},    
        ]
    }

   render() {

        const buttons = this.buttons.map( ({name, lable}) => {
            const active = this.props.filter === name;
            const clazz = active ? 'btn-info' : 'btn-outline-secondary';
            return (
            <button 
            key={name} 
            type="button" 
            className={`btn ${clazz}`}
            onClick={ () => this.props.onFilterSelect(name)}>
                {lable}
            </button>  
            )
        });

        return(
            <div className="btn-group">
               {buttons}
            </div>
        )
   }
}

