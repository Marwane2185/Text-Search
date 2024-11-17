import "./SearchComponent.css";
import { useState, useEffect } from "react";

function SearchComponent() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    setArticles([
      {
        title: "I Opened My Laptop and Saw this",
        date: "Oct 21, 2024",
        text:
          "I m a software developer and the chances of someone like me cracking open my laptop is so slim." +
          "Lately, I have been experiencing some seriously frustrating issues: random shutdowns, sluggish performance, " +
          "and just overall slow behaviour from my one-year-old laptop. With 16GB of RAM and a decent processor, " +
          "this shouldn t have happened. I was frustrated, so I decided to investigate. A quick search online gave me " +
          "the usual advice like, Just buy a new one or Your PC is basically toast.",
      },
      {
        title: "The Evolution of Mobile Cameras",
        date: "Nov 5, 2024",
        text:
          "Mobile cellphone cameras have skilled wonderful advancements in the ultimate decade, remodeling from simple " +
          "equipment into state-of-the-art photography gadgets. Today, those cameras provide first-rate photos and films that can " +
          "compete with traditional cameras. Improved Sensor Technology One of the major drivers of this change is the improvement " +
          "of large sensors, which permit smartphones to seize more light and convey clearer pix, specifically in low-mild conditions." +
          "Modern smartphones frequently come prepared with a couple of lenses, such as huge-angle, telephoto, and ultra-huge, " +
          "imparting users extra versatile shooting options.",
      },
      {
        title: "The Ultimate Coding Projects to Get Hired in 2025",
        date: "Aug 11, 2024",
        text:
          "You want the job. But not just any job the kind where your portfolio makes companies reach out to you. " +
          "These aren t projects anyone can whip up in a weekend. No, these are high-impact, interview-securing, top-1% projects. " +
          "Projects that make the difference. So what are they? Think dashboards that do more than display data they predict it." +
          "Recommendation engines that speak the language of revenue, not just code. Automated systems that turn manual into seamless. " +
          "Each project isn t merely another line on a resume. It s a strategy, an advantage. These aren t just skills. They are assets. " +
          "Want to know what it takes? Watch this.",
      },
      {
        title: "Agents Are Coming Back From The Dead",
        date: "July 10, 2024",
        text:
          "I worked on AI full-time for over 30 years, at least 10 of them in an area called Multiagent Systems, " +
          " Intelligent Agents, or simply Agents, depending on who you ask. In this post, I will discuss how Agent technology " +
          " came to be, what its promise was, why it failed to deliver results (which caused a loss of interest in the area), and " +
          "finally, how the idea of agents is making a comeback today. These topics should interest anybody thinking about developing " +
          "agents or just considering using them.",
      },
      {
        title: "What is a quantum computer and how does it work",
        date: "June 25, 2024",
        text:
          "There are currently only six operational quantum computers in Britain, but that doesn t " +
          " mean that quantum computing is a fringe industry. In fact, according some estimates, the market " +
          " for quantum computing will reach 55 billion by 2035 and, for the financial, chemical, life science, " +
          "and transport sectors alone, those computers will be worth some 1.5 trillion in economic impacts. " +
          "At the 140million NQCC, built at Harwell in Oxfordshire, UK, and operated by the Science and Technology " +
          "Facilities Council (STFC), work is underway to construct 12 operational quantum computers. " +
          "Eight will be built by private business and four by government scientists. The hope is that quantum computing " +
          "will represent the next big technological revolution and it will be used to tackle some of humanitys most  " +
          "pressing existential problems.",
      },
      {
        title:
          "Internal Working of HashMap in Java and Performance Improvement in Java 8",
        date: "June 2, 2024",
        text:
          "In Java, the HashMap class is a component of the Java Collections Framework and resides " +
          "within the java.util package. It serves as the standard implementation of the Map interface.  " +
          "A HashMap organizes data in the form of key and a value pair where each key is mapped to it s corresponding " +
          "value. Each pair consists of one object acting as a key and another object serving as its value. " +
          "When attempting to insert a duplicate key into a HashMap, the existing value mapped with that key is overwritten. " +
          "HashMap assigns a unique identifier to any object after applying a specific formula, offering an average time " +
          "complexity of O(1) for both insertion and retrieval operations.",
      },
      {
        title: "DSLR Camera Photography: A Gateway to Captivating Imagery",
        date: "July 17, 2024",
        text:
          "One of the important benefits of DSLR cameras is their potential to provide complete guide management  " +
          "over settings like aperture, shutter speed, and ISO. This flexibility lets in photographers to experiment " +
          "with lighting, intensity of discipline, and motion, fostering creativity. Moreover, the interchangeable " +
          "lens machine we could choose between huge-perspective, macro, or telephoto lenses, relying on their needs." +
          "DSLRs are acknowledged for his or her superior picture. With larger sensors than smartphones and compact cameras, " +
          "they produce high-resolution images with rich elements and minimum noise, even in difficult lighting situations",
      },
    ]);
  }, []);

  const handleChange = (e) => {
    if (e.target.value != "")
      setFilteredArticles(
        articles.filter(
          (article) =>
            article.title.includes(e.target.value) ||
            article.text.includes(e.target.value),
        ),
      );
    else setFilteredArticles([]);
    setSearchTerm(e.target.value);
  };

  const highlightSearchTerm = (searchTerm, inpuText) => {
    if (!searchTerm) return inpuText;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    const textElements = inpuText.split(regex);
    return textElements.map((element, index) =>
      regex.test(element) ? (
        <span key={index} className="highlighted">
          {element}
        </span>
      ) : (
        element
      ),
    );
  };
  return (
    <div className="main-div">
      <h1 className="search-label"> Search </h1>
      <input
        type="text"
        className="input"
        onChange={(e) => handleChange(e)}
        placeholder="Search..."
      />
      {searchTerm != "" && filteredArticles.length == 0 && (
        <p> No post was found </p>
      )}
      {filteredArticles.length > 0 && (
        <p>
          {" "}
          <span className="found-posts-label">
            {" "}
            {filteredArticles.length}{" "}
            {filteredArticles.length > 1 ? " posts" : " post"}{" "}
          </span>{" "}
          {filteredArticles.length > 1 ? " were" : " was"} found{" "}
        </p>
      )}
      {filteredArticles.length > 0 &&
        filteredArticles.map((article, index) => {
          return (
            <div className="article-div" key={index}>
              <h3> {highlightSearchTerm(searchTerm, article.title)}</h3>
              <p> {article.date} </p>
              <p> {highlightSearchTerm(searchTerm, article.text)} </p>
            </div>
          );
        })}
    </div>
  );
}

export default SearchComponent;
