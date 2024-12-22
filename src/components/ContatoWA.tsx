import Image from 'next/image'
import Link from 'next/link'

export default function ContatoWA() {
    return (
        <Link href="https://web.whatsapp.com/" target="_blank">
            <div
                className={`fixed bottom-0 bg-green-600 flex w-1/5 h-16 rounded-t-3xl`}
            >
                <div className="mb-3 ml-5 mt-3">
                    <Image
                        src="/imagens/whatsapp.png"
                        alt="Imagem"
                        width={40}
                        height={40}
                    />
                </div>
                <div className="font-bold mb-5 ml-8 mt-5">
                    <h1>WhatsApp</h1>
                </div>
            </div>
        </Link>
    )
}
