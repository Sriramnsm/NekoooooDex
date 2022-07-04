import { Monster } from "../../App";

import Card from "../card/card.component";
import './card-list.styles.css';


type CardListProps = {
    monsters: Monster[];
};

const CardList = ({monsters}: CardListProps) => (   

    <div className='card-list'>
        {monsters.map((monster) => {
        //    Casting it to variables
            return (
            <Card monster={monster}/>
        )})}
    </div>
    
);


export default CardList;