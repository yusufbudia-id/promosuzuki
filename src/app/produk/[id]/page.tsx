import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, MessageCircle, Settings, Check } from 'lucide-react'
import { getProductById, getVariantsByModel, formatPrice, getPriceRange, getModelDescription, allProductsList } from '@/lib/products'
import Link from 'next/link'

export const dynamicParams = false

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await (params)
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  const whatsappNumber = '6281392057559'
  const variants = getVariantsByModel(product.model)
  const priceRange = getPriceRange(product.model)

  const specifications = [
    {
      label: 'Model',
      value: product.model,
    },
  ]

  const features = product.hasPromo
    ? [
        { text: 'Bonus Promo Tersedia', highlight: true },
        { text: 'Diskon Spesial', highlight: true },
        { text: 'Proses Cepat' },
        { text: 'Bantuan Pemesanan' },
      ]
    : [
        { text: 'Proses Cepat' },
        { text: 'Bantuan Pemesanan' },
        { text: 'Layanan Ramah' },
        { text: 'Dukungan Purna Jual' },
      ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/suzuki-logo.png"
                alt="Suzuki Logo"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <Button variant="ghost" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Beranda
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Product Detail Section */}
      <main className="flex-1 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-suzuki-blue mb-2">
                  {product.model}
                </h1>
                <p className="text-lg text-gray-600">
                  {product.type} • {product.transmission}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 mb-1">Mulai Dari</p>
                <p className="text-2xl sm:text-3xl font-bold text-suzuki-blue">
                  {formatPrice(priceRange.min)}
                </p>
              </div>
            </div>
            <p className="text-base text-gray-700 max-w-4xl">
              {getModelDescription(product.model)}
            </p>
          </div>

          {/* Price Range Card */}
          {product.hasPromo && (
            <Card className="bg-gradient-to-br from-suzuki-blue to-suzuki-blue-dark text-white mb-8">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <div className="inline-block px-4 py-2 bg-yellow-400 text-suzuki-blue-dark font-bold rounded-full text-sm">
                    PROMO SPESIAL
                  </div>
                  <p className="text-lg mb-2">
                    Varian {product.model} dengan harga mulai{' '}
                    <span className="text-3xl font-bold">{formatPrice(priceRange.min)}</span>
                  </p>
                  <p className="text-white/80">
                    Dapatkan diskon hingga {formatPrice(variants.reduce((max, v) =>
                      Math.max(max, v.bonusPromo || 0), 0
                    ))} untuk pembelian sekarang!
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* All Variants Table */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-suzuki-blue">
                Semua Varian {product.model}
              </CardTitle>
              <p className="text-gray-600">
                {variants.length} varian tersedia dengan lengkapnya harga
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Tipe</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Transmisi</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Harga OTR</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Bonus Promo</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-suzuki-blue">Harga Nett</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-suzuki-blue">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {variants.map((variant) => (
                      <tr
                        key={variant.id}
                        className={`border-b hover:bg-suzuki-blue/5 transition-colors ${
                          variant.id === id ? 'bg-suzuki-blue/10' : ''
                        }`}
                      >
                        <td className="px-4 py-4">
                          <div className="font-medium text-suzuki-blue">
                            {variant.model}
                          </div>
                          <div className="text-sm text-gray-600">
                            {variant.type}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-gray-700">
                          {variant.transmission}
                        </td>
                        <td className="px-4 py-4 text-right text-gray-600">
                          {formatPrice(variant.otrPrice)}
                        </td>
                        <td className="px-4 py-4 text-right">
                          {variant.bonusPromo ? (
                            <span className="text-green-600 font-medium">
                              -{formatPrice(variant.bonusPromo)}
                            </span>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="px-4 py-4 text-right font-bold text-suzuki-blue">
                          {formatPrice(variant.nettPrice)}
                        </td>
                        <td className="px-4 py-4 text-center">
                          <Button
                            asChild
                            size="sm"
                            className="bg-whatsapp hover:bg-green-600 text-white font-semibold"
                          >
                            <a
                              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                `Halo Valen, saya ingin tanya harga & promo untuk ${variant.model} ${variant.type} (Transmisi: ${variant.transmission})\nHarga Nett: ${formatPrice(variant.nettPrice)}`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <MessageCircle className="mr-1 h-3 w-3" />
                              Pesan
                            </a>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-suzuki-blue">
                {product.hasPromo ? 'Promo Spesial' : 'Keunggulan'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-center space-x-3 ${
                      feature.highlight ? 'text-green-600 font-medium' : 'text-gray-700'
                    }`}
                  >
                    <Check className="h-5 w-5 flex-shrink-0" />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Specifications */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-suzuki-blue">
                Spesifikasi Model
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <Settings className="h-5 w-5 text-suzuki-blue flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{spec.label}</p>
                      <p className="font-semibold text-suzuki-blue">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Sales Card */}
          <Card className="bg-suzuki-blue text-white">
            <CardHeader>
              <CardTitle className="text-white text-2xl">
                Tertarik? Hubungi Sales Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center mb-6">
                <div className="w-40 h-40 rounded-full bg-white/30 overflow-hidden flex items-center justify-center">
                  <img
                    src="/suzuki-sales-photo.png"
                    alt="Sales Valen"
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-white/80 mb-1">Nama Sales</p>
                  <p className="text-xl font-bold">Valen</p>
                </div>
                <div>
                  <p className="text-sm text-white/80 mb-1">Jabatan</p>
                  <p className="text-lg">Sales Suzuki Sumber Baru Mobil</p>
                </div>
                <div>
                  <p className="text-sm text-white/80 mb-1">Lokasi</p>
                  <p className="text-lg">Tegalrejo</p>
                </div>
                <div>
                  <p className="text-sm text-white/80 mb-1">WhatsApp</p>
                  <Button
                    asChild
                    className="mt-2 w-full bg-white text-suzuki-blue hover:bg-gray-100 font-semibold"
                  >
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        `Halo Valen, saya tertarik dengan ${product.model}. Mohon info lengkap semua varian dan harganya.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      0813 9205 7559
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-suzuki-blue-darker text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/" className="inline-block mb-4">
              <img
                src="/suzuki-logo.png"
                alt="Suzuki Logo"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-white/70 text-sm mb-4">
              Sales resmi Suzuki Sumber Baru Mobil. Melayani pembelian cash dan kredit dengan proses cepat dan mudah.
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-suzuki-blue-dark" asChild>
              <Link href="/">
                Kembali ke Beranda
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
