import { ICONS } from "../../../assets";
import "./style.css";
const LanguageInput = () => {
  return (
    <div id="languageContainer">
        <img src={ICONS.LanguageLogo} alt=""/>
        <select name="language" id="language">
          <option value="हिन्दी">
            हिन्दी
          </option>
          <option value="English">English</option>
        </select>
    </div>
    
  );
};

export default LanguageInput;
