(function () {
  const basePath = document.body.dataset.assetBase || "./";
  const projects = (window.GOMGOM_PROJECTS || []).filter((project) => project.current);
  const gallery = document.querySelector("[data-gallery]");
  const stage = document.querySelector("[data-gallery-stage]");
  const media = document.querySelector("[data-gallery-media]");
  const name = document.querySelector("[data-gallery-name]");
  const type = document.querySelector("[data-gallery-type]");
  const summary = document.querySelector("[data-gallery-summary]");
  const link = document.querySelector("[data-gallery-link]");
  const indexLabel = document.querySelector("[data-gallery-index]");
  const totalLabel = document.querySelector("[data-gallery-total]");
  let activeIndex = 0;
  let dragStart = null;

  const hrefFor = (project) => `${basePath}${project.pagePath.replace("./", "")}`;
  const visualFor = (project) => project.image || project.icon;

  const renderArchive = () => {
    const rail = document.querySelector("[data-archive-rail]");
    if (!rail) return;
    rail.innerHTML = projects.slice(0, 4).map((project, index) => `
      <a class="archive-card" href="${hrefFor(project)}">
        <small>0${index + 1} / ${project.type}</small>
        <h3>${project.name}</h3>
        <p>${project.summary}</p>
      </a>
    `).join("");
  };

  const updateCenter = (project) => {
    const visual = visualFor(project);
    media.classList.toggle("is-screen", Boolean(project.image));
    media.innerHTML = visual ? `<img src="${basePath}${visual}" alt="${project.name} 대표 이미지">` : "";
    name.textContent = project.name;
    type.textContent = project.type;
    summary.textContent = project.summary;
    link.href = hrefFor(project);
    indexLabel.textContent = String(activeIndex + 1).padStart(2, "0");
    totalLabel.textContent = String(projects.length).padStart(2, "0");
  };

  const renderGallery = () => {
    if (!stage || !projects.length) return;
    const step = 360 / projects.length;
    stage.querySelectorAll(".gallery-item").forEach((item, index) => {
      const relative = (index - activeIndex + projects.length) % projects.length;
      const signed = relative > projects.length / 2 ? relative - projects.length : relative;
      if (signed === 0) {
        item.style.setProperty("--x", "0px");
        item.style.setProperty("--y", "0px");
        item.style.setProperty("--scale", "1.02");
        item.style.setProperty("--opacity", "1");
        item.style.setProperty("--tilt", "0deg");
      } else {
        const angle = (signed * step - 90) * Math.PI / 180;
        const radiusX = window.innerWidth <= 800 ? 132 : 300;
        const radiusY = window.innerWidth <= 800 ? 175 : 230;
        item.style.setProperty("--x", `${Math.cos(angle) * radiusX}px`);
        item.style.setProperty("--y", `${Math.sin(angle) * radiusY}px`);
        item.style.setProperty("--scale", Math.abs(signed) === 1 ? ".66" : ".52");
        item.style.setProperty("--opacity", Math.abs(signed) > 2 ? ".26" : ".7");
        item.style.setProperty("--tilt", `${signed * 5}deg`);
      }
      item.classList.toggle("active", signed === 0);
      item.setAttribute("aria-label", `${projects[index].name} 선택`);
      item.setAttribute("aria-current", String(signed === 0));
    });
    updateCenter(projects[activeIndex]);
  };

  const move = (offset) => {
    activeIndex = (activeIndex + offset + projects.length) % projects.length;
    renderGallery();
  };

  const buildGallery = () => {
    if (!stage) return;
    stage.innerHTML = projects.map((project, index) => {
      const visual = visualFor(project);
      return `<button class="gallery-item" type="button" data-gallery-item="${index}">${visual ? `<img src="${basePath}${visual}" alt="${project.name} 대표 이미지" loading="lazy">` : project.mark}</button>`;
    }).join("");
    stage.querySelectorAll("[data-gallery-item]").forEach((item) => item.addEventListener("click", () => {
      activeIndex = Number(item.dataset.galleryItem);
      renderGallery();
    }));
    renderGallery();
  };

  const updateLimelight = (button) => {
    const nav = document.querySelector(".limelight-nav");
    const indicator = document.querySelector(".limelight-indicator");
    if (!nav || !indicator || !button) return;
    const navRect = nav.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    indicator.style.width = `${buttonRect.width}px`;
    indicator.style.transform = `translateX(${buttonRect.left - navRect.left}px)`;
  };

  const setNav = (target) => {
    const button = document.querySelector(`.limelight-item[data-target="${target}"]`);
    document.querySelectorAll(".limelight-item").forEach((item) => item.classList.toggle("active", item === button));
    updateLimelight(button);
  };

  document.querySelectorAll(".limelight-item").forEach((button) => button.addEventListener("click", (event) => {
    if (button.tagName === "A") event.preventDefault();
    document.getElementById(button.dataset.target)?.scrollIntoView({ behavior: "smooth" });
    setNav(button.dataset.target);
  }));
  document.querySelectorAll("[data-scroll-to]").forEach((button) => button.addEventListener("click", () => document.getElementById(button.dataset.scrollTo)?.scrollIntoView({ behavior: "smooth" })));
  document.querySelector("[data-gallery-prev]")?.addEventListener("click", () => move(-1));
  document.querySelector("[data-gallery-next]")?.addEventListener("click", () => move(1));
  gallery?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "ArrowRight") move(1);
  });
  gallery?.addEventListener("wheel", (event) => {
    event.preventDefault();
    move(event.deltaY > 0 ? 1 : -1);
  }, { passive: false });
  gallery?.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button, a")) {
      dragStart = null;
      return;
    }
    dragStart = event.clientX;
    gallery.setPointerCapture(event.pointerId);
  });
  gallery?.addEventListener("pointerup", (event) => {
    if (dragStart === null) return;
    const delta = event.clientX - dragStart;
    if (Math.abs(delta) > 24) move(delta < 0 ? 1 : -1);
    dragStart = null;
  });
  gallery?.addEventListener("pointercancel", () => { dragStart = null; });

  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) setNav(entry.target.dataset.section);
  }), { rootMargin: "-35% 0px -55%" });
  document.querySelectorAll("[data-section]").forEach((section) => observer.observe(section));
  window.addEventListener("resize", () => updateLimelight(document.querySelector(".limelight-item.active")));

  const count = document.querySelector("[data-concept-project-count]");
  if (count) count.textContent = String(projects.length);
  buildGallery();
  renderArchive();
  requestAnimationFrame(() => setNav("top"));
})();
