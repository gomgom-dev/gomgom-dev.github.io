(function () {
  const projects = window.GOMGOM_PROJECTS || [];
  const slug = document.body.dataset.project;
  const project = projects.find((item) => item.slug === slug);
  const root = document.querySelector("[data-project-root]");

  if (!project || !root) return;

  const pagePrefix = "../";
  const localPath = `${pagePrefix}${project.slug}/`;
  const policyHref = project.policyUrl && project.policyUrl.startsWith("http")
    ? project.policyUrl
    : pagePrefix + "privacy-policy/";
  const heroIcon = project.icon
    ? `<img class="project-hero-icon" src="../${project.icon}" alt="" loading="lazy">`
    : `<span class="project-hero-mark" aria-hidden="true">${project.mark}</span>`;

  document.title = `${project.name} | gomgom.dev`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", project.summary);

  const linkItems = [
    { label: "프로젝트 홈", href: localPath },
    { label: "참조 레포", href: project.repoUrl },
    { label: "참조 Pages", href: project.referenceUrl },
    { label: "지원 / Issues", href: project.supportUrl },
    { label: "Privacy", href: policyHref }
  ].filter((item) => item.href);

  const related = projects
    .filter((item) => item.slug !== project.slug && item.category === project.category)
    .slice(0, 4);

  root.innerHTML = `
    <section class="project-hero">
      <div>
        <a class="breadcrumb" href="../">gomgom.dev / Projects</a>
        ${heroIcon}
        <h1>${project.name}</h1>
        <p>${project.summary}</p>
        <div class="hero-actions">
          <a class="button primary" href="${project.repoUrl}">GitHub 레포</a>
          <a class="button secondary" href="${project.referenceUrl}">참조 페이지</a>
        </div>
      </div>
      <aside class="project-meta-panel" aria-label="프로젝트 메타 정보">
        <dl>
          <div><dt>Type</dt><dd>${project.type}</dd></div>
          <div><dt>Source</dt><dd>${project.sourceRepo}</dd></div>
          <div><dt>Folder</dt><dd>/${project.slug}/</dd></div>
        </dl>
      </aside>
    </section>

    <section class="section project-detail-grid">
      <div>
        <article class="content-block">
          <h2>Overview</h2>
          <p>${project.description}</p>
        </article>
        <article class="content-block">
          <h2>Highlights</h2>
          <ul class="highlight-list">
            ${project.highlights.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
        <article class="content-block">
          <h2>Links</h2>
          <div class="link-grid">
            ${linkItems.map((item) => `<a class="link-card" href="${item.href}">${item.label}</a>`).join("")}
          </div>
        </article>
        <article class="content-block">
          <h2>Support / Privacy</h2>
          <p>지원 요청은 연결된 GitHub Issues 또는 이메일로 접수합니다. 앱스토어 제출 또는 사용자 데이터 안내가 필요한 프로젝트는 개인정보 처리방침 링크를 함께 제공합니다.</p>
        </article>
      </div>

      <aside class="side-panel">
        <div class="side-card">
          <h2>Tech Stack</h2>
          <div class="tag-list">
            ${project.stack.map((item) => `<span>${item}</span>`).join("")}
          </div>
        </div>
        <div class="side-card">
          <h2>Related</h2>
          <div class="side-list">
            ${related.map((item) => `<a href="../${item.slug}/">${item.name}</a>`).join("") || `<a href="../">전체 프로젝트</a>`}
          </div>
        </div>
      </aside>
    </section>
  `;
})();
