import { useTravel } from "../../hooks/useTravel"
import { Button } from "../Button"
import { Card } from "./Card"
import { StylesListTravel } from "./styles"

interface IListTravel{
    handleModal: () => void
}

export const ListTravel = ({handleModal}:IListTravel) => {

    const { travel } = useTravel()
    return(
        <StylesListTravel>
           <ul>
                <span></span>
                <span></span>
                <div>
                    <Button classN="blue" click={handleModal}>Adicionar</Button>
                </div>
                {
                    travel.map((i, key) => (
                        <Card key={key} img={i.img} name={i.name} category={i.category} location={i.cityCountry} />
                    ))
                }
           </ul>
        </StylesListTravel>
    )
}