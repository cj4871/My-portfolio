import { useState } from 'react';
import Porfolio from './Portfolio';

const projects = [
    {
        title: "BookBuddies",
        desc: "Book Buddies is a book club application for users to be able to create their own book clubs, access existing book clubs, schedule book club meetings, and add books to the book club library. Users are able to interact with other book club members from anywhere.",
        imgUrl: ".",
        deployUrl: ""
    },
    {
        title: "",
        desc: "",
        imgUrl: "",
        deployUrl: ""
    },
    {
        title: "",
        desc: "",
        imgUrl: "",
        deployUrl: ""
    },
]

export default function PorfolioProjects() {
    const [allProjects, setAllProjects] = useState(projects);

    return (
        <div>
           {allProjects.map((project) => (
                <Porfolio data={project}/>
           ))}
        </div>
    )
}