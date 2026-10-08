# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어(코드 표준 준수)

## 프로젝트 현황

개발자 웹 이력서 프로젝트이며, 사이트 파일은 모두 `portfolio/` 하위에 있다(`portfolio/index.html`, `portfolio/css/style.css`, `portfolio/js/main.js`). 디자인은 다크 우선 + 코랄 포인트 컬러 스타일이다. 색상은 `portfolio/css/style.css`의 CSS 변수(`:root` / `.dark`)로 관리하고, 레이아웃은 `.container-x`(폭/좌우 여백)와 `.section`(수직 간격) 공통 클래스를 사용한다. 작업 시 `ROADMAP.md`의 단계와 디렉터리 구조를 따른다.

## 기술 스택 및 방침

- HTML, CSS, JavaScript, Tailwind CSS만 사용한다. Tailwind는 CDN 방식이며 `darkMode: 'class'`로 설정한다.
- 빌드 도구, 패키지 매니저, 테스트 러너는 없다. `portfolio/index.html`을 브라우저에서 바로 열거나 정적 서버(예: `python3 -m http.server -d portfolio`)로 확인한다.
- 구조: `portfolio/index.html`(단일 페이지), `portfolio/css/style.css`(Tailwind로 처리하기 어려운 스타일만), `portfolio/js/main.js`(다크 모드, 모바일 메뉴, 스크롤 동작), `portfolio/assets/images/`.
- 다크/라이트 모드 선택은 `localStorage`에 저장하고, 저장값이 없으면 다크 모드가 기본이다.
- 모바일 우선으로 스타일링하고, 인쇄(PDF 저장)용 `@media print` 스타일을 고려한다.
