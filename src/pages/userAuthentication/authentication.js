import React from 'react';
// import SignUp from '../../components/';
import "./authentication.css"
import { LogoIcon } from '../../components/Svg/index';

const Authentication = () => {
    return (
        <div className={'authentication-parent-contatiner'}>
            <div className={'authentication-logoSection'}>
                <img className={'authentication-logoImg'} src={LogoIcon} alt={"logo"} />
                <div className={'authentication-headerContainer'}>
                    <div className={'authentication-header'}>eDoc</div>
                    <div className={'authentication-header-desc'}>Phyiscians portal</div>
                </div>
            </div>
        </div>
    );
};

export default Authentication;