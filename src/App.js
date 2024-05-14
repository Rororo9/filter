import React, { useState } from "react";
import Toolbar from "./components/Toolbar";
import ProjectList from "./components/ProjectList";
import projects from "./other/listOfProjects";

const App = () => {
  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  const [selected, setSelected] = useState("All");
  const [projectsOption, setProjects] = useState(projects);

  const onSelectedFilter = (e) => {
    setSelected(e);

    let selectedClickNode = document.querySelectorAll(".item-filters");

    selectedClickNode.forEach((node) => {
      if (node.innerText === e) {
        if (node !== null) {
          node.classList.add("active-filter");
        }
      } else {
        node.classList.remove("active-filter");
      }
    });

    if (e === "All") {
      setProjects(projects);
    } else {
      let same = projects.filter((filter) => {
        return filter.category === e;
      });
      setProjects(same);
    }
  };

  return (
      <div className="container">
        <Toolbar
            filters={filters}
            selected={selected}
            onSelectFilter={onSelectedFilter}
        />
        <ProjectList projectsOption={projectsOption} />
      </div>
  );
}

export default App;
