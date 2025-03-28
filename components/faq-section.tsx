"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ChevronDown } from "lucide-react"

export default function FaqSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Como funciona o consórcio?",
      answer:
        "O consórcio é um sistema de compra programada, onde um grupo de pessoas se reúne com o objetivo de formar poupança para a aquisição de bens ou serviços. Cada participante contribui com parcelas mensais que formam um fundo comum, administrado pela Porto Seguro.",
    },
    {
      question: "Quais as vantagens do consórcio em relação ao financiamento?",
      answer:
        "O consórcio não cobra juros, apenas taxa de administração, o que torna as parcelas mais acessíveis. Além disso, oferece maior flexibilidade na utilização do crédito e menos burocracia na aprovação.",
    },
    {
      question: "Como funciona a contemplação?",
      answer:
        "A contemplação pode ocorrer por sorteio ou lance. No sorteio, todos os participantes concorrem mensalmente. Já no lance, o consorciado oferece um valor antecipado de parcelas e, se for o maior lance, é contemplado.",
    },
    {
      question: "Posso usar o FGTS para dar lance?",
      answer:
        "Sim, é possível utilizar o FGTS para dar lance em consórcios imobiliários, desde que sejam respeitadas as regras estabelecidas para o uso do fundo.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="contact" className="py-20 container mx-auto px-4" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Ainda tem dúvidas sobre o Consórcio Porto?</h2>
        <p className="text-center mb-12 text-gray-600">
          Conheça algumas histórias de nossos clientes que tiveram seus objetivos conquistados.
        </p>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium">{faq.question}</span>
                <motion.span animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="h-5 w-5 text-[#00A0E0]" />
                </motion.span>
              </button>

              <motion.div
                id={`faq-answer-${index}`}
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
                aria-hidden={openIndex !== index}
              >
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.button
              className="bg-[#00A0E0] text-white px-8 py-3 rounded-full font-bold shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              FAZER UMA SIMULAÇÃO!
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

