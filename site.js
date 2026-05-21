(function () {
  const projects = window.GOMGOM_PROJECTS || [];
  const featuredProjects = ["geulttaogi", "koda", "porta", "opentax"];
  const grid = document.querySelector("[data-project-grid]");
  const featuredGrid = document.querySelector("[data-featured-projects]");
  const filters = Array.from(document.querySelectorAll("[data-filter]"));

  const categoryLabels = {
    app: "App",
    site: "Site",
    automation: "Automation",
    data: "Data"
  };

  const byCategory = (category) => {
    if (category === "all") return projects;
    return projects.filter((project) => project.category === category);
  };

  const localPageHref = (project) => project.pagePath.replace("./", "");

  const iconMarkup = (project) => {
    if (project.icon) {
      return `<img class="app-icon" src="./${project.icon}" alt="">`;
    }

    return `<span class="project-icon" aria-hidden="true">${project.mark}</span>`;
  };

  const linkMarkup = (project) => {
    const links = [
      { label: "Pages", href: localPageHref(project), kind: "primary" },
      { label: "Repo", href: project.repoUrl, kind: "secondary" },
      ...(project.storeLinks || []).map((item) => ({
        label: item.shortLabel,
        href: item.url,
        kind: "secondary"
      }))
    ];

    return links.map((item) => `
      <a class="project-link ${item.kind}" href="${item.href}">${item.label}</a>
    `).join("");
  };

  const stackMarkup = (project) => project.stack.slice(0, 3).map((item) => `
    <span>${item}</span>
  `).join("");

  const projectCard = (project, variant = "") => `
    <article class="portfolio-card ${variant}">
      <div class="portfolio-card-top">
        ${iconMarkup(project)}
        <span class="project-type">${categoryLabels[project.category] || project.type}</span>
      </div>
      <div>
        <h3>${project.name}</h3>
        <p>${project.summary}</p>
      </div>
      <div class="project-tags">
        ${stackMarkup(project)}
      </div>
      <div class="project-links-inline">
        ${linkMarkup(project)}
      </div>
    </article>
  `;

  const renderGrid = (items) => {
    if (!grid) return;
    grid.innerHTML = items.map((project) => projectCard(project)).join("");
  };

  const renderFeatured = () => {
    if (!featuredGrid) return;
    const items = featuredProjects
      .map((slug) => projects.find((project) => project.slug === slug))
      .filter(Boolean);
    featuredGrid.innerHTML = items.map((project, index) => (
      projectCard(project, index === 0 ? "featured-card" : "")
    )).join("");
  };

  const render = (category) => {
    renderGrid(byCategory(category));
  };

  const setCount = (selector, value) => {
    const target = document.querySelector(selector);
    if (target) target.textContent = String(value);
  };

  setCount("[data-project-count]", projects.length);
  setCount("[data-app-count]", projects.filter((project) => project.category === "app" || project.category === "automation").length);
  setCount("[data-site-count]", projects.filter((project) => project.category === "site" || project.category === "data").length);

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-pressed", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
      render(button.dataset.filter);
    });
  });

  filters.forEach((button) => {
    button.setAttribute("aria-pressed", button.classList.contains("active") ? "true" : "false");
  });

  renderFeatured();
  render("all");
})();
