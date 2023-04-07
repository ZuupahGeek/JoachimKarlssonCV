import React from 'react'
import ResumeComponent from './ResumeComponent'

const SchoolComponent = () => {

    const schoolList = [
        {
          "id": 1,
          "date": "Aug 2020 - May 2022",
          "location": "EC Utbildning",
          "title": "Frontend Developer",
          "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus commodi voluptate nulla minima nesciunt corrupti velit explicabo, dolore blanditiis esse voluptatem? Repellendus in non dignissimos libero, officiis velit, commodi quas a necessitatibus eos exercitationem placeat dolorem optio ea laudantium quae sed nostrum. Tenetur sunt nemo maiores non sapiente deleniti ad inventore earum iure iusto, ea voluptates. Sit doloribus culpa aliquam cumque quam! Corrupti cum eius delectus asperiores dolore deleniti tempora iste architecto. Voluptatum nisi, dolorem, aspernatur vel nemo eligendi quos, ab at illum voluptates tenetur consequatur eos harum veritatis corporis totam placeat debitis ea ducimus! Incidunt facilis sequi fugiat aliquid."
        },
        {
          "id": 2,
          "date": "Aug 2013 - May 2015",
          "location": "Storuman Läroverk",
          "title": "Vård och Omsorg",
          "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus commodi voluptate nulla minima nesciunt corrupti velit explicabo, dolore blanditiis esse voluptatem? Repellendus in non dignissimos libero, officiis velit, commodi quas a necessitatibus eos exercitationem placeat dolorem optio ea laudantium quae sed nostrum. Tenetur sunt nemo maiores non sapiente deleniti ad inventore earum iure iusto, ea voluptates. Sit doloribus culpa aliquam cumque quam! Corrupti cum eius delectus asperiores dolore deleniti tempora iste architecto. Voluptatum nisi, dolorem, aspernatur vel nemo eligendi quos, ab at illum voluptates tenetur consequatur eos harum veritatis corporis totam placeat debitis ea ducimus! Incidunt facilis sequi fugiat aliquid."
        },
        {
          "id": 3,
          "date": "Aug 2010 - Jun 2013",
          "location": "IT-gymnasiet",
          "title": "Naturvetenskap och IT",
          "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus commodi voluptate nulla minima nesciunt corrupti velit explicabo, dolore blanditiis esse voluptatem? Repellendus in non dignissimos libero, officiis velit, commodi quas a necessitatibus eos exercitationem placeat dolorem optio ea laudantium quae sed nostrum. Tenetur sunt nemo maiores non sapiente deleniti ad inventore earum iure iusto, ea voluptates. Sit doloribus culpa aliquam cumque quam! Corrupti cum eius delectus asperiores dolore deleniti tempora iste architecto. Voluptatum nisi, dolorem, aspernatur vel nemo eligendi quos, ab at illum voluptates tenetur consequatur eos harum veritatis corporis totam placeat debitis ea ducimus! Incidunt facilis sequi fugiat aliquid."
        },
      ]
      

  return (
    <div>
        <ResumeComponent resumeList={schoolList} heading="Education" key={schoolList.id}/>
    </div>
  )
}

export default SchoolComponent