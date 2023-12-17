import "../CSS/FeaturedProject.css";

type ProjectProps = {
  projectName: string;
  projectDescription: string;
  projectImage: string;
  projectLink: string;
};

function FeaturedProject(props: ProjectProps) {
  return (
    <>
      <div className="featuredProject">
        <div className="infoPanel">
          <h2>{props.projectName}</h2>
          <p>{props.projectDescription}</p>
          <a href={props.projectLink} target="_blank" className="githubLink">
            GitHub
          </a>
        </div>
        <div className="imagePanel">
          <img
            src={props.projectImage}
            alt="Project Image"
            className="projectImage"
          />
        </div>
      </div>
    </>
  );
}

export default FeaturedProject;
