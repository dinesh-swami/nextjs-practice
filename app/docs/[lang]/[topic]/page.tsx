import React from 'react'

const page = async({params}:{params: Promise <{lang:string, topic:string}>}) => {
    const {lang,topic} = await params
  return (
    <div>
      <h1> You Study for {lang} And Today class for {topic}</h1>
    </div>
  )
}

export default page
