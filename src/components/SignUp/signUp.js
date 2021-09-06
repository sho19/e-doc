import React,{useState} from 'react';
import "./signUp.css"

const Authentication = () => {
    const [email,setEmail] = useState('')
    return (
        <div className={'signUp-parent-contatiner'}>
            <div className={'authentication-header'}>Email address</div>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
        </div>
    );
};

export default Authentication;