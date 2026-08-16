(function () {
  const projects = window.GOMGOM_PROJECTS || [];
  const currentProjects = projects.filter((project) => project.current);
  const grid = document.querySelector("[data-project-grid]");
  const featuredGrid = document.querySelector("[data-featured-projects]");
  const currentProjectList = document.querySelector("[data-current-projects]");
  const filters = Array.from(document.querySelectorAll("[data-filter]"));

  const initHeroGallery = () => {
    const gallery = document.querySelector("[data-hero-gallery]");
    if (!gallery) return;

    const slides = Array.from(gallery.querySelectorAll(".hero-gallery-slide"));
    const previousButton = gallery.querySelector("[data-hero-prev]");
    const nextButton = gallery.querySelector("[data-hero-next]");
    const caption = gallery.querySelector("[data-hero-caption]");
    const count = gallery.querySelector("[data-hero-count]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let activeIndex = 0;
    let rotationTimer = null;

    const loadSlide = (slide) => {
      if (!slide.getAttribute("src") && slide.dataset.src) {
        slide.setAttribute("src", slide.dataset.src);
      }
    };

    const showSlide = (index) => {
      activeIndex = (index + slides.length) % slides.length;
      const activeSlide = slides[activeIndex];
      loadSlide(activeSlide);

      slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === activeIndex;
        slide.classList.toggle("active", isActive);
        slide.setAttribute("aria-hidden", String(!isActive));
      });

      if (caption) caption.textContent = activeSlide.dataset.title || "대표 이미지";
      if (count) count.textContent = `${activeIndex + 1} / ${slides.length}`;

      window.setTimeout(() => {
        loadSlide(slides[(activeIndex + 1) % slides.length]);
      }, 700);
    };

    const stopRotation = () => {
      if (rotationTimer) window.clearInterval(rotationTimer);
      rotationTimer = null;
    };

    const startRotation = () => {
      stopRotation();
      if (reducedMotion.matches || document.hidden || gallery.contains(document.activeElement)) return;
      rotationTimer = window.setInterval(() => showSlide(activeIndex + 1), 5000);
    };

    const move = (offset) => {
      showSlide(activeIndex + offset);
      startRotation();
    };

    previousButton?.addEventListener("click", () => move(-1));
    nextButton?.addEventListener("click", () => move(1));
    gallery.addEventListener("mouseenter", stopRotation);
    gallery.addEventListener("mouseleave", startRotation);
    gallery.addEventListener("focusin", stopRotation);
    gallery.addEventListener("focusout", () => {
      window.setTimeout(() => {
        if (!gallery.contains(document.activeElement)) startRotation();
      }, 0);
    });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stopRotation();
      else startRotation();
    });
    reducedMotion.addEventListener?.("change", startRotation);

    showSlide(0);
    startRotation();
  };

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

  const mediaMarkup = (project) => {
    if (project.image) {
      return `
        <div class="project-media project-media-screen">
          <img src="./${project.image}" alt="${project.name} 대표 화면" loading="lazy">
        </div>
      `;
    }

    if (project.icon) {
      return `
        <div class="project-media project-media-icon">
          <img src="./${project.icon}" alt="${project.name} 아이콘" loading="lazy">
        </div>
      `;
    }

    return "";
  };

  const fallbackIconMarkup = (project) => (
    project.image || project.icon
      ? ""
      : `<span class="project-icon" aria-hidden="true">${project.mark}</span>`
  );

  const statusMarkup = (project) => (
    project.current
      ? '<span class="project-status"><span aria-hidden="true"></span>진행 중</span>'
      : ""
  );

  const linkMarkup = (project) => {
    const links = [
      { label: "Pages", href: localPageHref(project), kind: "primary" },
      { label: "Repo", href: project.repoUrl, kind: "secondary" },
      project.liveUrl
        ? { label: project.liveShortLabel || "Live", href: project.liveUrl, kind: "secondary" }
        : null,
      ...(project.storeLinks || []).map((item) => ({
        label: item.shortLabel,
        href: item.url,
        kind: "secondary"
      }))
    ].filter((item) => item && item.href);

    return links.map((item) => `
      <a class="project-link ${item.kind}" href="${item.href}" aria-label="${project.name} ${item.label}">${item.label}</a>
    `).join("");
  };

  const stackMarkup = (project) => project.stack.slice(0, 3).map((item) => `
    <span>${item}</span>
  `).join("");

  const projectCard = (project, variant = "") => {
    const hasMedia = Boolean(project.image || project.icon);

    return `
    <article class="portfolio-card ${variant} ${hasMedia ? "has-media" : "no-media"}">
      ${mediaMarkup(project)}
      <div class="portfolio-card-top ${hasMedia ? "has-media" : ""}">
        ${fallbackIconMarkup(project)}
        <div class="project-card-meta">
          ${statusMarkup(project)}
          <span class="project-type">${categoryLabels[project.category] || project.type}</span>
        </div>
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
  };

  const renderGrid = (items) => {
    if (!grid) return;
    grid.innerHTML = items.map((project) => projectCard(project)).join("");
  };

  const renderFeatured = () => {
    if (!featuredGrid) return;
    featuredGrid.innerHTML = currentProjects.map((project, index) => (
      projectCard(project, index === 0 ? "featured-card" : "")
    )).join("");
  };

  const renderCurrentProjects = () => {
    if (!currentProjectList) return;
    currentProjectList.innerHTML = currentProjects.map((project) => {
      const visual = project.icon || project.image;
      return `
        <a class="current-project" href="${localPageHref(project)}" aria-label="${project.name} 프로젝트 보기">
          <span class="current-project-visual ${project.image ? "is-screen" : ""}" aria-hidden="true">
            ${visual ? `<img src="./${visual}" alt="" loading="lazy" decoding="async">` : project.mark}
          </span>
          <span class="current-project-copy">
            <strong>${project.name}</strong>
            <small>${project.type}</small>
          </span>
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6 14 14 6m-6 0h6v6"/></svg>
        </a>
      `;
    }).join("");
  };

  const render = (category) => {
    renderGrid(byCategory(category));
  };

  const setCount = (selector, value) => {
    const target = document.querySelector(selector);
    if (target) target.textContent = String(value);
  };

  initHeroGallery();
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
  renderCurrentProjects();
  render("all");
})();
