import React from 'react'
import ResumeComponent from './ResumeComponent'

const SchoolComponent = () => {

    const schoolList = [
        {
          "id": 1,
          "date": "Aug 2020 - May 2022",
          "location": "EC Utbildning",
          "title": "Frontend Developer",
          "description": "Lorem Ipsum"
        },
        {
          "id": 2,
          "date": "Aug 2013 - May 2015",
          "location": "Storuman Läroverk",
          "title": "Vård och Omsorg",
          "description": "Lära sig ta hon om folk och sånt!"
        },
        {
          "id": 3,
          "date": "Aug 2010 - Jun 2013",
          "location": "IT-gymnasiet",
          "title": "Naturvetenskap och IT",
          "description": "Massa datorer i gymnasiet och sådant där!"
        },
      ]
      

  return (
    <div>
        <ResumeComponent resumeList={schoolList} heading="Education" key={schoolList.id}/>
    </div>
  )
}

export default SchoolComponent