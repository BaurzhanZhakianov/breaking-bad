import {FC} from "react";
import {ICharacter, IQuote} from "../../../types";

interface IRandomCharacter{
    img: string;
    name: string;
    quote: string;
}

const RandomCharacter:FC<IRandomCharacter> = (props) => {
    const {img, name,quote} = props
    return (
        <div>
            <img src={img} alt={name}/>
            <div>{quote}</div>
            <div>{name}</div>
        </div>
    )
}

export default RandomCharacter


