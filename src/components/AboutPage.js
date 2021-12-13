import React from "react";
import './AboutPage.css';

class AboutPage extends React.Component{

    render(){
        return (
            <div>
                <h1>React YouTube Project</h1>
                <div id="projectDecription">A React application that lets you search for YouTube videos, then choose a video from a list to watch.</div>
                <br />
                <br />
                <h2>About Us</h2>
                <div id="developersInfo">
                    <div className="individualInfo">
                        <h3>Larisa Shapkina</h3>
                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQH2wz_c8dDLlw/profile-displayphoto-shrink_800_800/0/1628526451668?e=1645056000&v=beta&t=tRnkAVs7FwA9LygINVXe47SJzFkSBJAbgg0LrC__NlI" alt="Larisa" />
                        <p>I am currently on my way to become a full stack developer. It is not always easy but the feeling of achieving ambitious goals are priceless.
                            Responsibility, perseverance, the ability to communicate with people from different fields to effectively solve the assigned tasks are my core strengths. 
                            My goal is to confidently take the position of a professional developer and be an expert in the field.</p>
                        <a href="https://github.com/larisashapkina">Larisa's GitHub</a>
                    </div>
                    
                    <div className="individualInfo">
                        <h3>Lili Huang</h3>
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHvAWaxnbrTog/profile-displayphoto-shrink_800_800/0/1628525955407?e=1645056000&v=beta&t=aQKBmVwERlM1CHvcO33qAxWws3wDVpUJ_Pclf5Z1e1s" alt="Lili" />
                        <p> I joined an intensive 12 - month software engineering fellowship called Pursuit with a 9% acceptance rate. I would like to became a professional, creative and helpful full stack software developer. I would like to be the one who could support my family, community or even those people who need help. I think tech the perfect tool to do so. With determination and perspiration, I would achieve my goal in the future.</p>
                        <a href="https://github.com/LILYHUANGPURSUIT">Lili's GitHub</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage;