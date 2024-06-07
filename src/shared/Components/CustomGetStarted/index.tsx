import { ICONS } from "../../../assets"
import { TEXT } from "../../constants"
import './style.css'
const GetStartedButton = ()=>{
    return(
        <button className="button"><span>{TEXT.GET_STARTED}</span>
        <img src={ICONS.RightArrow} id="arrow" height='16' width='16'></img>
        </button>
    )
}

export default GetStartedButton