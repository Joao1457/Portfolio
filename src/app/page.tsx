import { Header } from "./components/header/header"
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">      
      <Header/>      
        <div className="experience">
          <h3>Experiência</h3>
          <p>Meu nome é João Paulo Marques da Silva. Sou profissional da área de Análise e Desenvolvimento de Sistemas,<br /> com foco em desenvolvimento web.</p>
          <div className="experience-time">
          </div>
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
        </div>      
    </main>
  );
}
