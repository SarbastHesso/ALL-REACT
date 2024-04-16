const projects = document.querySelector("#projects");

const projectsList = [
  {
    title: "Todo-List",
    link: "https://bucolic-heliotrope-678db2.netlify.app/",
    github: "https://github.com/SarbastHesso/React-Todo-List/",
  },
  {
    title: "Sveriges-Radio",
    link: "https://hilarious-dasik-a688a2.netlify.app/",
    github: "https://github.com/SarbastHesso/React-Sveriges-Radio/",
  },
  {
    title: "Movie-Cards",
    link: "https://superb-phoenix-57baa8.netlify.app/",
    github: "https://github.com/SarbastHesso/React-Movie-Cards/",
  },
];

projectsList.forEach((project, index )=> {
    let html = `
        <li class="project" id=${index}>
            <a class="web-link" href="${project.link}" >
                <span class="material-symbols-outlined">captive_portal</span>
                <h4>${project.title}</h4>
            </a>
            <a class="github-link" href=${project.github}>
              <i class="fa-brands fa-github"></i>
            </a>
        </li>
    `;
    projects.innerHTML += html;
})
