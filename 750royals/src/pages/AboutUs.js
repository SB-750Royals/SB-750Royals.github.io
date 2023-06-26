import './styles/AboutUs.css';
import Bio from './components/bio/main.js';
import React from "react";
import temp from './images/members/temp.png';

function AboutUs() {
    return (
        <div>
            <p id="aboutus_title">Meet the team</p>
            <div id="aboutus_background"></div>
            <div id="aboutus_body">
                <Bio name="Esha Vigneshwaran" role="President" grade="Class of 2024" image={temp} r='100' g='200' b='100'></Bio>
                <Bio name="Vignesh Saravanakumar" role="Captain" grade="Class of 2024" image={temp} r='250' g='100' b='100'></Bio>
                <Bio name="Tejas Raghuram" role="Lead Programmer" grade="Class of 2024" image={temp} r='100' g='100' b='250'></Bio>
                <Bio name="Abhaya Avalur" role="Lead Notebook" grade="Class of 2024" image={temp} r='100' g='200' b='100'></Bio>
                <Bio name="Anika Thakur" role="Vice Captain" grade="Class of 2024" image={temp} r='250' g='100' b='100'></Bio>
                <Bio name="Rakshna Ravishankar" role="Lead Notebook" grade="Class of 2024" image={temp} r='100' g='100' b='250'></Bio>
                <Bio name="Vivek Banker" role="Lead CAD" grade="Class of 2024" image={temp} r='100' g='200' b='100'></Bio>
                <Bio name="Yegna Bodepudi" role="Builder" grade="Class of 2024" image={temp} r='250' g='100' b='100'></Bio>
                <Bio name="Vihaan Pardeshi" role="Programmer" grade="Class of 2024" image={temp}  r='100' g='100' b='250'></Bio>
                <Bio name="Recruit #1" role="Builder" grade="Class of 2024" image={temp} r='100' g='200' b='100'></Bio>
                <Bio name="Recruit #2" role="Programmer" grade="Class of 2024" image={temp} r='250' g='100' b='100'></Bio>
                <Bio name="Recruit #3" role="CAD" grade="Class of 2024" image={temp}  r='100' g='100' b='250'></Bio>
            </div>
        </div>
    );
}

export default AboutUs;