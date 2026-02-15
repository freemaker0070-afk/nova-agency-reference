'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    id: 'web',
    title: '웹 개발',
    subtitle: 'Web Development',
    description: '최신 기술 스택을 활용한 고성능, 확장 가능한 웹 애플리케이션을 개발합니다. 사용자 경험과 비즈니스 목표를 모두 달성하는 솔루션을 제공합니다.',
    features: [
      'React / Next.js 기반 프론트엔드',
      'Node.js / Python 백엔드',
      'TypeScript 정적 타입 시스템',
      '반응형 & 모바일 퍼스트',
      'API 설계 및 통합',
      'AWS / Vercel 클라우드 배포',
    ],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'design',
    title: 'UI/UX 디자인',
    subtitle: 'UI/UX Design',
    description: '사용자 중심 디자인 철학을 바탕으로 직관적이고 아름다운 인터페이스를 설계합니다. 데이터 기반의 UX 리서치로 검증된 디자인을 제공합니다.',
    features: [
      '사용자 리서치 & 페르소나',
      '와이어프레임 & 프로토타입',
      '인터랙션 디자인',
      '디자인 시스템 구축',
      '사용성 테스트',
      'Figma 협업 환경',
    ],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 'branding',
    title: '브랜딩',
    subtitle: 'Branding',
    description: '브랜드의 본질을 담은 강력한 아이덴티티를 구축합니다. 로고부터 브랜드 가이드라인까지, 일관된 브랜드 경험을 설계합니다.',
    features: [
      '브랜드 전략 수립',
      '로고 & 심볼 디자인',
      '컬러 팔레트 & 타이포그래피',
      '브랜드 가이드라인',
      '마케팅 자료 디자인',
      '패키지 & 머천다이즈',
    ],
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 'marketing',
    title: '디지털 마케팅',
    subtitle: 'Digital Marketing',
    description: '데이터 드리븐 마케팅 전략으로 비즈니스 성장을 가속화합니다. SEO, 퍼포먼스 마케팅, 콘텐츠 전략까지 종합 솔루션을 제공합니다.',
    features: [
      'SEO & 검색 최적화',
      '퍼포먼스 마케팅 (Google/Meta)',
      '콘텐츠 마케팅 전략',
      '소셜 미디어 관리',
      '데이터 분석 & 리포팅',
      '전환율 최적화 (CRO)',
    ],
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80',
    gradient: 'from-green-500 to-emerald-500',
  },
]

const process = [
  {
    step: '01',
    title: '발견',
    description: '비즈니스 목표와 사용자 니즈를 깊이 이해합니다.',
  },
  {
    step: '02',
    title: '전략',
    description: '데이터 기반의 실행 가능한 전략을 수립합니다.',
  },
  {
    step: '03',
    title: '디자인',
    description: '사용자 중심의 직관적인 솔루션을 설계합니다.',
  },
  {
    step: '04',
    title: '개발',
    description: '최신 기술로 안정적인 제품을 구축합니다.',
  },
  {
    step: '05',
    title: '런칭',
    description: '철저한 테스트 후 성공적으로 출시합니다.',
  },
  {
    step: '06',
    title: '성장',
    description: '지속적인 최적화로 성과를 극대화합니다.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 mesh-bg" />
        <div className="container-custom relative z-10 py-20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase">
              Our Services
            </span>
            <h1 className="heading-xl mt-6">
              <span className="text-white">디지털 성공을 위한</span>
              <br />
              <span className="gradient-text">종합 솔루션</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              전략부터 실행까지, 디지털 전환의 모든 영역을 아우르는 
              전문 서비스를 제공합니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-dark-950">
        <div className="container-custom">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${service.gradient} bg-opacity-10 text-sm font-medium text-white mb-4`}>
                    {service.subtitle}
                  </span>
                  <h2 className="heading-md text-white">{service.title}</h2>
                  <p className="mt-4 text-lg text-white/60 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center gap-3 text-white/80"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <Link href="/contact">
                      <motion.button
                        className="btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        문의하기
                      </motion.button>
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    className="relative aspect-[4/3] rounded-3xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase">
              Our Process
            </span>
            <h2 className="heading-lg mt-4 text-white">
              프로젝트 <span className="gradient-text">진행 과정</span>
            </h2>
            <p className="mt-4 text-lg text-white/60">
              체계적인 프로세스로 프로젝트의 성공을 보장합니다
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                className="relative p-8 rounded-3xl glass-effect hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-6xl font-display font-bold gradient-text opacity-20">
                  {item.step}
                </span>
                <h3 className="mt-4 text-xl font-display font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-950">
        <div className="container-custom">
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            
            <div className="relative z-10 px-8 py-16 md:py-20 text-center">
              <h2 className="heading-md text-white">
                프로젝트가 있으신가요?
              </h2>
              <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
                아이디어를 현실로 만들어 드립니다. 지금 바로 무료 상담을 신청하세요.
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <motion.button
                    className="px-10 py-4 bg-white text-dark-950 rounded-full font-semibold hover:bg-white/90 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    무료 상담 신청
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
