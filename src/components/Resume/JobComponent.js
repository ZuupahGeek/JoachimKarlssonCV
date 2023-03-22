import React from 'react'
import ResumeComponent from './ResumeComponent'

const JobComponent = () => {

    const jobList = [
        {
          "id": 1,
          "date": "Jun 2022 - Today",
          "location": "Pia Relations",
          "title": "CRM Consultant",
          "description": "Lorem Ipsum"
        },
        {
          "id": 2,
          "date": "Aug 2013 - May 2015",
          "location": "Attendo",
          "title": "Undersköterska",
          "description": "Lära sig ta hon om folk och sånt!"
        },
        {
          "id": 3,
          "date": "Aug 2010 - Jun 2013",
          "location": "Vardaga",
          "title": "Undersköterska",
          "description": "ta hon om folk och sånt!"
        },
      ]

  return (
    <div>
        <ResumeComponent resumeList={jobList} heading="Professional Experience" key={jobList.id} />
    </div>
  )



}

export default JobComponent