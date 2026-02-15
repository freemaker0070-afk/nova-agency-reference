'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const team = [
  {
    name: '김태현',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    description: '15년 경력의 디지털 전략가. 글로벌 브랜드와의 협업 경험 다수.',
  },
  {
    name: '이수진',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    description: '수상 경력의 크리에이티브 디렉터. 브랜딩과 UX 디자인 전문.',
  },
  {
    name: '박지훈',
    role: 'Tech Lead',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    description: '풀스택 개발자 출신 기술 리더. 확장 가능한 시스템 설계 전문.',
  },
  {
    name: '정민아',
    role: 'UX Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    description: '사용자 경험 전문가. 리서치부터 프로토타이핑까지 종합 UX.',
  },
]

const values = [
  {
    icon: '✨',
    title: '혁신',
    description: '끊임없이 새로운 기술과 트렌드를 탐구하며 더 나은 솔루션을 제시합니다.',
  },
  {
    icon: '🤝',
    title: '협업',
    description: '클라이언트와의 긴밀한 소통을 통해 진정한 파트너십을 구축합니다.',
  },
  {
    icon: '💎',
    title: '품질',
    description: '모든 프로젝트에서 타협 없는 최고의 품질을 추구합니다.',
  },
  {
    icon: '🚀',
    title: '성장',
    description: '클라이언트의 비즈니스 성장이 곧 우리의 성공입니다.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 mesh-bg" />
        <div className="container-custom relative z-10 py-20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase">
              About Us
            </span>
            <h1 className="heading-xl mt-6">
              <span className="text-white">디지털 혁신을 이끄는</span>
              <br />
              <span className="gradient-text">크리에이티브 팀</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              2018년 설립 이후, Nova Agency는 기업들의 디지털 전환을 
              성공적으로 이끌어왔습니다. 창의성과 기술의 완벽한 조화를 통해 
              브랜드의 가치를 높이는 것이 우리의 미션입니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase">
                Our Story
              </span>
              <h2 className="heading-md mt-4 text-white">
                열정으로 시작해
                <br />
                <span className="gradient-text">신뢰로 성장하다</span>
              </h2>
              <div className="mt-6 space-y-4 text-white/70 leading-relaxed">
                <p>
                  Nova Agency는 디지털 경험의 새로운 기준을 제시하고자 하는 
                  열정에서 시작되었습니다. 작은 스튜디오에서 시작한 우리는 
                  이제 글로벌 브랜드와 함께 일하는 크리에이티브 에이전시로 성장했습니다.
                </p>
                <p>
                  우리의 강점은 기술과 디자인의 균형 잡힌 접근입니다. 
                  최신 기술 스택을 활용하면서도, 사용자 경험과 비주얼 
                  아이덴티티를 절대 타협하지 않습니다.
                </p>
                <p>
                  150개 이상의 성공적인 프로젝트, 50개 이상의 파트너사, 
                  98%의 고객 만족도 - 이 숫자들이 우리의 이야기를 대신 
                  말해줍니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/50 to-transparent" />
              </div>
              
              {/* Floating stats */}
              <motion.div
                className="absolute -bottom-6 -left-6 glass-effect rounded-2xl p-6"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-3xl font-display font-bold gradient-text">8년+</div>
                <p className="text-sm text-white/60 mt-1">업계 경력</p>
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 glass-effect rounded-2xl p-6"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-3xl font-display font-bold gradient-text">150+</div>
                <p className="text-sm text-white/60 mt-1">완료 프로젝트</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-dark-950">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase">
              Our Values
            </span>
            <h2 className="heading-lg mt-4 text-white">
              우리가 <span className="gradient-text">중요하게 생각하는 것</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-3xl glass-effect hover-lift text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-5xl">{value.icon}</span>
                <h3 className="mt-4 text-xl font-display font-bold text-white">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-white/60">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Our Team
            </span>
            <h2 className="heading-lg mt-4 text-white">
              열정적인 <span className="gradient-text">전문가들</span>
            </h2>
            <p className="mt-4 text-lg text-white/60">
              각 분야 최고의 전문가들이 여러분의 프로젝트를 함께합니다
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
                  
                  {/* Overlay info */}
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm text-white/80">{member.description}</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-bold text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-primary-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
