import React from 'react';
import './SkillChild.css'

const SkillChild = ({ technology }) => {
    const { id, name, img, bg } = technology
    return (
        <div>
            <div className='containerSkill tooltip tooltip-primary' data-tip={name}>
                <img className={`${bg} image`} src={img} alt="" />
                {/* <h2>{name}</h2> */}
            </div>
        </div>
    );
};

export default SkillChild;