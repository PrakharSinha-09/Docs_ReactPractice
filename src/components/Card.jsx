import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { motion } from "framer-motion"
import { IoIosCloseCircleOutline } from "react-icons/io";
function Card({data,reference}) {
  return (
    <motion.div 
    drag 
    dragConstraints={reference} 
    whileDrag={{scale:1.2}} 
    dragTransition={{bounceStiffness:600, bounceDamping:10}}
    className='relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden ml-5'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>

        <div className='footer absolute bottom-0 w-full left-0 '>
            <div className='flex items-center justify-between px-8 py-3 mb-5'>
                <h5>{data.fileSize}</h5>

                {!!data.close ? (
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        <IoIosCloseCircleOutline size="1.3rem" color='#fff' />
                    </span>
                ):(
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        <MdDownloadForOffline size="1.3rem" color='#fff' />
                    </span>
                )}
                
            </div>
                
            {
                data.tag.isOpen ? (
                    <div className='tag w-full py-4 bg-green-600 flex justify-center'>
                        <h3 className='text-md font-semibold'>Download Now!</h3>
                    </div>
                ):(
                    null
                )
            }
            
        </div>
        
    </motion.div> 
  )
}

export default Card