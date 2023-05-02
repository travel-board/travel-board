import { useState } from "react"
import { Button } from "../../components/Button"
import { ModalCreateEdit } from "../../components/Modal/ModalCreate"
import { BodyHome } from "./styles"


export const Home = () => {
    const [openModal, setOpenModal] = useState(false)
    const [edit, setEdit] = useState(false)

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