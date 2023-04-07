import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectComponent.css'

const ProjectComponent = () => {

    const projectList = [
        {
          "id": 1,
          "websiteUrl": "https://smak-curating.netlify.app/",
          "status": "Under construction",
          "githubUrl": "https://github.com/ZuupahGeek/smak-curating",
          "title": "S.Mak Curating",
          "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus commodi voluptate nulla minima nesciunt corrupti velit explicabo, dolore blanditiis esse voluptatem? Repellendus in non dignissimos libero, officiis velit, commodi quas a necessitatibus eos exercitationem placeat dolorem optio ea laudantium quae sed nostrum. Tenetur sunt nemo maiores non sapiente deleniti ad inventore earum iure iusto, ea voluptates. Sit doloribus culpa aliquam cumque quam! Corrupti cum eius delectus asperiores dolore deleniti tempora iste architecto. Voluptatum nisi, dolorem, aspernatur vel nemo eligendi quos, ab at illum voluptates tenetur consequatur eos harum veritatis corporis totam placeat debitis ea ducimus! Incidunt facilis sequi fugiat aliquid."
        },
        {
          "id": 2,
          "websiteUrl": "https://kristurnen.se/",
          "status": "Live",
          "githubUrl": "https://github.com/ZuupahGeek/Kristurnen",
          "title": "KRIS Turnén",
          "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus commodi voluptate nulla minima nesciunt corrupti velit explicabo, dolore blanditiis esse voluptatem? Repellendus in non dignissimos libero, officiis velit, commodi quas a necessitatibus eos exercitationem placeat dolorem optio ea laudantium quae sed nostrum. Tenetur sunt nemo maiores non sapiente deleniti ad inventore earum iure iusto, ea voluptates. Sit doloribus culpa aliquam cumque quam! Corrupti cum eius delectus asperiores dolore deleniti tempora iste architecto. Voluptatum nisi, dolorem, aspernatur vel nemo eligendi quos, ab at illum voluptates tenetur consequatur eos harum veritatis corporis totam placeat debitis ea ducimus! Incidunt facilis sequi fugiat aliquid."
        },
        
      ]

      const projectListMap = projectList.map(
        (element, id) => {
          return (
            <div className='project-card' key={id}>
                <div className='project-content' >
                    <h2>{element.title}</h2>
                    <h5>Status: {element.status}</h5>
                    <div className='project-links'>
                        <Link to={element.websiteUrl} target="_blank"><i class="fa-brands fa-internet-explorer"></i> Visit the Website</Link>
                        <Link to={element.githubUrl} target="_blank"><i className="fa-brands fa-github"></i> Github Repository</Link>
                    </div>
                    
                    
                    <p>{element.description}</p>
                </div>
            </div>
                
          ) 
        }
      )


  return (
    <div>
        {projectListMap} 
    </div>
  )
}

export default ProjectComponent