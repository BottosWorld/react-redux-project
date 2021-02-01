import React, {useRef, useEffect} from 'react'

const RenderCanvas = (props) => {

    const canvasRef = useRef(null)
    
    useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.fillStyle = '#000000'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    }, [])

    return <canvas ref={canvasRef} {...props}/>
}

//     return(
//         <div>
//             Testing canvas
//             {windowSize}
//         </div>
//     )
// }

export default RenderCanvas