'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'Nexus Finance',
    category: '핀테크 · 웹앱',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    color: 'from-blue-500/20 to-purple-500/20',
  },
  {
    id: 2,
    title: 'Verde Living',
    category: '라이프스타일 · 브랜딩',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    id: 3,
    title: 'Aurora Music',
    category: '엔터테인먼트 · 앱',
    image: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=800&q=80',
    color: 'from-pink-500/20 to-orange-500/20',
  },
  {
    id: 4,
    title: 'Stellar Commerce',
    category: '이커머스 · 플랫폼',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    color: 'from-cyan-500/20 to-blue-500/20',
  },
]

export default function PortfolioPreview() {
  return (
    <section className="section-padding relative overflow-hidden bg-dark-950">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase">
              Portfolio
            </span>
            <h2 className="heading-lg mt-4 text-white">
              최근 <span className="gradient-text">프로젝트</span>
            </h2>
            <p className="mt-4 text-lg text-white/60 max-w-xl">
              다양한 산업군의 클라이언트와 함께한 성공적인 프로젝트들을 소개합니다
            </p>
          </div>
          <Link href="/portfolio">
            <motion.button
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              전체 보기
            </motion.button>
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/portfolio/${project.id}`}>
                <motion.div
                  className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.02 }}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Gradient accent */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <motion.span
                      className="text-sm text-primary-400 font-medium mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.category}
                    </motion.span>
                    <motion.h3
                      className="text-2xl md:text-3xl font-display font-bold text-white"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* View button */}
                    <motion.div
                      className="mt-4 flex items-center gap-2 text-white/80 group-hover:text-white transition-colors"
                      initial={{ opacity: 0 }}
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        프로젝트 보기
                      </span>
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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

                  {/* Number */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-display font-bold text-white/10">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
