import "../CSS/App.css";
import FeaturedProject from "./FeaturedProject.tsx";

function App() {
  return (
    <>
      <h1>Josh Daniel's Portfolio</h1>
      <FeaturedProject
        projectName="Portfolio Website"
        projectDescription="This is my portfolio website created using React and TypeScript. This website is self hosted using cloudflare. This website is used as a means to demonstrate my programming skills and to showcase my projects."
        projectImage="https://www.pbs.org/wgbh/nova/media/images/JWST_hero.width-2000.jpg"
        projectLink="https://github.com/CodingComp/portfolio-website"
      />
    </>
  );
}

export default App;
