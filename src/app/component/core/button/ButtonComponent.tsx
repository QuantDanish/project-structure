import * as React from 'react';
import { ButtonProps } from './types';



const Button: React.FC<ButtonProps> = ({text, handler, className}) => {
    const classes = ['button-component', className].join(' ');

    return <button className={classes} onClick={handler} >
      {text || 'Button'}
      </button>
}


export default Button;