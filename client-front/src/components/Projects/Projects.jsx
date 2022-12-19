import React from 'react'
import './Projects.styles.scss'
import Project from '../Project/Project'

export default function Projects() {
  return (
    <main className='project'>
      <div className='projects__project--container'>
        <Project /> {/* map this component */}
      </div>
    </main>
  )
}
