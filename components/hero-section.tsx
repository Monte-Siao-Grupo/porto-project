"use client"
import Image from "next/image"
import SimulationCard from "./simulation-card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export default function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  return (
    <section id="simulation" className="bg-gradient-to-r from-[#00A0E0] to-[#0077B6] pt-16 pb-16 relative overflow-hidden min-h-screen flex items-center" ref={ref}>
      <div className="container mx-auto max-w-7xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Coluna da esquerda - Título e Simulador */}
        <motion.div
          className="text-white col-span-1 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-5xl lg:text-5xl font-bold mb-4 leading-tight text-left">
              Aproveite parcelas 40% menores no Consórcio Porto Sião!
            </h1>
          </motion.div>
          <motion.div variants={itemVariants} className="mt-6">
          </motion.div>
          
          {/* Simulador */}
          <motion.div
            className="w-left mt-18 text-black"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <SimulationCard />
          </motion.div>
        </motion.div>

        {/* Coluna da direita - Imagem */}
        <motion.div
          className="relative col-span-1 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-[700px] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full overflow-hidden">
                <Image src="/images/carro-siao.svg" alt="imóvel" fill className="object-contain" priority />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}