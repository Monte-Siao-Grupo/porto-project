"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

interface Testimonial {
  id: string
  name: string
  image: string
  videoUrl: string
  title: string
}

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Roberto Silva",
      image: "/images/depoimento1.svg",
      videoUrl: "https://example.com/video1.mp4",
      title: "Conquistou a casa própria",
    },
    {
      id: "2",
      name: "Carlos Mendes",
      image: "/images/depoimento2.svg",
      videoUrl: "https://example.com/video2.mp4",
      title: "Realizou o sonho do apartamento",
    },
    {
      id: "3",
      name: "Ana Luiza",
      image: "/images/depoimento3.svg",
      videoUrl: "https://example.com/video3.mp4",
      title: "Investiu em um imóvel comercial",
    },
  ]

  const handlePlayVideo = (id: string) => {
    setActiveVideo(id)

    // Simula a reprodução do vídeo (em uma implementação real, você usaria a API do player de vídeo)
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((e) => console.log("Erro ao reproduzir vídeo:", e))
      }
    }, 100)
  }

  const handleCloseVideo = () => {
    setActiveVideo(null)
  }

  return (
    <section id="testimonials" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ainda tem dúvidas sobre o Consórcio Porto?</h2>
          <p className="text-gray-600">
            Conheça algumas histórias de nossos clientes que tiveram seus objetivos conquistados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Card principal destacado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-gray-100 rounded-lg overflow-hidden shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Conheça algumas histórias de sucesso</h3>
                <p className="text-gray-600 mb-6">
                  Nossos clientes compartilham como o Consórcio Porto ajudou a realizar seus sonhos.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#00A0E0] text-white px-6 py-3 rounded-full font-medium"
                  onClick={() => handlePlayVideo("featured")}
                >
                  Assistir Depoimentos
                </motion.button>
              </div>

              <div className="relative">
                <div className="relative aspect-video md:aspect-square overflow-hidden">
                  <Image
                    src="/images/depoimento4.svg"
                    alt="Depoimento em destaque"
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={() => handlePlayVideo("featured")}
                  >
                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-black bg-opacity-50 rounded-full p-4"
                      >
                        <Play size={40} className="text-white" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4">
                  <Image src="/images/porto-vale-logo.png" alt="Porto Vale Consórcio" width={100} height={30} />
                </div>

                <div className="absolute bottom-0 right-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                  <p className="text-lg">
                    Conheça a <span className="text-[#00A0E0] font-bold">história</span> do nosso{" "}
                    <span className="block">cliente</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cards de depoimentos */}
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={() => handlePlayVideo(testimonial.id)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-black bg-opacity-50 rounded-full p-3"
                    >
                      <Play size={30} className="text-white" />
                    </motion.div>
                  </div>
                </div>

                <div className="absolute top-4 right-4">
                  <Image src="/images/porto-vale-logo.png" alt="Porto Vale Consórcio" width={80} height={24} />
                </div>

                <div className="absolute bottom-0 right-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                  <p>
                    Conheça a <span className="text-[#00A0E0] font-bold">história</span> do nosso{" "}
                    <span className="block">cliente</span>
                  </p>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#00A0E0] text-white px-8 py-3 rounded-full font-bold shadow-md"
            onClick={() => window.open("https://wa.link/y5f0ps", "_blank")}
          >
            FAZER UMA SIMULAÇÃO!
          </motion.button>
        </div>
      </div>

      {/* Modal de vídeo */}
      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={handleCloseVideo}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute -top-12 right-0 text-white"
              onClick={handleCloseVideo}
            >
              Fechar
            </motion.button>

            <div className="bg-black rounded-lg overflow-hidden aspect-video">
              {/* Em uma implementação real, você usaria um player de vídeo como o React Player */}
              <video
                ref={videoRef}
                controls
                className="w-full h-full"
                poster={
                  activeVideo === "featured"
                    ? "/images/testimonial-featured.png"
                    : testimonials.find((t) => t.id === activeVideo)?.image
                }
              >
                <source
                  src={
                    activeVideo === "featured"
                      ? "https://www.youtube.com/shorts/4HMqx79I1ag"
                      : testimonials.find((t) => t.id === activeVideo)?.videoUrl
                  }
                  type="video/mp4"
                />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}

