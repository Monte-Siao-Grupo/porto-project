"use client"

import { CreditCard, FileText, Wallet, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const benefits = [
    {
      icon: <Wallet className="h-12 w-12 mb-4" />,
      title: "SEM JUROS E SEM ENTRADA",
      description:
        "O consórcio não exige que os indivíduos tenham um alto valor inicial para investir e não cobram taxas de juros.",
    },
    {
      icon: <CreditCard className="h-12 w-12 mb-4" />,
      title: "FLEXIBILIDADE PARA USAR O CRÉDITO",
      description:
        "Com o consórcio você pode usar seu crédito para comprar um bem à vista, o que te permite mais opções no momento da compra.",
    },
    {
      icon: <FileText className="h-12 w-12 mb-4" />,
      title: "MENOS BUROCRACIA",
      description: "No consórcio são necessários apenas alguns documentos básicos, diferente do financiamento.",
    },
    {
      icon: <Users className="h-12 w-12 mb-4" />,
      title: "PERSONALIZADO",
      description: "Os consórcios oferecem opções para diversos tipos de investimento.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section id="benefits" className="bg-[#00A0E0] py-20 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
          <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="0.5"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          As maiores vantagens do <span className="font-extrabold">Consórcio Porto</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-[#00A0E0]"
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="font-bold text-sm mb-4">{benefit.title}</h3>
                <p className="text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.button
            className="bg-white text-[#00A0E0] px-8 py-3 rounded-full font-bold shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => window.open("https://wa.link/hkgxjg", "_blank")}
          >
            FAZER UMA SIMULAÇÃO!
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

