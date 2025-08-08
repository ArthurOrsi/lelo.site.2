'use client'

import { Phone, MapPin, Clock, Mail, Wrench, Car, Shield, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/logo-lelo-sem-fundo.png" alt="Lelo Auto Peças" className="h-12 w-auto" />
            </div>
            <nav className="hidden md:flex space-x-6 leading-[1.75em] tracking-normal">
              <a href="https://www.pitstop.com.br/leloautopecas" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-medium transition-colors leading-[1.0rem] bg-green-600">
                Compre Online
              </a>
              <a href="#inicio" className="hover:text-green-400 transition-colors">Inicio</a>
              <a href="#sobre" className="hover:text-green-400 transition-colors">Sobre</a>
              <a href="#servicos" className="hover:text-green-400 transition-colors">Serviços</a>
              <a href="#contato" className="hover:text-green-400 transition-colors">Contato</a>
            </nav>
            <Button className="bg-green-600 hover:bg-green-700 ml-4" asChild>
              <a href="https://wa.me/5548991803586" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" />
                Contato
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-r from-green-800 to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Lelo Auto Peças</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Há mais de 25 anos fornecendo peças, acessórios, escapamentos e lubrificantes com qualidade, preço justo e atendimento especializado em Biguaçu e região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <a href="https://wa.me/5548991803586" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-white hover:text-slate-900 text-black" asChild>
              <a href="https://www.google.com/maps/dir//Auto+Peças,+Bateria+de+Carro,+Baterias+Moura,+Amortecedor+Carro+Correia+Dentada,+Cabo+e+Vela,+Disco+de+Freio,+Kit+de+Embreagem+-+R.+João+Born,+479+-+Centro,+Biguaçu+-+SC,+88160-074/@-27.4911502,-48.7376425,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95274dcb74d4dbc1:0xedad003">
              <MapPin className="mr-2 h-5 w-5" />
              Nossa Localização
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Sobre a Lelo Auto Peças</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fundada em 1996, Lelo Auto Peças se consolidou como referência no mercado de autopeças, 
              oferecendo produtos de qualidade e um atendimento diferenciado para nossos clientes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Qualidade Garantida</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Trabalhamos apenas com marcas reconhecidas no mercado, 
                  garantindo a qualidade e durabilidade das peças.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Atendimento Especializado</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nossa equipe possui amplo conhecimento técnico para 
                  orientar você na escolha da peça ideal para seu veículo.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Wrench className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Experiência Comprovada</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Mais de 25 anos de experiência no mercado automotivo, 
                  atendendo desde carros populares até veículos importados.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Nossos Produtos e Serviços</h3>
            <p className="text-lg text-gray-600">
              Oferecemos uma ampla gama de produtos e serviços para manter seu veículo sempre em perfeito estado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h4 className="font-semibold text-lg mb-3 text-slate-900">Peças de Motor</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Filtros de óleo e ar</li>
                <li>• Velas de ignição</li>
                <li>• Correias e tensores</li>
                <li>• Bombas d'água</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h4 className="font-semibold text-lg mb-3 text-slate-900">Sistema de Freios</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Pastilhas e lonas</li>
                <li>• Discos de freio</li>
                <li>• Fluido de freio</li>
                <li>• Cilindros e mangueiras</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h4 className="font-semibold text-lg mb-3 text-slate-900">Suspensão</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Amortecedores</li>
                <li>• Molas e batentes</li>
                <li>• Buchas e pivôs</li>
                <li>• Barras estabilizadoras</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h4 className="font-semibold text-lg mb-3 text-slate-900">Elétrica</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Baterias</li>
                <li>• Alternadores</li>
                <li>• Motores de partida</li>
                <li>• Lâmpadas e fusíveis</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h4 className="font-semibold text-lg mb-3 text-slate-900">Escapamentos</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Escapamentos completos</li>
                <li>• Silenciosos</li>
                <li>• Catalisadores</li>
                <li>• Tubos e conexões</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h4 className="font-semibold text-lg mb-3 text-slate-900">Lubrificantes</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Óleos de motor</li>
                <li>• Óleos de câmbio</li>
                <li>• Fluidos hidráulicos</li>
                <li>• Graxas e aditivos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Entre em Contato</h3>
            <p className="text-lg text-gray-300">
              Estamos prontos para atender você. Venha nos visitar ou entre em contato conosco.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Phone className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Telefone</h4>
              <p className="text-gray-300">(48) 3243-2116</p>
            </div>

            <div className="text-center">
              <MapPin className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Endereço</h4>
              <p className="text-gray-300">R. João Born, 479</p>
              <p className="text-gray-300">Centro - Biguaçu/SC</p>
              <p className="text-gray-300">88160-074</p>
            </div>

            <div className="text-center">
              <Clock className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Horário</h4>
              <p className="text-gray-300">Seg - Sex: 8h às 12h</p>
              <p className="text-gray-300">13h30 às 18h</p>
              <p className="text-gray-300">Sáb: 8h às 12h</p>
              <p className="text-gray-300">Dom: Fechado</p>
            </div>

            <div className="text-center">
              <Phone className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">WhatsApp</h4>
              <p className="text-gray-300">(48) 99180-3586</p>
              <a href="https://wa.me/5548991803586" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                Conversar no WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h4 className="text-xl font-semibold mb-6">Nos Acompanhe</h4>
            <div className="flex justify-center gap-6 mb-8">
              <a href="https://www.instagram.com/leloautopecas?utm_source=ig_web_button_share_sheet&igsh=MWxyemc5dmk1ZWtwYw==" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-colors">
                Instagram
              </a>
              <a href="https://wa.me/5548991803586" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-colors">
                <Phone className="inline mr-2 h-5 w-5" />
                WhatsApp
              </a>
              <a href="https://www.pitstop.com.br/leloautopecas" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-colors">
                Pitstop
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Car className="h-6 w-6 text-green-400" />
              <span className="font-semibold">Lelo Auto Peças</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300">© 2025 Lelo Auto Peças. Todos os direitos reservados.</p>
              <p className="text-sm text-gray-400 mt-1">CNPJ: 10.844.481/0001-75</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
