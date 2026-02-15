'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    content: 'Nova Agency와의 협업은 정말 훌륭했습니다. 우리의 비전을 완벽하게 이해하고 기대 이상의 결과물을 만들어주었습니다. 프로젝트 관리부터 디자인, 개발까지 모든 과정이 전문적이었습니다.',
    author: '김민수',
    role: 'CEO',
    company: 'Nexus Finance',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    id: 2,
    content: '브랜딩 작업의 품질이 정말 뛰어났습니다. 우리 브랜드의 본질을 정확히 파악하고, 현대적이면서도 시대를 초월하는 아이덴티티를 만들어주었습니다. 강력히 추천합니다.',
    author: '이서연',
    role: 'Marketing Director',
    company: 'Verde Living',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
  {
    id: 3,
    content: '기술적 역량과 창의성을 모두 갖춘 팀입니다. 복잡한 기능 요구사항을 우아하게 해결하면서도, 사용자 경험을 절대 타협하지 않았습니다. 최고의 파트너입니다.',
    author: '박준혁',
    role: 'CTO',
    company: 'Aurora Music',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
    }),
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="section-padding relative overflow-hidden bg-dark-900">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="heading-lg mt-4 text-white">
            고객이 말하는 <span className="gradient-text">Nova</span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <div className="h-full flex flex-col items-center justify-center text-center">
                  {/* Quote icon */}
                  <svg
                    className="w-16 h-16 text-primary-500/20 mb-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  {/* Content */}
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
                    &ldquo;{testimonials[current].content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="mt-10 flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary-500/30">
                      <Image
                        src={testimonials[current].image}
                        alt={testimonials[current].author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-white">
                        {testimonials[current].author}
                      </p>
                      <p className="text-sm text-white/60">
                        {testimonials[current].role}, {testimonials[current].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1)
                    setCurrent(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'w-8 bg-primary-500'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
