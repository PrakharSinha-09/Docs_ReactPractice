import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

    const ref=useRef(null)
    const data=[
        {
            desc:"Lorem da dasndf dfafdm df", 
            fileSize:"0.9mb", 
            close:true, 
            tag:{ isOpen: true, tagTitle: "Download Now", tagColor :"green" }
        },
        {
            desc:"Lorem da dasndf dfafdm df", 
            fileSize:"0.9mb", 
            close:true, 
            tag:{ isOpen: true, tagTitle: "Download Now", tagColor :"green" }
        },
        {
            desc:"Lorem da dasndf dfafdm df", 
            fileSize:"0.9mb", 
            close:true, 
            tag:{ isOpen: true, tagTitle: "Download Now", tagColor :"green" }
        },
        
    ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-15 flex-wrap p-4'>
        {/* <Card />
        <Card />
        <Card /> */}

        {data.map((item,index)=>(
            <Card key={index} data={item} reference={ref} />
        ))}
    </div>
  )
}

export default Foreground