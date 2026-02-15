'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const categories = ['전체', '웹 개발', 'UI/UX', '브랜딩', '앱']

const projects = [
  {
    id: 1,
    title: 'Nexus Finance',
    category: '웹 개발',
    tags: ['핀테크', 'Next.js', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    color: 'from-blue-500/30 to-purple-500/30',
    year: '2025',
  },
  {
    id: 2,
    title: 'Verde Living',
    category: '브랜딩',
    tags: ['라이프스타일', '브랜드 아이덴티티'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    color: 'from-green-500/30 to-emerald-500/30',
    year: '2025',
  },
  {
    id: 3,
    title: 'Aurora Music',
    category: '앱',
    tags: ['엔터테인먼트', 'React Native'],
    image: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=800&q=80',
    color: 'from-pink-500/30 to-orange-500/30',
    year: '2024',
  },
  {
    id: 4,
    title: 'Stellar Commerce',
    category: '웹 개발',
    tags: ['이커머스', 'Shopify'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    color: 'from-cyan-500/30 to-blue-500/30',
    year: '2024',
  },
  {
    id: 5,
    title: 'Mindful Health',
    category: 'UI/UX',
    tags: ['헬스케어', '웹앱'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    color: 'from-teal-500/30 to-cyan-500/30',
    year: '2024',
  },
  {
    id: 6,
    title: 'Urban Eats',
    category: '브랜딩',
    tags: ['F&B', '브랜드 전략'],
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80',
    color: 'from-orange-500/30 to-yellow-500/30',
    year: '2024',
  },
  {
    id: 7,
    title: 'TechHub Platform',
    category: '웹 개발',
    tags: ['SaaS', 'React'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    color: 'from-violet-500/30 to-purple-500/30',
    year: '2023',
  },
  {
    id: 8,
    title: 'EcoTrack',
    category: '앱',
    tags: ['환경', 'iOS/Android'],
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80',
    color: 'from-green-500/30 to-lime-500/30',
    year: '2023',
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('전체')

  const filteredProjects = activeCategory === '전체'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 mesh-bg" />
        <div className="container-custom relative z-10 py-20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase">
              Portfolio
            </span>
            <h1 className="heading-xl mt-6">
              <span className="text-white">우리의</span>{' '}
              <span className="gradient-text">작업물</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              다양한 산업군의 클라이언트와 함께한 성공적인 프로젝트들을 소개합니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="section-padding bg-dark-950">
        <div className="container-custom">
          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={`/portfolio/${project.id}`}>
                  <motion.div
                    className="group relative aspect-[16/10] rounded-3xl overflow-hidden cursor-pointer"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Image */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Gradient accent */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                      {/* Top */}
                      <div className="flex justify-between items-start">
                        <span className="px-3 py-1 rounded-full bg-white/10 text-xs text-white/80 backdrop-blur-sm">
                          {project.category}
                        </span>
                        <span className="text-sm text-white/60">{project.year}</span>
                      </div>

                      {/* Bottom */}
                      <div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 group-hover:gradient-text transition-all">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-white/60 bg-white/5 px-3 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* View more */}
                        <motion.div
                          className="mt-4 flex items-center gap-2 text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <span className="text-sm font-medium">프로젝트 보기</span>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </div>

                    {/* Number */}
                    <div className="absolute top-6 right-6">
                      <span className="text-7xl font-display font-bold text-white/5">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-md text-white">
              다음 프로젝트의 <span className="gradient-text">주인공</span>이 되세요
            </h2>
            <p className="mt-4 text-lg text-white/60">
              당신의 아이디어를 현실로 만들 준비가 되어 있습니다
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  프로젝트 문의하기
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
