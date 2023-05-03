import { useState } from "react"
import { Button } from "../../components/Button"
import { ModalCreateEdit } from "../../components/Modal/ModalCreate"
import { BodyHome } from "./styles"
import { useUser } from "../../hooks/useUser"


export const Home = () => {
    const [openModal, setOpenModal] = useState(false)
    const [edit, setEdit] = useState(false)

    const { user } = useUser();
    
    const handleModal = () => {
        setOpenModal(true)
        setEdit(false)
    }

    return(
        <BodyHome>
            <ModalCreateEdit openModal={openModal} setOpenModal={setOpenModal} edit={edit} />
            <Button click={handleModal} classN="orange">Adicionar</Button>
        </BodyHome>
    )
}