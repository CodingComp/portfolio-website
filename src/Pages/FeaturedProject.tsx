import '../CSS/FeaturedProject.css'

function FeaturedProject() {
  return (
    <>
      <div className='featuredProject'>
        <div className='infoPanel'>
          <h2>Project Name</h2>
          <p>Information about the project.</p>
          <a href='https://github.com/CodingComp' target="_blank" className='githubLink'>GitHub</a>
        </div>
        <div className='imagePanel'>
          <img src='https://via.placeholder.com/150' alt='Project Image' className='projectImage'/>
        </div>
      </div>
    </>
  )
}

export default FeaturedProject
