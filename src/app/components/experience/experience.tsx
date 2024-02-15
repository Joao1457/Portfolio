import Image from "next/image"
import { SectionTitle } from "../sectionTitle.tsx/section-title"

import "./experience.scss"

export function Experience(){
    return(
        <div className="experience">
            <SectionTitle text="Experiência"/>
            <p>Meu nome é João Paulo Marques da Silva. Sou profissional da área de Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento web.</p>
            <div className="experience-time">
                <div className="experience-language">
                    <Image
                    src="/java.svg"
                    alt="java"
                    width={40}
                    height={40}
                    priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1">
                        <span>  1 ano </span>                        
                        </div>
                    </div>
                </div>                
                <div className="experience-language">
                    <Image
                    src="/php.svg"
                    alt=""
                    width={40}
                    height={40}
                    priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2">
                            <span>1 ano e 7 meses</span>                        
                        </div>
                    </div>
                </div>
                <div className="experience-language">
                    <Image
                    src="/javascript.svg"
                    alt=""
                    width={40}
                    height={40}
                    priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2">
                            <span>1 ano e 7 meses</span>                        
                        </div>
                    </div>
                </div>                
                <div className="experience-language">
                    <Image
                    src="/typescript.svg"
                    alt=""
                    width={40}
                    height={40}
                    priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2">
                            <span>1 ano e 7 meses</span>                        
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
