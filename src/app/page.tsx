import { Header } from "./components/header/header"
import { Experience } from "./components/experience/experience"
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">      
      <Header/>
      <Experience/>
          <div className="infos">
            <h3>Linguagens</h3>
            <div className="languages-info">
              <span>🇺🇸 EN - Básico</span>
              <span>🇧🇷 PT-BR - Falante nátivo</span>
            </div>
            <h3>Educação</h3>
            <div className="educational-info">
              <span>🎓</span>
              <span>Análise e Desenvolvimento de Sistemas - Universidade Anhembi Morumbi</span>
            </div>
          </div>
          <div className="btns">
            <div className="social">
            </div>
            <button>Contato</button>
          </div>            
    </main>
  );
}
