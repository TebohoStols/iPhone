import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  return (
    //Wrap the the Loader text in Html so that it can be clearly distinguished from the rest of the code  where its called and custommized
    <Html>
        <div className='absolute top-0 w-full h-full flex justify-center items-center'>
            <div className='w-[10vw] h-[10vw] rounded-full' >
                Loading...
            </div>
        </div>
    </Html>
  )
}

export default Loader
