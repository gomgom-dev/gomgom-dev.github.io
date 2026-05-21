(function () {
  const projects = window.GOMGOM_PROJECTS || [];
  const table = document.querySelector("[data-project-table]");
  const cards = document.querySelector("[data-project-cards]");
  const filters = Array.from(document.querySelectorAll("[data-filter]"));

  const byCategory = (category) => {
    if (category === "all") return projects;
    return projects.filter((project) => project.category === category);
  };

  const localPageHref = (project) => project.pagePath.replace("./", "");
  const iconMarkup = (project) => {
    if (project.icon) {
      return `<img class="app-icon" src="./${project.icon}" alt="" loading="lazy">`;
    }

    return `<span class="project-icon" aria-hidden="true">${project.mark}</span>`;
  };

  const renderTable = (items) => {
    if (!table) return;
    table.innerHTML = items.map((project) => `
      <tr>
        <td>
          <a class="project-cell" href="${localPageHref(project)}">
            ${iconMarkup(project)}
            <span class="project-copy">
              <strong>${project.name}</strong>
              <span>${project.summary}</span>
            </span>
          </a>
        </td>
        <td>${project.type}</td>
        <td>
          <div class="project-links-inline">
            <a class="table-link" href="${project.repoUrl}">${project.sourceRepo}</a>
            <a class="table-link" href="${localPageHref(project)}">Pages</a>
          </div>
        </td>
      </tr>
    `).join("");
  };

  const renderCards = (items) => {
    if (!cards) return;
    cards.innerHTML = items.map((project) => `
      <article class="mobile-project-card">
        <div class="mobile-card-heading">
          ${iconMarkup(project)}
          <h3>${project.name}</h3>
        </div>
        <p>${project.summary}</p>
        <div class="mobile-card-links">
          <a class="button primary" href="${localPageHref(project)}">Pages</a>
          <a class="button secondary" href="${project.repoUrl}">참조 레포</a>
        </div>
      </article>
    `).join("");
  };

  const render = (category) => {
    const items = byCategory(category);
    renderTable(items);
    renderCards(items);
  };

  document.querySelector("[data-project-count]").textContent = String(projects.length);
  document.querySelector("[data-app-count]").textContent = String(projects.filter((project) => project.category === "app" || project.category === "automation").length);
  document.querySelector("[data-site-count]").textContent = String(projects.filter((project) => project.category === "site" || project.category === "data").length);

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      render(button.dataset.filter);
    });
  });

  render("all");
})();
