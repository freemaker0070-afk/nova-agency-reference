# Nova Agency - 웹 에이전시 레퍼런스 사이트

모던하고 세련된 웹 에이전시 포트폴리오 사이트입니다.

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11+-FF0055?style=flat-square&logo=framer)

## ✨ 주요 기능

- **🎨 모던 디자인**: 2026년 트렌드에 맞춘 다크 테마 기반의 세련된 UI
- **🚀 고성능**: Next.js 14 App Router 기반의 최적화된 렌더링
- **📱 반응형**: 모바일부터 데스크톱까지 완벽한 반응형 디자인
- **✨ 인터랙션**: Framer Motion을 활용한 부드러운 애니메이션
- **🔍 SEO 최적화**: 메타태그, sitemap, robots.txt, 구조화된 데이터
- **🖼️ 이미지 최적화**: next/image를 통한 WebP 자동 변환

## 📂 프로젝트 구조

```
web-agency-reference/
├── src/
│   ├── app/
│   │   ├── about/           # 소개 페이지
│   │   ├── services/        # 서비스 페이지
│   │   ├── portfolio/       # 포트폴리오 페이지
│   │   ├── contact/         # 문의 페이지
│   │   ├── layout.tsx       # 루트 레이아웃
│   │   ├── page.tsx         # 홈페이지
│   │   ├── globals.css      # 글로벌 스타일
│   │   ├── sitemap.ts       # 사이트맵 생성
│   │   └── robots.ts        # robots.txt 생성
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx   # 네비게이션 헤더
│   │   │   └── Footer.tsx   # 푸터
│   │   │
│   │   └── sections/
│   │       ├── HeroSection.tsx        # 히어로 섹션
│   │       ├── ServicesPreview.tsx    # 서비스 미리보기
│   │       ├── PortfolioPreview.tsx   # 포트폴리오 미리보기
│   │       ├── StatsSection.tsx       # 통계 섹션
│   │       ├── TestimonialsSection.tsx # 고객 후기
│   │       └── CTASection.tsx         # CTA 섹션
│   │
│   └── lib/                 # 유틸리티 함수
│
├── public/                  # 정적 파일
├── tailwind.config.ts       # Tailwind 설정
├── next.config.mjs          # Next.js 설정
└── package.json
```

## 🛠️ 기술 스택

| 분류 | 기술 |
|------|------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion |
| **Font** | Inter, Space Grotesk (Google Fonts) |
| **Images** | Unsplash (WebP 최적화) |

## 🚀 시작하기

### 1. 의존성 설치

```bash
cd web-agency-reference
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 3. 프로덕션 빌드

```bash
npm run build
npm start
```

## 📄 페이지 구성

| 페이지 | 경로 | 설명 |
|--------|------|------|
| **홈** | `/` | 히어로, 서비스, 포트폴리오 프리뷰, 통계, 고객 후기 |
| **소개** | `/about` | 회사 스토리, 핵심 가치, 팀 소개 |
| **서비스** | `/services` | 상세 서비스 설명, 프로세스 |
| **포트폴리오** | `/portfolio` | 카테고리별 필터링 가능한 프로젝트 갤러리 |
| **문의** | `/contact` | 연락처 정보, 문의 폼 |

## 🎨 디자인 특징

- **다크 테마**: 눈의 피로를 줄이는 세련된 다크 모드
- **글래스모피즘**: backdrop-blur를 활용한 유리 효과
- **그라데이션**: Primary 색상 기반의 부드러운 그라데이션
- **마이크로 인터랙션**: 호버, 스크롤 기반의 섬세한 애니메이션
- **타이포그래피**: Space Grotesk(제목) + Inter(본문) 조합

## 🔧 커스터마이징

### 색상 변경

`tailwind.config.ts`에서 primary 색상을 수정하세요:

```typescript
colors: {
  primary: {
    500: '#0ea5e9', // 원하는 색상으로 변경
    // ...
  }
}
```

### 콘텐츠 수정

각 페이지의 데이터는 해당 파일 상단에 배열/객체로 정의되어 있습니다.
직접 수정하거나 CMS/API 연동이 가능합니다.

## 📦 배포

### Vercel (추천)

```bash
npm install -g vercel
vercel
```

### 기타 플랫폼

- Netlify
- AWS Amplify
- Docker 컨테이너

## 📝 라이선스

MIT License

---

Made with ❤️ by Nova Agency
