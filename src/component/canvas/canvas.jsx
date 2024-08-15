import React, { useEffect, useRef } from 'react'
import Victor from 'victor'
import {attractor, mover} from "./attract.js"
import '../canvas/canvas.css'
const WIDTH = 600
export const Canvas = () => {
    let ref = useRef(null)
    useEffect(()=>{
      const canvas = ref.current
      const ctx  = canvas.getContext("2d")    
      let animatedframe
      function render(){
        
        for(let i = 0 ; i < 9 ;i++){
          mover[i].draw(ctx)
          mover[i].Update()
          attractor.attract(mover[i].pos , mover[i].m , i)

        }

        animatedframe = window.requestAnimationFrame(render)
      }
      render()
      return ()=>{
          window.cancelAnimationFrame(animatedframe)
      }
    },[mover[0].draw])
  return (
    <canvas width={WIDTH} height={WIDTH}   ref={ref}></canvas>
  )
}
