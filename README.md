# React Templates

`React Templates` based on `create-react-app`.
The template repository used by [create-reactjs-generator](https://github.com/seungdeok/create-reactjs-generator) repository.

## 프로젝트 구성

1. 아키텍처
   ![react-application-architecture](https://github.com/seungdeok/react-templates/assets/32917014/99919d52-0dd3-4a61-8446-d25060ed5bd3)

2. 폴더 구조

```
📦src
 ┣ 📂components
 ┃ ┗ 📂ClickArea
 ┃ ┃ ┣ 📜ClickArea.tsx
 ┃ ┃ ┣ 📜index.test.tsx
 ┃ ┃ ┗ 📜index.ts
 ┣ 📂constants
 ┃ ┣ 📜api.ts
 ┃ ┗ 📜routes.ts
 ┣ 📂hooks
 ┃ ┣ 📂useCustomQuery
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜useCustomQuery.ts
 ┃ ┗ 📂useDebounce
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜useDebounce.ts
 ┣ 📂pages
 ┃ ┗ 📜HomePage.tsx
 ┣ 📂recoil
 ┃ ┣ 📂atoms
 ┃ ┃ ┗ 📜exampleAtom.ts
 ┃ ┗ 📂selectors
 ┃ ┃ ┗ 📜exampleValue.ts
 ┣ 📂routes
 ┃ ┣ 📜ProtectedRoutes.tsx
 ┃ ┗ 📜router.tsx
 ┣ 📂services
 ┃ ┣ 📜UserService.ts
 ┃ ┗ 📜client.ts
 ┣ 📂styles
 ┃ ┣ 📜GlotalStyles.tsx
 ┃ ┣ 📜reset.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂utils
 ┃ ┗ 📂highlight
 ┃ ┃ ┣ 📜highlight.ts
 ┃ ┃ ┗ 📜index.ts
 ┣ 📂views
 ┃ ┣ 📜Error404.tsx
 ┃ ┗ 📜Home.tsx
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜setupTests.ts
```

<br/>

## 기능 목록

<!-- .gif -->

<br />

## 트러블 슈팅

<br />

## 사용한 기술 스택 및 라이브러리

`react-query`

- API 캐싱하여 요청 비용 감소
- Client와 API 상태를 분리하여 관심사를 분리
- useEffect를 걷어내서 Side Effect 가능성 제거

`recoil`

- 상태 업데이트 최적화로 렌더링 성능 개선
- redux에 비해 보일러 플레이트 코드 감소
- 비동기 데이터처리 서드파티없이 내부 모듈로 가능

`emotion`

- CSS-In-JS로 재사용성 증가
- 타 CSS-In-JS와 비교하여 많은 다운로드 수
- 가벼운 환경, 다양한 style 작성방식 지원 (styled-components , SCSS , inline css props )
- SSR에 대한 별도 처리가 필요 없음 (styled-components는 별도 처리 필요)

<br />

## 빌드 및 실행 방법

1. 로컬 빌드 방법

```bash
$ npm run build
```

<br/>

2. 실행방법

```bash
$ yarn install
$ npm run start
```

```bash
$ npm install
$ npm run start
```

<br/>

## 참조
