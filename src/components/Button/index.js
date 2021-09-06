import React from 'react';

const Button = (props) => {
    const style = {
        button: {
            color: 'var(--color-white)',
            backgroundColor: props.color==='blue'?'var(--color-blue)':'var(--color-black)',
            padding: '5px 10px',
            borderRadius: props.type === 'round' ? '50px' : '5px'
        }
    }
    return (
        <button style={style.button} onClick={props.onPress}>{props.children}</button>
    );
};

export default Button;