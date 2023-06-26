import './styles/Outreach.css';
import React from "react";
import OutreachSection from './components/outreach/main.js';
import Temp from './images/members/temp.png';

function Outreach() {
    return (
        <div>
            <div id="outreach_background"></div>
            <p id="outreach_title">Outreach</p>
            <OutreachSection image={Temp} title="hiiii" description="ergriug jtriojv kfntrkfdlvj kngtrlfd vjkgnmtrl dfjvk ntgr ifdkvmnb tghru jfkvnmt dghjk fvmhj ntig kfmv thjbiy gkhn jytgb."></OutreachSection>
        </div> 
    );
}

export default Outreach;