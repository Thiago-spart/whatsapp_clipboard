import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import toast from 'react-hot-toast'
import QRCode from 'react-qr-code'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const [phoneNumberValue, setPhoneNumberValue] = React.useState<string>('')
  const [optionalMessageValue, setOptionalMessageValue] =
    React.useState<string>('')
  const [isValid, setIsValid] = React.useState<boolean>(false)

  const whatsappLink = `https://wa.me/${phoneNumberValue}${
    optionalMessageValue
      ? `?text=${encodeURIComponent(optionalMessageValue)}`
      : ''
  }`

  const handleCopyLink = () => {
    if (!isValid) {
      toast.error(
        'Por favor, insira um número de telefone válido com código do país.',
      )
      return
    }

    const baseUrl = 'https://wa.me/'
    const messageParam = optionalMessageValue
      ? `?text=${encodeURIComponent(optionalMessageValue)}`
      : ''
    const fullUrl = `${baseUrl}${phoneNumberValue}${messageParam}`

    try {
      navigator.clipboard.writeText(fullUrl)
      toast.success('Link copiado para a área de transferência!')
    } catch (error) {
      toast.error('Falha ao copiar o link. Tente novamente.')
    }
  }

  React.useEffect(() => {
    setIsValid(isValidPhoneNumber(phoneNumberValue))
  }, [phoneNumberValue])

  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100">
        <div className="flex">
          <div className="flex-1 p-8 lg:p-12">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-5xl font-bold bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  WhatsApp clipboard link generator
                </h1>
                <p className="text-gray-600 text-lg">
                  Copie e cole o número abaixo para gerar o link de conversa com
                  esse contato no WhatsApp
                </p>
                <Separator className="mt-8" />
              </div>

              {/* Career Summary */}
              <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
                <CardContent className="w-full">
                  <form action="" className="space-y-4 w-full">
                    <div>
                      <label
                        htmlFor={'phoneNumber'}
                        className="block font-bold text-xl text-gray-700"
                      >
                        Número de telefone{' '}
                        <span className="text-red-500">*</span>
                      </label>
                      <PhoneInput
                        placeholder="Número de telefone com código do país"
                        value={phoneNumberValue}
                        autoComplete="on"
                        autoFormatting
                        international
                        defaultCountry="BR"
                        onChange={(value) => setPhoneNumberValue(value || '')}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <label
                      htmlFor="optionalMessage"
                      className="block font-bold text-xl text-gray-700"
                    >
                      Texto opcional para a mensagem pré-definida
                      <textarea
                        value={optionalMessageValue}
                        placeholder="Mensagem pre-definida"
                        id="optionalMessage"
                        name="optionalMessage"
                        rows={4}
                        onChange={(e) =>
                          setOptionalMessageValue(e.target.value)
                        }
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 text-md mt-4"
                      />
                    </label>

                    <div className="flex-col md:flex-row gap-4 flex justify-center">
                      <button
                        type="button"
                        className="w-full md:w-auto px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300 font-bold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 cursor-pointer"
                        onClick={handleCopyLink}
                      >
                        Copiar link
                      </button>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors duration-300 font-bold focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                      >
                        Entrar em conversa
                      </a>
                    </div>
                  </form>

                  {isValid ? (
                    <div className="mt-8 justify-center flex flex-col items-center gap-4">
                      <p className="text-xl font-bold text-gray-700">
                        Leia o QR Code e acesse a conversa diretamente no seu
                        celular
                      </p>
                      <QRCode value={whatsappLink} />
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
