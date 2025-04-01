"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { motion, AnimatePresence } from "framer-motion"

export default function SimulationCard() {
  const [creditValue, setCreditValue] = useState(600000)
  const [activeTab, setActiveTab] = useState("credit")
  const [monthlyPayment, setMonthlyPayment] = useState("3.743,55")

  // Calculate monthly payment based on credit value
  useEffect(() => {
    // This is a simplified calculation for demonstration
    const paymentMap: Record<number, string> = {
      300000: "1.895,67",
      400000: "2.527,56",
      500000: "3.159,45",
      600000: "3.743,55",
      700000: "4.367,48",
      800000: "4.991,40",
      900000: "5.615,33",
    }

    // Find the closest value in the map
    const creditValues = Object.keys(paymentMap).map(Number)
    const closest = creditValues.reduce((prev, curr) => {
      return Math.abs(curr - creditValue) < Math.abs(prev - creditValue) ? curr : prev
    })

    setMonthlyPayment(paymentMap[closest])
  }, [creditValue])

  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-center font-bold text-xl mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Chegou a hora de você comprar o seu <span className="bg-[#00A0E0] text-white px-1 py-0.5 rounded">IMÓVEL</span>
      </motion.h2>
      <motion.p
        className="text-center text-sm mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Simule o plano por:
      </motion.p>

      <motion.div
        className="flex gap-2 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <motion.button
          className={`px-4 py-2 rounded text-sm flex-1 transition-all duration-300 ${
            activeTab === "credit"
              ? "bg-[#00A0E0] text-white font-medium shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("credit")}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          aria-pressed={activeTab === "credit"}
        >
          Crédito
        </motion.button>
        <motion.button
          className={`px-4 py-2 rounded text-sm flex-1 transition-all duration-300 ${
            activeTab === "payment"
              ? "bg-[#00A0E0] text-white font-medium shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("payment")}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          aria-pressed={activeTab === "payment"}
        >
          Parcela
        </motion.button>
      </motion.div>

      <AnimatePresence mode="wait">
        {activeTab === "credit" ? (
          <motion.div
            key="credit"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm mb-2">Escolha o valor do crédito:</p>

            <div className="text-center mb-2">
              <span className="text-sm">R$</span>
              <motion.span
                className="text-3xl font-bold"
                key={creditValue}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {creditValue.toLocaleString()}
              </motion.span>
              <span className="text-sm">,00</span>
            </div>

            <div className="mb-6">
              <Slider
                defaultValue={[600000]}
                value={[creditValue]}
                max={1000000}
                min={250000}
                step={25000}
                onValueChange={(value) => setCreditValue(value[0])}
                className="my-4"
                aria-label="Valor do crédito"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>R$ 250.000</span>
                <span>R$ 1.000.000</span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="payment"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm mb-2">Escolha o valor da parcela:</p>

            <div className="text-center mb-2">
              <span className="text-sm">R$</span>
              <motion.span
                className="text-3xl font-bold"
                key={monthlyPayment}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {monthlyPayment}
              </motion.span>
            </div>

            <div className="mb-6">
              <Slider
                defaultValue={[3743.55]}
                max={6000}
                min={1000}
                step={100}
                onValueChange={(value) => setMonthlyPayment(value[0].toLocaleString().replace(".", ","))}
                className="my-4"
                aria-label="Valor da parcela"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>R$ 1.000,00</span>
                <span>R$ 6.000,00</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="w-full bg-[#F7941D] text-white py-3 rounded font-bold mb-4 shadow-lg"
        whileHover={{
          scale: 1.02,
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onClick={() => window.open("https://wa.link/hkgxjg", "_blank")}
      >
        SIMULAR AGORA
      </motion.button>

      <p className="text-center text-xs">Crédito mínimo: R$ 250.000,00</p>
    </motion.div>
  )
}

