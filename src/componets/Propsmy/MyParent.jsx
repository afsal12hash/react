import React from 'react'
import MyChild from './MyChild';
export default function MyParent() {

    const webDeveloperTools = [
        "Visual Studio Code",
        "Sublime Text",
        "Atom",
        "Brackets",
        "WebStorm",
        "Figma",
        "Adobe XD",
        "Chrome DevTools",
        "Postman",
        "Git",
        "GitHub",
        "GitLab",
        "Node.js",
        "React",
        "Vue.js",
        "Angular",
        "Bootstrap",
        "Tailwind CSS",
        "SASS",
        "Webpack",
        "Gulp",
        "npm",
        "Yarn",
        "Docker",
        "Vagrant",
        "PHP",
        "MySQL",
        "MongoDB",
        "Express.js",
        "Django",
        "Ruby on Rails",
        "Laravel",
        "GraphQL",
        "TypeScript",
        "Jest",
        "Mocha",
        "ESLint",
        "Prettier"
      ];
      return (
    <div>


        <h3>MyPareny</h3>

        <ol>
            {
              webDeveloperTools.map((item,index)=>{
                return(
                    <li key={index}>
                        {item}
                    </li>
                )
              })  
            }
        </ol>

  <MyChild mod={webDeveloperTools} />
        </div>
  )
}
