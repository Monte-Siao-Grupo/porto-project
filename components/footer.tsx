"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Image src="/images/logo-azul.svg" alt="Porto Sião" width={150} height={40} className="w-auto h-8 mb-4" />
              <p className="text-gray-600 mb-4">
                Consórcio Porto Sião: a melhor forma de conquistar seu imóvel com parcelas que cabem no seu bolso.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="text-[#00A0E0] hover:text-[#0080B0] transition-colors duration-200"
                  whileHover={{ y: -3 }}
                  whileTap={{ y: 0 }}
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-[#00A0E0] hover:text-[#0080B0] transition-colors duration-200"
                  whileHover={{ y: -3 }}
                  whileTap={{ y: 0 }}
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-[#00A0E0] hover:text-[#0080B0] transition-colors duration-200"
                  whileHover={{ y: -3 }}
                  whileTap={{ y: 0 }}
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-[#00A0E0] hover:text-[#0080B0] transition-colors duration-200"
                  whileHover={{ y: -3 }}
                  whileTap={{ y: 0 }}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#00A0E0] transition-colors duration-200">
                    Sobre o Consórcio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#00A0E0] transition-colors duration-200">
                    Simulação
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#00A0E0] transition-colors duration-200">
                    Planos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#00A0E0] transition-colors duration-200">
                    Perguntas Frequentes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#00A0E0] transition-colors duration-200">
                    Contato
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-bold text-lg mb-4">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Phone size={18} className="text-[#00A0E0] mr-2" />
                  <span className="text-gray-600">0800 000-0000</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="text-[#00A0E0] mr-2" />
                  <span className="text-gray-600">contato@siao.com.br</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="text-xs text-gray-500 text-center mb-6 max-w-4xl mx-auto">
          <p>
            ¹ Valor das parcelas reduzidas em 40% até a contemplação; após a contemplação as parcelas seguem o valor
            integral. 2% de taxa de administração antecipada no ato da venda. Consulte o valor de acordo com o CET. ²
            IPCA: Fundo de reserva de 2%. Seguro de vida sobre o saldo devedor de 0,035%. Taxa de administração total de
            17%.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t pt-6">
          <div className="text-xs text-gray-500 mb-4 md:mb-0">
            <p>CNPJ 00.000.000/0000-00</p>
            <p>© {currentYear} Porto Sião<object data="" type=""></object>. Todos os direitos reservados.</p>
          </div>

          <div className="flex flex-col items-end">
            <div className="text-[#00A0E0] font-bold mb-2">Atendimento: 0000 000-0000</div>
            <div className="flex gap-4 text-xs">
              <a href="#" className="text-[#00A0E0] hover:text-[#0080B0] transition-colors duration-200">
                Políticas de privacidade
              </a>
              <a href="#" className="text-[#00A0E0] hover:text-[#0080B0] transition-colors duration-200">
                Coleta de dados
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

