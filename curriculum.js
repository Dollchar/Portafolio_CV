// resources/js/curriculum.js

// ─── DATA DE PROYECTOS ───────────────────────────────────────────────────────
const projects = [
    {
        id:   'pokedex',
        icon: '🔴',
        name: 'Pokédex Interactiva',
        lang: 'CSS · JavaScript · HTML',
        desc: 'Pokédex web responsive que consume PokéAPI mostrando más de 1010 pokémon con búsqueda inteligente, filtros por tipo, favoritos persistentes en localStorage, sprites animados, shiny y mega evoluciones.',
        tags: ['HTML5', 'CSS3', 'JS Vanilla', 'Bootstrap 5', 'PokéAPI', 'localStorage'],
        features: [
            'Carga progresiva de 1010+ pokémon con indicador en tiempo real',
            'Buscador instantáneo por nombre o número de Pokédex',
            'Filtros por tipo (uno o varios simultáneamente)',
            'Favoritos persistentes con carrusel superior',
            'Modal con sprites animados, shiny, mega y cadena evolutiva',
            'Modo oscuro/claro con persistencia local',
        ],
        url:  'https://github.com/Dollxar/Pokedex',
        demo: null,
    },
    {
        id:   'proyecto',
        icon: '🔴',
        name: 'Proyecto Laravel',
        lang: 'PHP · Blade · JavaScript',
        desc: 'Aplicación web con Laravel, arquitectura MVC completa, vistas Blade, migraciones de base de datos, controladores, rutas y pipeline de assets con Vite.',
        tags: ['Laravel', 'PHP', 'Blade', 'MySQL', 'Vite', 'Bootstrap', 'SCSS'],
        features: [
            'Arquitectura MVC completa con controladores y modelos',
            'Vistas Blade con layouts y componentes reutilizables',
            'Migraciones y seeders para gestión de base de datos',
            'Pipeline de assets con Vite y SCSS',
            'Configuración con artisan y variables de entorno',
        ],
        url:  'https://github.com/Dollxar/Proyecto',
        demo: null,
    },
    {
        id:   'portfolio',
        icon: '🌐',
        name: 'Portfolio Personal',
        lang: 'HTML · GitHub Pages',
        desc: 'Sitio web personal alojado en GitHub Pages. Página de presentación con proyectos y perfil como desarrollador. Accesible en dollxar.github.io.',
        tags: ['HTML', 'CSS', 'GitHub Pages'],
        features: [
            'Diseño responsive para todos los dispositivos',
            'Alojado en GitHub Pages sin costo',
            'Presentación de proyectos y habilidades',
        ],
        url:  'https://github.com/Dollxar/Dollxar.github.io',
        demo: 'https://dollxar.github.io',
    },
    {
        id:   'webdev',
        icon: '🖥️',
        name: 'DesarrolloWeb2024_1',
        lang: 'HTML · Backend',
        desc: 'Repositorio del curso "Desarrolla Aplicaciones Web que se Ejecutan en el Servidor (Backend) 2024-1". Ejercicios y proyectos de desarrollo web backend.',
        tags: ['HTML', 'Backend', 'Servidor', 'Web', '2024'],
        features: [
            'Aplicaciones web ejecutadas en el servidor',
            'Fundamentos de desarrollo backend',
            'Proyectos y ejercicios del curso 2024',
        ],
        url:  'https://github.com/Dollxar/DesarrolloWeb2024_1',
        demo: null,
    },
];

// ─── RENDER DE TARJETAS DE PROYECTOS ────────────────────────────────────────
function renderProjects() {
    const list = document.getElementById('projList');
    if (!list) return;

    projects.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = 'proj-card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.innerHTML = `
            <div class="proj-num">0${i + 1}</div>
            <div>
                <div class="proj-name">${p.name}</div>
                <div class="proj-desc">${p.desc.substring(0, 100)}…</div>
                <div class="proj-tags">
                    ${p.tags.slice(0, 4).map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
            </div>
            <div class="proj-arrow">→</div>
        `;
        card.addEventListener('click', () => openModal(p.id));
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') openModal(p.id);
        });
        list.appendChild(card);
    });
}

// ─── MODAL ───────────────────────────────────────────────────────────────────
function openModal(id) {
    const p = projects.find(x => x.id === id);
    if (!p) return;

    document.getElementById('mIcon').textContent   = p.icon;
    document.getElementById('mTitle').textContent  = p.name;
    document.getElementById('mLang').textContent   = p.lang;
    document.getElementById('mDesc').textContent   = p.desc;
    document.getElementById('mFeatures').innerHTML = p.features.map(f => `<li>${f}</li>`).join('');
    document.getElementById('mTags').innerHTML     = p.tags.map(t => `<span class="tag">${t}</span>`).join('');

    let cta = `<a href="${p.url}" target="_blank" rel="noopener" class="btn btn-gold">Ver en GitHub →</a>`;
    if (p.demo) cta += `<a href="${p.demo}" target="_blank" rel="noopener" class="btn btn-outline">🌐 Demo</a>`;
    document.getElementById('mCta').innerHTML = cta;

    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

// ─── SCROLL REVEAL ───────────────────────────────────────────────────────────
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const el = entry.target;

            // Secciones principales
            if (el.classList.contains('section')) {
                el.classList.add('visible');
            }

            // Items de educación con delay escalonado
            if (el.classList.contains('edu-item')) {
                el.classList.add('visible');
            }

            // Achievement card
            if (el.classList.contains('achievement-card')) {
                el.classList.add('visible');
            }

            // Know cards con delay escalonado
            if (el.classList.contains('know-card')) {
                el.classList.add('visible');
            }

            // Proj cards con delay escalonado
            if (el.classList.contains('proj-card')) {
                el.classList.add('visible');
            }

            // Ability items con delay escalonado
            if (el.classList.contains('ability-item')) {
                el.classList.add('visible');
            }

            // Labels del sidebar
            if (el.classList.contains('s-label')) {
                setTimeout(() => el.classList.add('visible'), 200);
            }

            // Items de contacto con delay escalonado
            if (el.classList.contains('contact-item')) {
                el.classList.add('visible');
            }

            observer.unobserve(el);
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
    });

    // Observar todos los elementos animables
    const targets = [
        '.section',
        '.edu-item',
        '.achievement-card',
        '.know-card',
        '.proj-card',
        '.ability-item',
        '.s-label',
    ];
    targets.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => observer.observe(el));
    });
}

// ─── DELAYS ESCALONADOS ──────────────────────────────────────────────────────
function applyStaggerDelays() {
    // Edu items
    document.querySelectorAll('.edu-item').forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.12}s`;
    });

    // Know cards
    document.querySelectorAll('.know-card').forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.1}s`;
    });

    // Proj cards
    document.querySelectorAll('.proj-card').forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.1}s`;
    });

    // Ability items
    document.querySelectorAll('.ability-item').forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.07}s`;
    });
}

// ─── BARRAS DE IDIOMA ────────────────────────────────────────────────────────
function animateLangBars() {
    document.querySelectorAll('.lang-fill').forEach(bar => {
        bar.style.width = bar.dataset.w + '%';
    });
}

// ─── CONTACTOS SIDEBAR (animación de entrada) ────────────────────────────────
function animateContactItems() {
    document.querySelectorAll('.contact-list li').forEach((li, i) => {
        setTimeout(() => li.classList.add('visible'), 1200 + i * 120);
    });
}

// ─── INIT ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

    renderProjects();
    applyStaggerDelays();
    initScrollReveal();

    // Animar barras de idioma y contactos al cargar
    setTimeout(animateLangBars, 800);
    animateContactItems();

    // Cerrar modal — botón X
    document.getElementById('modalClose')
        ?.addEventListener('click', closeModal);

    // Cerrar modal — click en overlay
    document.getElementById('modalOverlay')
        ?.addEventListener('click', e => {
            if (e.target.id === 'modalOverlay') closeModal();
        });

    // Cerrar modal — tecla Escape
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal();
    });
});