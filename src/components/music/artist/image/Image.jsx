import React from 'react'

const noImage = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fmusic&psig=AOvVaw17ftIwiM6eUxP-bXqzAr_v&ust=1703334938099000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiBtqaHo4MDFQAAAAAdAAAAABAD'
const image = (props) => {

  return (
    <img src={props.data ? props.data.url : noImage} alt="" className='rounded' style={{height: '300px'}}/>
  )
}

export default image