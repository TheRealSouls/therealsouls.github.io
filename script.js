window.onload = () => {

    const grid = document.getElementById("photo-gallery");
    if (grid) {
        new Masonry(grid, {
            itemSelector: 'img',
            fitWidth: true
        })
    }

  /* Typewriter animation */
  let text = "hi, i'm matas roda.";

  if (window.location.href.includes("contact")) {
    text = "contact me here.";
  }

  const speed = 100;
  const pause = 2500;
  const eraseSpeed = 50;

  const textSpan = document.querySelector(".typewriter");
  let i = 0;
  let isDeleting = false;

  const typeWriter = () => {
    if (!textSpan) return;

    if (!isDeleting) {
      textSpan.textContent += text.charAt(i);
      i++;
      if (i < text.length) {
        setTimeout(typeWriter, speed);
      } else {
        setTimeout(() => {
          isDeleting = true;
          typeWriter();
        }, pause);
      }
    } else {
      textSpan.textContent = text.substring(0, i - 1);
      i--;
      if (i > 0) {
        setTimeout(typeWriter, eraseSpeed);
      } else {
        isDeleting = false;
        setTimeout(typeWriter, speed);
      }
    }
  };

  typeWriter();
};

const projectsDiv = document.getElementById("projects");
  const dropdown = document.querySelector(".dropdown-menu");

  const projects = [
    {
      icon: '<i class="fa-solid fa-chart-simple fa-3x"></i>',
      title: "Statistics Calculator",
      desc: "One of my first projects. Calculates everything from mean to variance to interquartile range.",
      tags: [
        '<span class="tag html">HTML</span>',
        '<span class="tag css">CSS</span>',
        '<span class="tag js">JavaScript</span>'
      ],
      src: "https://github.com/TheRealSouls/statistics_calculator",
      live: "https://statistics-calculator.surge.sh/"
    },
    {
      icon: '<i class="fa-solid fa-circle-check fa-3x"></i>',
      title: "To-Do List",
      desc: `Uses JavaScript's localStorage API to save your tasks when you refresh the website. Functional and has dark mode. <span class=\"brackets\">(so your eyes don't burn!)</span>`,
      tags: [
        '<span class="tag html">HTML</span>',
        '<span class="tag css">CSS</span>',
        '<span class="tag js">JavaScript</span>'
      ],
      src: "https://github.com/TheRealSouls/statistics_calculator",
      live: "https://todo-list-task-app.surge.sh/"
    }
  ];

  if (projectsDiv) {
    projectsDiv.innerHTML = projects.map(project => `
      <div class="project">
        ${project.icon}
        <h2>${project.title}</h2>
        <p>${project.desc}</p>
        ${project.tags.join('')}
        <div id="buttons">
          <a href="${project.src}" class="source-code" target="_blank" rel="noopener noreferrer">Source Code</a>
          <a href="${project.live}" class="source-code" target="_blank" rel="noopener noreferrer">View Live</a>
        </div>
      </div>
    `).join('');
  }

  if (dropdown) {
    dropdown.innerHTML = projects.map(project => `
      <li>
        <a class="dropdown-item" href="${project.live}">${project.title}</a>
      </li>
    `).join('');
  }