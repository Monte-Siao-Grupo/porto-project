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
    <section id="simulation" className="bg-[#00A0E0] pt-16 pb-16 relative overflow-hidden min-h-screen flex items-center" ref={ref}>
      <div className="px-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
        {/* Coluna da esquerda - Título */}
        <motion.div
          className="text-white col-span-1 lg:col-span-1 flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <Image src="/images/logo-porto-siao.svg" alt="Logo Montesiao" width={150} height={150} className="mb-4" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-left">
              Aproveite parcelas 40% menores no Consórcio Porto Sião!
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6">
            {/* <motion.button
              className="bg-white text-[#00A0E0] px-6 py-3 rounded-full text-sm font-medium shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Saiba Mais
            </motion.button> */}
          </motion.div>
        </motion.div>

        {/* Coluna do meio - Imagem */}
        <motion.div
          className="relative col-span-1 lg:col-span-1 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-[400px] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full overflow-hidden">
                <Image src="/images/casa.svg" alt="imóvel" fill className="object-contain" priority />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coluna da direita - Simulador */}
        <motion.div
          className="relative col-span-1 lg:col-span-1 flex flex-col items-start"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <SimulationCard />
        </motion.div>
      </div>
    </section>
  )
}

