'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950" />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary-500/20 to-purple-500/20 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-pink-500/15 to-orange-500/15 blur-[100px]"
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              새 프로젝트 문의
            </span>

            <h2 className="heading-xl">
              <span className="text-white">다음 프로젝트를</span>
              <br />
              <span className="gradient-text">함께 시작할까요?</span>
            </h2>

            <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              아이디어를 현실로 만들 준비가 되셨나요?
              <br />
              지금 바로 연락주세요. 무료 상담을 제공합니다.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/contact">
              <motion.button
                className="btn-primary text-lg px-10 py-5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                프로젝트 문의하기
                <svg
                  className="ml-2 w-5 h-5 inline"
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
              </motion.button>
            </Link>
            <a href="mailto:hello@nova-agency.com">
              <motion.button
                className="btn-secondary text-lg px-10 py-5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="mr-2 w-5 h-5 inline"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                이메일 보내기
              </motion.button>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="mt-16 pt-16 border-t border-white/5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-sm text-white/40 mb-6">신뢰받는 파트너</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-40">
              {['Samsung', 'LG', 'Naver', 'Kakao', 'Hyundai'].map((company) => (
                <span
                  key={company}
                  className="text-lg md:text-xl font-display font-bold text-white/60"
                >
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
