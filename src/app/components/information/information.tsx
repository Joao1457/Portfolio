import { SectionTitle } from "../sectionTitle.tsx/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Linguagens"/>
            <div className="languages-info">
                <span>🇺🇸 EN - Básico</span>
                <span>🇧🇷 PT-BR - Falante nátivo</span>
            </div>
            <SectionTitle text="Educação"/>
            <div className="educational-info">
                <span>🎓</span>
                <span>Análise e Desenvolvimento de Sistemas - Universidade Anhembi Morumbi</span>
            </div>
        </div>
    )
}