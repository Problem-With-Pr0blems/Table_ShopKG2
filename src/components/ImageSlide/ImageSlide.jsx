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

  const handleChangeCurrentImage = (e)=>{
    if(e.key ==='ArrowRight') {
      setImage(prev=>{
        console.log(prev)
       return  (state.length-1) > prev ? prev + 1 : 0
      })
    }else if(e.key === 'ArrowLeft' ) {
      setImage(prev=>{
        return    prev > 0 ? prev - 1 : state.length -1
       })
    }}

  return (
    <button style={{all: 'unset',height:'fit-content'}} autoFocus onKeyDown={handleChangeCurrentImage}>
        <Box  sx={{
        width: 307,
        '@media(max-width: 410px)':{
          width: '100%',
        },
        '& .img_slide_main':{
          aspectRatio: '23.615/19',
          width: '100%'
        },
        '& input': {
          position: 'absolute',
          top: 0,
          border: 'none',
          'caretColor': 'transparent'
        }
      }}
      >
        <img  key={image} className="img_slide_main" src={state[image]?.url} alt="" />
        <Box sx={{
          display: 'flex',
          gap: 0.75,
          '@media(max-width: 360px)': {
            overflowX: 'scroll'
          },
          '& img':{
            width: 57,
            height: 56,
            borderRadius: '5px',
            boxShadow: '0px 0px 5px 0px rgba(183, 183, 183, 0.25)',
            cursor: 'pointer',
            objectFit: 'cover',
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
    </button>
  )
}

export default ImageSlide