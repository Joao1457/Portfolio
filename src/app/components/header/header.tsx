import Image from "next/image"

import "./header.scss"

export function Header(){
    return (
            <div className="header">            
              <div>
                <h1>Olá, Eu sou o João Paulo! 👋</h1>
                <h2>Desenvolvedor de Software</h2>
              </div>
            <Image
              src="/eu.jpg"
              alt="Minha foto"
              width={300}
              height={300}
              priority
            />
          </div>
      )
    }