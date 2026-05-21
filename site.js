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

  const renderTable = (items) => {
    if (!table) return;
    table.innerHTML = items.map((project) => `
      <tr>
        <td>
          <a class="project-cell" href="${localPageHref(project)}">
            <span class="project-icon" aria-hidden="true">${project.mark}</span>
            <span>
              <strong>${project.name}</strong>
              <span>${project.summary}</span>
            </span>
          </a>
        </td>
        <td><span class="status ${project.statusTone}">${project.status}</span></td>
        <td>${project.type}</td>
        <td><a class="table-link" href="${project.repoUrl}">${project.sourceRepo}</a></td>
        <td><a class="table-link" href="${localPageHref(project)}">/${project.slug}/</a></td>
      </tr>
    `).join("");
  };

  const renderCards = (items) => {
    if (!cards) return;
    cards.innerHTML = items.map((project) => `
      <article class="mobile-project-card">
        <h3>${project.name}</h3>
        <p>${project.summary}</p>
        <div class="mobile-card-links">
          <a class="button primary" href="${localPageHref(project)}">Pages</a>
          <a class="button secondary" href="${project.repoUrl}">Repo</a>
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
