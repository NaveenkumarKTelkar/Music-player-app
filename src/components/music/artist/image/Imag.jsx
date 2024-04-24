import React from 'react'

const noImage = 'https://commons.wikimedia.org/wiki/File:No-Image-Placeholder.svg'
const Image = (props) => {

  return (
    <img src={props.data ? props.data.url : noImage} alt="" className='rounded' style={{height: '300px'}}/>
  )
}

export default Image