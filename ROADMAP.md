# 개발자 웹 이력서 ROADMAP

## 1. 프로젝트 개요

- **목표**: 개발자 본인을 소개하는 단일 페이지 웹 이력서 제작 및 배포
- **기술 스택**: HTML, CSS, JavaScript, Tailwind CSS (CDN 방식)
- **특징**: 반응형 디자인, 다크 모드, 인쇄(PDF 저장) 친화적, 정적 호스팅 가능

## 2. 이력서 내용 (일반적인 예시)

| 섹션 | 내용 |
| --- | --- |
| Hero / 소개 | 이름, 직군(예: 프론트엔드 개발자), 한 줄 소개, 연락 버튼 |
| About | 3~4줄 자기소개, 개발 철학 |
| Skills | HTML/CSS, JavaScript, Tailwind CSS, Git, React 등 카테고리별 나열 |
| Experience | 회사명, 기간, 직책, 주요 업무 및 성과 (2~3개) |
| Projects | 프로젝트명, 설명, 사용 기술, GitHub/데모 링크 (3개) |
| Education | 학교/전공, 교육 과정, 자격증 |
| Contact | 이메일, GitHub, LinkedIn, 블로그 |

## 3. 디렉터리 구조

```
claude-code-mastery/
├── portfolio/
│   ├── index.html
│   ├── css/
│   │   └── style.css    # Tailwind로 처리하기 어려운 커스텀 스타일
│   ├── js/
│   │   └── main.js      # 다크 모드, 스크롤, 메뉴 동작
│   └── assets/
│       └── images/      # 프로필 사진, 프로젝트 썸네일
├── CLAUDE.md
└── ROADMAP.md
```

## 4. 개발 단계

### Phase 1. 기획 및 환경 설정
- [x] 이력서 내용 초안 작성 (섹션별 텍스트 정리)
- [x] 프로젝트 폴더 및 기본 파일 생성
- [x] Tailwind CSS CDN 연결 및 `tailwind.config` 설정 (색상, 폰트, `darkMode: 'class'`)
- [x] 웹 폰트 적용 (예: Pretendard)

### Phase 2. 레이아웃 및 정적 마크업
- [x] 시맨틱 태그 기반 뼈대 작성 (`header`, `main`, `section`, `footer`)
- [x] 상단 네비게이션 바 (섹션 앵커 링크)
- [x] Hero, About 섹션 구현
- [x] Skills 섹션 (뱃지/태그 형태)
- [x] Experience 섹션 (타임라인 형태)
- [x] Projects 섹션 (카드 그리드)
- [x] Education, Contact 섹션 및 Footer

### Phase 3. 스타일링 및 반응형
- [x] 모바일 우선(Mobile-first) 스타일링
- [x] 브레이크포인트별 조정 (`sm`, `md`, `lg`)
- [x] 색상·간격·타이포그래피 일관성 점검
- [x] 호버/포커스 상태 및 전환 효과
- [x] 디자인 리뉴얼: 다크 우선 + 코랄 포인트, CSS 변수 기반 토큰, 컨테이너/섹션 간격 통일

### Phase 4. JavaScript 인터랙션
- [x] 다크/라이트 모드 토글 (`localStorage` 저장, 시스템 설정 반영)
- [x] 모바일 햄버거 메뉴
- [x] 부드러운 스크롤 및 현재 섹션 네비게이션 하이라이트 (`IntersectionObserver`)
- [x] 스크롤 시 섹션 페이드인 애니메이션
- [x] (선택) 프로젝트 데이터를 JS 배열로 분리해 동적 렌더링

### Phase 5. 품질 개선
- [x] 접근성: `alt`, `aria-label`, 키보드 탐색, 명도 대비 확인
- [x] SEO: `title`, `meta description`, Open Graph 태그, favicon
- [x] 인쇄용 스타일(`@media print`)로 PDF 저장 최적화
- [ ] 이미지 최적화 (WebP, `loading="lazy"`)
- [ ] Lighthouse 점검 (성능/접근성/SEO 90점 이상 목표)

### Phase 6. 배포
- [ ] 크로스 브라우저 확인 (Chrome, Safari, Firefox) 및 모바일 실기기 확인
- [ ] GitHub 저장소 생성 및 푸시
- [ ] GitHub Pages / Netlify / Vercel 중 하나로 배포
- [ ] (선택) 커스텀 도메인 연결

## 5. 마일스톤

| 단계 | 목표 | 산출물 |
| --- | --- | --- |
| M1 | 환경 설정 + 마크업 완료 | 스타일 없는 전체 구조의 `index.html` |
| M2 | 스타일링 + 반응형 완료 | 디자인이 적용된 화면 |
| M3 | 인터랙션 완료 | 다크 모드, 메뉴, 스크롤 효과 |
| M4 | 품질 개선 + 배포 | 공개 URL |

## 6. 완료 기준 (Definition of Done)

- 모든 섹션이 모바일/태블릿/데스크톱에서 깨지지 않고 표시된다.
- 다크/라이트 모드가 정상 동작하고 새로고침 후에도 유지된다.
- Lighthouse 주요 항목 90점 이상.
- 공개 URL로 접속 가능하다.

## 7. 향후 확장 아이디어

- 한/영 다국어 전환
- 블로그 및 GitHub 활동 연동
- 방문자 연락 폼 (Formspree 등)
- Tailwind CLI 빌드로 전환하여 CSS 용량 최적화
