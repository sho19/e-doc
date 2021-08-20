import React from 'react';
import { LogoIcon, HeartConditionIcon, RespiratoryIllnessIcon, KidneyDiseaseIcon, LiverDiseaseIcon } from '../Svg/index';
import "./landingPage.css"

const landingPage = (props) => {

    const healthIcons = [
        { icon: HeartConditionIcon, alt: 'HeartConditionIcon', helpTextHeader: 'Heart Condition', helpTextDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed' },
        { icon: RespiratoryIllnessIcon, alt: 'RespiratoryIllnessIcon', helpTextHeader: 'Respiratory Illness', helpTextDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed' },
        { icon: KidneyDiseaseIcon, alt: 'KidneyDiseaseIcon', helpTextHeader: 'Kidney Disease', helpTextDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed' },
        { icon: LiverDiseaseIcon, alt: 'LiverDiseaseIcon', helpTextHeader: 'Liver Disease', helpTextDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed' }
    ]

    const drawCircles = () => {
        let circles = []
        for (let i = 0; i < 4; i++) {
            circles.push(<div className={`inner-circle-${i + 1}`}></div>)
        }
        return circles
    }

    return (
        <div>
            <div className={'logoSection'}>
                <img src={LogoIcon} alt={"logo"} />
                <div className={'landingPage-headerContainer'}>
                    <div className={'landingPage-header-desc'}>Phyiscians portal</div>
                    <div className={'landingPage-header'}>EDoc</div>
                </div>
            </div>

            <div className={'eDoc-help-container'}>
                <div className={'inner-circle'}>
                    {drawCircles()}
                </div>

                <div className={'eDoc-help-contains'}>
                    {healthIcons.map((item, index) => {
                        return (
                            <div className={`eDoc-help-child-${index + 1}`}>

                                <div className={'eDoc-help-icon'}>
                                    <img src={item.icon} alt={item.alt} />
                                </div>
                                <div className={'eDoc-help-textbox'}>
                                    <div className={`eDoc-help-textbox-number-${index + 1}`}>{index + 1}</div>
                                    <div className={'eDoc-help-textbox-content-wrapper'}>
                                        <div className={'eDoc-help-header'}>{item.helpTextHeader}</div>
                                        <div className={'eDoc-help-desc'}>{item.helpTextDesc}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={'landing-page-disclaimer'}>You are about to reclaim control of your physician identity & credentials. </div>
        </div>
    );
};

export default landingPage;