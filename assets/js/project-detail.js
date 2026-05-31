// ========================================
// PROJECT DETAIL PAGE RENDERER
// ========================================

(function () {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');

    if (!projectId || !window.PROJECTS_DATA[projectId]) {
        window.location.href = 'index.html#projects';
        return;
    }

    const p = window.PROJECTS_DATA[projectId];

    // Set page title
    document.title = `${p.title}. Prasad Rawas`;

    // Dynamic meta tags for SEO
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = p.subtitle;
    } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = p.subtitle;
        document.head.appendChild(meta);
    }

    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = `https://prasadrawas.github.io/portfolio/project.html?id=${projectId}`;
    document.head.appendChild(canonical);

    // OG tags
    const ogTags = {
        'og:title': `${p.title} | Prasad Rawas`,
        'og:description': p.subtitle,
        'og:type': 'website',
        'og:url': `https://prasadrawas.github.io/portfolio/project.html?id=${projectId}`
    };
    Object.entries(ogTags).forEach(([prop, content]) => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', prop);
        meta.content = content;
        document.head.appendChild(meta);
    });

    // Hero gradient + optional banner
    const hero = document.getElementById('detailHero');
    hero.style.setProperty('--hero-g1', p.gradient[0]);
    hero.style.setProperty('--hero-g2', p.gradient[1]);

    if (p.banner) {
        const bannerEl = document.createElement('div');
        bannerEl.className = 'detail-hero-banner';
        bannerEl.innerHTML = `<img src="${p.banner}" alt="${p.title} banner">`;
        hero.querySelector('.container').insertBefore(bannerEl, hero.querySelector('.detail-hero-content'));
    }

    // Badge
    document.getElementById('detailBadge').textContent = p.badge;

    // Title & subtitle
    document.getElementById('detailTitle').textContent = p.title;
    document.getElementById('detailSubtitle').textContent = p.subtitle;

    // Action buttons
    const actionsEl = document.getElementById('detailActions');
    if (p.github) {
        actionsEl.innerHTML += `
            <a href="${p.github}" target="_blank" rel="noopener" class="detail-action-btn primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                View Source Code
            </a>`;
    }
    if (p.live) {
        actionsEl.innerHTML += `
            <a href="${p.live}" target="_blank" rel="noopener" class="detail-action-btn secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                Live Demo
            </a>`;
    }
    if (p.playStore) {
        actionsEl.innerHTML += `
            <a href="${p.playStore}" target="_blank" rel="noopener" class="detail-action-btn secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3l18 9-18 9V3z"/></svg>
                Play Store
            </a>`;
    }
    if (p.appStore) {
        actionsEl.innerHTML += `
            <a href="${p.appStore}" target="_blank" rel="noopener" class="detail-action-btn secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
                App Store
            </a>`;
    }

    // Overview
    const overviewEl = document.getElementById('detailOverview');
    p.overview.forEach(para => {
        overviewEl.innerHTML += `<p>${para}</p>`;
    });

    // Features
    const featuresEl = document.getElementById('detailFeatures');
    p.features.forEach(f => {
        featuresEl.innerHTML += `
            <li>
                <span class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                </span>
                <span>${f}</span>
            </li>`;
    });

    // User Flow
    const flowEl = document.getElementById('detailFlow');
    p.userFlow.forEach((step, i) => {
        flowEl.innerHTML += `
            <div class="flow-step">
                <div class="flow-marker">
                    <span class="flow-number">${i + 1}</span>
                    <div class="flow-line"></div>
                </div>
                <div class="flow-content">
                    <h4>${step.title}</h4>
                    <p>${step.desc}</p>
                </div>
            </div>`;
    });

    // Architecture
    const archSection = document.getElementById('archSection');
    const archEl = document.getElementById('detailArch');
    if (p.architecture) {
        let archHTML = `<p>${p.architecture.description}</p>`;
        if (p.architecture.layers) {
            archHTML += '<div class="arch-layers">';
            const colors = ['#6366f1', '#22c55e', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'];
            p.architecture.layers.forEach((layer, i) => {
                const color = colors[i % colors.length];
                archHTML += `
                    <div class="arch-layer">
                        <div class="arch-layer-icon" style="background: ${color}20; color: ${color};">
                            ${layer.abbr || (i + 1)}
                        </div>
                        <div>
                            <div class="arch-layer-name">${layer.name}</div>
                            <div class="arch-layer-desc">${layer.desc}</div>
                        </div>
                    </div>`;
            });
            archHTML += '</div>';
        }
        archEl.innerHTML = archHTML;
    } else {
        archSection.style.display = 'none';
    }

    // Sidebar - Tech Stack
    const techEl = document.getElementById('sidebarTech');
    p.techStack.forEach(t => {
        techEl.innerHTML += `<span class="sidebar-tech-pill">${t}</span>`;
    });

    // Sidebar - Project Info
    const infoEl = document.getElementById('sidebarInfo');
    if (p.info) {
        p.info.forEach(item => {
            infoEl.innerHTML += `
                <div class="sidebar-info-row">
                    <span class="sidebar-info-label">${item.label}</span>
                    <span class="sidebar-info-value">${item.value}</span>
                </div>`;
        });
    }

    // Sidebar - Links
    const linksEl = document.getElementById('sidebarLinks');
    const linksCard = document.getElementById('sidebarLinksCard');
    let hasLinks = false;
    if (p.github) {
        hasLinks = true;
        linksEl.innerHTML += `
            <a href="${p.github}" target="_blank" rel="noopener" class="sidebar-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub Repository
            </a>`;
    }
    if (p.live) {
        hasLinks = true;
        linksEl.innerHTML += `
            <a href="${p.live}" target="_blank" rel="noopener" class="sidebar-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                Live Website
            </a>`;
    }
    if (p.playStore) {
        hasLinks = true;
        linksEl.innerHTML += `
            <a href="${p.playStore}" target="_blank" rel="noopener" class="sidebar-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3l18 9-18 9V3z"/></svg>
                Google Play Store
            </a>`;
    }
    if (p.appStore) {
        hasLinks = true;
        linksEl.innerHTML += `
            <a href="${p.appStore}" target="_blank" rel="noopener" class="sidebar-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
                Apple App Store
            </a>`;
    }
    if (!hasLinks) linksCard.style.display = 'none';

    // Animate in
    document.querySelectorAll('.detail-section, .sidebar-card').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${0.1 + i * 0.08}s, transform 0.5s ease ${0.1 + i * 0.08}s`;
        requestAnimationFrame(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    });
})();
