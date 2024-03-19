import React from 'react'

const Card = ({title, publishDate, description, image}) => {
  return (
    <a href='' className='flex flex-col gap-5 shadow-lg rounded-md'>
        {/* image */}
        <div className='flex-1'>
          <img className='w-full' src={image} alt={`${title}-title-image`} />
        </div>

        {/* content */}
        <div className='flex-1'>
          <h2>{title}</h2>
          <h3>{publishDate}</h3>
          <p>{description}</p>
        </div>

        {/* buttons */}
        <div className='flex-1'>
          <button type='button'>Read the article 🫲</button>
        </div>

    </a>
  )
}

export default Card