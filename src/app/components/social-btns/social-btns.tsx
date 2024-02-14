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
            <a href=""><GitIcon/></a>
            <a href=""><LinkedinIcon/></a>            
        </div>
    )
}