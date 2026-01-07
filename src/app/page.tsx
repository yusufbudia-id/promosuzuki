'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Menu, X, Star, MapPin, Phone, MessageCircle, ChevronRight, Settings } from 'lucide-react'
import { products, formatPrice, uniqueModels, getVariantsByModel, getPriceRange, getModelDescription, getProductImage } from '@/lib/products'

// Product Card Component
function ProductCard({
  product,
  onClick,
  showVariants = false,
  variantCount = 0,
}: {
  product: any
  onClick: () => void
  showVariants?: boolean
  variantCount?: number
}) {
  return (
    <Card
      className="relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
      onClick={onClick}
    >
      <CardHeader className="pb-4">
        <div className="aspect-video bg-gradient-to-br from-suzuki-blue-light/20 to-suzuki-blue-dark/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
          <img
            src={getProductImage(product.model)}
            alt={product.model}
            className="w-full h-full object-cover"
          />
        </div>
        <CardTitle className="text-lg sm:text-xl text-suzuki-blue">
          {product.model}
        </CardTitle>
        <p className="text-sm text-gray-600 font-medium">
          {product.type}
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {showVariants && (
          <p className="text-sm text-blue-600 font-medium mb-2">
            {variantCount} varian tersedia • Lihat detail untuk semua harga
          </p>
        )}
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-gray-600">
            <Settings className="h-4 w-4 mr-2 text-suzuki-blue flex-shrink-0" />
            <span>Transmisi: {product.transmission}</span>
          </div>
        </div>
        <div className="pt-2 space-y-1">
          {product.hasPromo && (
            <>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Harga OTR</span>
                <span className="line-through">{formatPrice(product.otrPrice)}</span>
              </div>
              <div className="flex justify-between text-xs text-green-600 font-medium">
                <span>Bonus Promo</span>
                <span>-{formatPrice(product.bonusPromo!)}</span>
              </div>
            </>
          )}
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-suzuki-blue">
              {product.hasPromo ? 'Harga Nett' : 'Mulai Dari'}
            </span>
            <span className="text-lg sm:text-xl font-bold text-suzuki-blue">
              {formatPrice(product.nettPrice)}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full bg-suzuki-blue hover:bg-suzuki-blue-dark text-white font-semibold"
        >
          {showVariants ? 'Lihat Semua Varian' : 'Lihat Detail'}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function Home() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [selectedModel, setSelectedModel] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll
      const sections = ['home', 'produk', 'harga', 'testimoni', 'kontak']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const whatsappNumber = '6281392057559'

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'produk', label: 'Produk' },
    { id: 'harga', label: 'Harga' },
    { id: 'testimoni', label: 'Testimoni' },
    { id: 'kontak', label: 'Kontak' },
  ]

  const handleProductClick = (productId: string) => {
    router.push(`/produk/${productId}`)
  }

  const testimonials = [
    {
      id: 1,
      name: 'Budi Santoso',
      location: 'Tegal',
      rating: 5,
      text: 'Pelayanan ramah, proses cepat, dan dibantu sampai mobil diterima. Valen sangat responsif!',
      avatar: 'BS',
    },
    {
      id: 2,
      name: 'Siti Rahayu',
      location: 'Brebes',
      rating: 5,
      text: 'Beli Fronx di sini sangat memuaskan. Diskon menarik dan proses kredit cepat.',
      avatar: 'SR',
    },
    {
      id: 3,
      name: 'Ahmad Hidayat',
      location: 'Pemalang',
      rating: 5,
      text: 'Sales Suzuki terbaik! Penjelasan detail dan profesional. Sangat recommended.',
      avatar: 'AH',
    },
  ]

  const promos = [
    {
      title: 'Diskon Puluhan Juta',
      description: 'Dapatkan diskon spesial untuk pembelian cash dan kredit',
      icon: '🎉',
    },
    {
      title: 'DP Rendah Mulai 10%',
      description: 'Pembayaran fleksibel dengan tenor hingga 5 tahun',
      icon: '💰',
    },
    {
      title: 'Gratis Aksesoris',
      description: 'Dapatkan aksesoris eksklusif untuk setiap pembelian',
      icon: '🎁',
    },
  ]

  // Featured models (3 products)
  const featuredModels = ['Fronx', 'XL7 Hybrid', 'Ertiga Hybrid']
  const featuredProducts = products.filter(p => featuredModels.includes(p.model))

  // Regular models (4 products)
  const regularProducts = products.filter(p => !featuredModels.includes(p.model))

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <img
                src="/suzuki-logo.png"
                alt="Suzuki Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? isScrolled
                        ? 'bg-suzuki-blue text-white'
                        : 'bg-white text-suzuki-blue'
                      : isScrolled
                        ? 'text-gray-700 hover:bg-gray-100'
                        : 'text-white hover:bg-white/20'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                asChild
                className="ml-4 bg-whatsapp hover:bg-green-600 text-white font-semibold"
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo Valen, saya tertarik dengan mobil Suzuki. Mohon info lebih lanjut.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled || mobileMenuOpen
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-3 rounded-lg text-left font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-suzuki-blue text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  asChild
                  className="mt-4 w-full bg-whatsapp hover:bg-green-600 text-white font-semibold"
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo Valen, saya tertarik dengan mobil Suzuki. Mohon info lebih lanjut.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-suzuki-blue-darker via-suzuki-blue to-suzuki-blue-light overflow-hidden pt-20"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                             radial-gradient(circle at 80% 20%, white 1px, transparent 1px),
                             radial-gradient(circle at 40% 80%, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight animate-fade-in-up">
              Suzuki Fronx –{' '}
              <span className="text-yellow-300">Stylish, Irit, dan Canggih</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in-up stagger-1">
              Pilihan tepat untuk mobil keluarga dan anak muda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up stagger-2">
              <Button
                asChild
                size="lg"
                className="bg-whatsapp hover:bg-green-600 text-white font-bold text-base sm:text-lg px-8 py-6 h-auto shadow-2xl hover:scale-105 transition-transform"
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo Valen, saya tertarik dengan mobil Suzuki. Mohon info lebih lanjut.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                  Chat WhatsApp Sekarang
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-suzuki-blue font-bold text-base sm:text-lg px-8 py-6 h-auto"
                onClick={() => scrollToSection('produk')}
              >
                <button>
                  Lihat Produk
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-12 sm:mt-16 relative">
            <div className="mx-auto max-w-4xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/20 animate-fade-in-up stagger-3">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src="/suzuki-fronx-hero.png"
                  alt="Suzuki Fronx - Stylish, Irit, dan Canggih"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Model Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedModel(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedModel === null
                  ? 'bg-suzuki-blue text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Semua Model
            </button>
            {uniqueModels.map((model) => (
              <button
                key={model}
                onClick={() => setSelectedModel(model)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedModel === model
                    ? 'bg-suzuki-blue text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {model}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produk" className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-suzuki-blue mb-4">
              Katalog Produk Suzuki
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {selectedModel
                ? `Tampilan ${selectedModel} (${getVariantsByModel(selectedModel).length} varian tersedia)`
                : `Tampilkan semua model (${uniqueModels.length} produk)`
              }
            </p>
          </div>

          <div className="space-y-8">
            {/* Featured Products */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-suzuki-blue mb-4">Produk Unggulan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {featuredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => handleProductClick(product.id)}
                    showVariants={true}
                    variantCount={getVariantsByModel(product.model).length}
                  />
                ))}
              </div>
            </div>

            {/* All Products */}
            <div>
              <h3 className="text-xl font-bold text-suzuki-blue mb-4">Semua Model</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                {(selectedModel ? getVariantsByModel(selectedModel) : regularProducts).map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => handleProductClick(product.id)}
                    showVariants={selectedModel !== null}
                    variantCount={getVariantsByModel(product.model).length}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Information Section */}
      <section id="harga" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-suzuki-blue mb-4">
              Harga & Promo
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Dapatkan penawaran terbaik dengan promo menarik untuk setiap pembelian
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {promos.map((promo, index) => (
              <Card
                key={index}
                className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="text-5xl mb-4">{promo.icon}</div>
                  <CardTitle className="text-xl text-suzuki-blue">
                    {promo.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{promo.description}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-suzuki-blue text-suzuki-blue hover:bg-suzuki-blue hover:text-white"
                  >
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Halo Valen, saya ingin tahu promo ${promo.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tanya Promo Ini
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-suzuki-blue text-white">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl text-white">
                  Ingin Harga Lengkap & Simulasi Kredit?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-6">
                  Hubungi Valen sekarang untuk mendapatkan penawaran terbaik yang sesuai dengan budget Anda
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-whatsapp hover:bg-green-600 text-white font-bold text-lg px-8 py-6 h-auto"
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo Valen, saya ingin simulasi kredit')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Hubungi Valen via WhatsApp
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimoni" className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-suzuki-blue mb-4">
              Apa Kata Pelanggan Kami
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Kepuasan pelanggan adalah prioritas kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-suzuki-blue text-white flex items-center justify-center font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-suzuki-blue">
                        {testimonial.name}
                      </CardTitle>
                      <p className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-3 w-3 mr-1" />
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="kontak"
        className="py-20 sm:py-24 bg-gradient-to-br from-suzuki-blue-darker via-suzuki-blue-dark to-suzuki-blue text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Hubungi Kami
              </h2>
              <p className="text-lg sm:text-xl text-white/90">
                Siap membantu Anda menemukan mobil impian dengan penawaran terbaik
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-16 w-16 rounded-full bg-white/20 overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <img
                      src="/suzuki-sales-photo.png"
                      alt="Sales Valen"
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Sales Suzuki</h3>
                    <p className="text-2xl sm:text-3xl font-bold">Valen</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Lokasi</h3>
                    <p className="text-xl">Tegalrejo</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
                    <p className="text-xl font-semibold">0813 9205 7559</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10">
              <div className="text-center space-y-6">
                <div className="h-40 w-40 mx-auto rounded-full bg-white/30 overflow-hidden flex items-center justify-center">
                  <img
                    src="/suzuki-sales-photo.png"
                    alt="Sales Valen"
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">
                  Hubungi Valen via WhatsApp
                </h3>
                <p className="text-white/90">
                  Respon cepat, layanan ramah, dan penawaran terbaik untuk Anda
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-whatsapp hover:bg-green-600 text-white font-bold text-lg px-8 py-6 h-auto shadow-2xl hover:scale-105 transition-transform"
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo Valen, saya ingin konsultasi')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat WhatsApp Sekarang
                  </a>
                </Button>
                <p className="text-sm text-white/70">
                  Klik tombol di atas untuk langsung terhubung dengan Valen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-suzuki-blue-darker text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="/suzuki-logo.png"
                  alt="Suzuki Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <p className="text-white/70 text-sm">
                Sales resmi Suzuki Sumber Baru Mobil. Melayani pembelian cash dan kredit dengan proses cepat dan mudah.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Menu</h4>
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Hubungi Kami</h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center text-white/70">
                  <MapPin className="h-4 w-4 mr-2" />
                  Tegalrejo
                </p>
                <p className="flex items-center text-white/70">
                  <Phone className="h-4 w-4 mr-2" />
                  0813 9205 7559
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm">
            <p>© 2024 Suzuki Sumber Baru Mobil. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo Valen, saya tertarik dengan mobil Suzuki. Mohon info lebih lanjut.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 whatsapp-pulse group"
        aria-label="Chat via WhatsApp"
      >
        <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
      </a>
    </div>
  )
}
