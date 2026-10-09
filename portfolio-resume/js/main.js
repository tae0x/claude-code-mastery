// 페이드인 초기 상태는 JS가 켜져 있을 때만 적용
document.documentElement.classList.add('js');

// 프로젝트 데이터 (예시)
const projects = [
  {
    title: '취향 커머스 리뉴얼',
    image: 'https://picsum.photos/seed/commerce/640/360',
    description: '상품 탐색 흐름을 개선하고 이미지 최적화로 로딩 속도를 2배 가까이 높인 쇼핑몰 프론트엔드.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    title: '할 일 대시보드',
    image: 'https://picsum.photos/seed/kanban/640/360',
    description: '드래그 앤 드롭과 로컬 저장을 지원하는 칸반 스타일 업무 관리 앱.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    title: '날씨 알림 웹앱',
    image: 'https://picsum.photos/seed/weather/640/360',
    description: '공공 API로 지역별 날씨를 보여 주고 PWA로 알림을 제공하는 서비스.',
    tags: ['React', 'REST API', 'PWA'],
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
];

// 프로젝트 카드 렌더링 (textContent를 사용해 XSS 방지)
function renderProjects() {
  const list = document.getElementById('project-list');
  if (!list) return;
  list.innerHTML = '';

  projects.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card';

    const thumb = document.createElement('img');
    thumb.className = 'project-thumb';
    thumb.src = project.image;
    thumb.alt = `${project.title} 썸네일`;
    thumb.width = 640;
    thumb.height = 360;
    thumb.loading = 'lazy';

    const body = document.createElement('div');
    body.className = 'project-body';

    const title = document.createElement('h3');
    title.className = 'text-lg font-bold';
    title.style.color = 'var(--heading)';
    title.textContent = project.title;

    const desc = document.createElement('p');
    desc.className = 'mt-2 flex-1 text-sm leading-relaxed';
    desc.textContent = project.description;

    const tags = document.createElement('ul');
    tags.className = 'mt-4 flex flex-wrap gap-2';
    project.tags.forEach((tag) => {
      const li = document.createElement('li');
      li.className = 'badge';
      li.textContent = tag;
      tags.appendChild(li);
    });

    const links = document.createElement('div');
    links.className = 'mt-5 flex gap-5 text-sm font-semibold';
    [
      ['GitHub', project.github],
      ['Demo', project.demo],
    ].forEach(([label, href]) => {
      const a = document.createElement('a');
      a.href = href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = 'project-link';
      a.textContent = `${label} ↗`;
      a.setAttribute('aria-label', `${project.title} ${label} (새 탭에서 열림)`);
      links.appendChild(a);
    });

    body.append(title, desc, tags, links);
    card.append(thumb, body);
    list.appendChild(card);
  });
}

// 프로필 사진 로드 실패 시 이니셜 아바타로 대체
const AVATAR_FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Crect width='160' height='160' rx='80' fill='%23ff6b57'/%3E%3Ctext x='80' y='102' font-size='64' font-family='sans-serif' font-weight='700' text-anchor='middle' fill='%230f1724'%3E홍%3C/text%3E%3C/svg%3E";

function initProfilePhoto() {
  const photo = document.getElementById('hero-photo');
  if (!photo) return;
  photo.addEventListener(
    'error',
    () => {
      photo.src = AVATAR_FALLBACK;
      photo.alt = '홍길동 프로필 이미지(이니셜 아바타)';
    },
    { once: true }
  );
}

// 다크/라이트 모드 토글
function initTheme() {
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  const sync = () => {
    const isDark = root.classList.contains('dark');
    btn.setAttribute('aria-label', isDark ? '라이트 모드로 전환' : '다크 모드로 전환');
    btn.setAttribute('aria-pressed', String(isDark));
  };

  btn.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) {
      // 저장소 접근이 막힌 환경에서는 저장만 생략
    }
    sync();
  });

  // 저장된 선택이 없으면 다크가 기본값(index.html의 초기화 스크립트 참고)
  sync();
}

// 모바일 햄버거 메뉴
function initMobileMenu() {
  const btn = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');

  const setOpen = (open) => {
    menu.classList.toggle('hidden', !open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  };

  btn.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
}

// 현재 섹션 네비게이션 하이라이트
function initScrollSpy() {
  const sections = document.querySelectorAll('main section[id]');
  const links = document.querySelectorAll('header .nav-link');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
}

// 스크롤 시 섹션 페이드인
function initFadeIn() {
  const targets = document.querySelectorAll('.fade-in');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  targets.forEach((el) => observer.observe(el));
}

// 통계 숫자 카운트업 (모션 감소 설정이면 생략)
function initCountUp() {
  const targets = document.querySelectorAll('[data-count]');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        obs.unobserve(entry.target);
        const el = entry.target;
        const end = Number(el.dataset.count);
        const duration = 1200;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = String(Math.round(end * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.6 }
  );
  targets.forEach((el) => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initProfilePhoto();
  initTheme();
  initMobileMenu();
  initScrollSpy();
  initFadeIn();
  initCountUp();

  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('print-btn').addEventListener('click', () => window.print());
});
