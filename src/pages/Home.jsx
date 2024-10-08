import { Link } from "react-router-dom"

export default function stat(){
    return(
        <>
        <div>
            <img src="" alt="" />
            <h2>About</h2>
            <p>My name is Cesar Castro and I am a fullstack Developer in progress. Currently I am attending an EDX Certification fullstack Class and have worked for the last several months on many different projects. The listed projects are my best work and include much larger scale projects that work with several other teammates. I have always been a computer "nerd" and cannot wait to continue to explore the tech industry. I am currently in the process of learning other languages that will prove to be very beneficial in the future.</p>
            <p>My current specialties are: </p>
            <ul>
                <Link to='https://www.mongodb.com/'><li>MongoDb</li></Link>
                <Link to='https://expressjs.com/'><li>Express</li></Link>                
                <Link to='https://react.dev/'> <li>React</li></Link>
                <Link to='https://nodejs.org/en'><li>Node.js</li></Link>            
            </ul>
            <p>My current languages:</p>
            <ul>
                <li>Javascipt(1 year)</li>
                <li>Python(4 months)</li>
                <li>C++(1 month)</li>
            </ul>
        </div>
        </>
    )
}