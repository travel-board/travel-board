import { useTravel } from "../../hooks/useTravel"
import { Button } from "../Button"
import { Card } from "./Card"
import { StylesListTravel } from "./styles"

interface IListTravel{
    handleModal: () => void,
    setOpenModalDelete: (data: boolean) => void,
    setGetTravelId: (data: number | string | undefined) => void,
    setEdit: (data: boolean) => void,
}

export const ListTravel = ({
        handleModal, 
        setOpenModalDelete, 
        setGetTravelId,
        setEdit
    }:IListTravel) => {

    const handleOpenModal = () => {
        handleModal()
        setEdit(false)
    }
    const { travel } = useTravel()

    const UserId = localStorage.getItem("@USERID")
    return(
        <StylesListTravel>
           <ul>
                <span></span>
                <span></span>
                <div>
                    <Button classN="blue" click={handleOpenModal}>Adicionar</Button>
                </div>
                {
                    travel.map((i, key) => (
                        <div>
                            {
                                i.userId === UserId ? (
                                    <Card setEdit={setEdit} id={i?.id} setGetTravelId={setGetTravelId} setOpenModalDelete={setOpenModalDelete} handleModal={handleModal} key={key} img={i.img} name={i.name} category={i.category} location={i.cityCountry} />
                                ) : null
                            }
                        </div>
                    ))
                }
           </ul>
        </StylesListTravel>
    )
}