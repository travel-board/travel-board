import { useTravel } from "../../hooks/useTravel"
import { Button } from "../Button"
import { Card } from "./Card"
import { StylesListTravel } from "./styles"

interface IListTravel{
    handleModal: () => void,
    setOpenModalDelete: (data: boolean) => void
}

export const ListTravel = ({handleModal, setOpenModalDelete}:IListTravel) => {

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
                        <Card setOpenModalDelete={setOpenModalDelete} handleModal={handleModal} key={key} img={i.img} name={i.name} category={i.category} location={i.cityCountry} />
                    ))
                }
           </ul>
        </StylesListTravel>
    )
}