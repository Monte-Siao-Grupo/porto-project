"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function PricingTable() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const creditOptions = [
    { credit: "300 MIL", traditional: "1.895,67", flex: "1.449,42" },
    { credit: "400 MIL", traditional: "2.527,56", flex: "1.932,56" },
    { credit: "500 MIL", traditional: "3.159,45", flex: "2.415,70" },
    { credit: "600 MIL", traditional: "3.743,55", flex: "2.862,30" },
    { credit: "700 MIL", traditional: "4.367,48", flex: "3.339,35" },
    { credit: "800 MIL", traditional: "4.991,40", flex: "3.816,40" },
    { credit: "900 MIL", traditional: "5.615,33", flex: "4.293,45" },
  ]

  return (
    <section id="plans" className="py-20 container mx-auto px-4" ref={ref}>
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Confira os <span className="text-[#00A0E0]">melhores planos</span> para você aproveitar o seu imóvel
        </h2>
      </motion.div>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <motion.table
          className="w-full border-collapse"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <thead>
            <tr>
              <th className="bg-[#00A0E0] text-white p-4 text-center border border-[#0090D0]">CRÉDITO</th>
              <th className="bg-[#00A0E0] text-white p-4 text-center border border-[#0090D0]">PARCELA TRADICIONAL</th>
              <th className="bg-[#00A0E0] text-white p-4 text-center border border-[#0090D0]">PARCELA PORTO SIÃO</th>
            </tr>
          </thead>
          <tbody>
            {creditOptions.map((option, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                whileHover={{ backgroundColor: "#f0f9ff" }}
                className="transition-colors duration-200"
              >
                <td className="border border-[#00A0E0] p-4 text-center font-bold">
                  <span className="text-sm">R$</span> {option.credit}
                </td>
                <td className="border border-[#00A0E0] p-4 text-center">
                  <span className="text-sm">R$</span>{" "}
                  <span className="line-through text-gray-500 mr-1">{option.traditional}</span>
                </td>
                <td className="border border-[#00A0E0] p-4 text-center font-medium text-[#00A0E0]">
                  <span className="text-sm">R$</span> {option.flex}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>

      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.button
          className="bg-[#00A0E0] text-white px-8 py-3 rounded-full font-medium shadow-lg"
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
    </section>
  )
}

