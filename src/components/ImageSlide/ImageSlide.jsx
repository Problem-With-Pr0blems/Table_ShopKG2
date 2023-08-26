import { Box } from "@mui/material"
import { useEffect, useState } from "react"

const ImageSlide = () => {

  const [image,setImage] =useState(0)
  const [state,setState] = useState([])
  const fetchData = async()=> {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=5')
    const data = await response.json()
    setState(data)
  }

 useEffect(()=>{
  fetchData()
 },[])

  return (
    <Box sx={{
      width: 307,
      '& .img_slide_main':{
        aspectRatio: '23.615/19',
        width: '100%'
      }
    }}>
      <img key={image} className="img_slide_main" src={state[image]?.url} alt="" />
      <Box sx={{
        display: 'flex',
        gap: 0.75,
        '& img':{
          width: 57,
          height: 56,
          borderRadius: '5px',
          boxShadow: '0px 0px 5px 0px rgba(183, 183, 183, 0.25)',
          cursor: 'pointer',
          object: 'cover',
        }
      }}>
        {
          state.map((item,i)=>(
            <img 
            key={item.url} 
            onClick={()=>setImage(i)}
             style={{border: image === i ? '1px solid #FF2E00': ''}} 
             src={item.url}
             />
          ))
        }
      </Box>
    </Box>
  )
}

export default ImageSlide