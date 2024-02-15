import { InstaIcon } from "../icons/insta-icon"
import { GitIcon } from "../icons/git-icon"
import { LinkedinIcon } from "../icons/linkedin-icon"

import "./social-btns.scss"

interface SocialBtnsProps {

}
export function SocialBtns(props : SocialBtnsProps){
    return(
        <div className="social">
           <a href=""><InstaIcon/></a>
            <a href="https://github.com/Joao1457"><GitIcon/></a>
            <a href="https://www.linkedin.com/in/joao-paulo-marques-da-silva-b7656418b/"><LinkedinIcon/></a>            
        </div>
    )
}