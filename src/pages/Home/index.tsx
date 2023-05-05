import { useEffect, useState } from "react"
import { ModalCreateEdit } from "../../components/Modal/ModalCreate"
import { BodyHome } from "./styles"
import { ListTravel } from "../../components/ListTravel"
import { useTravel } from "../../hooks/useTravel"
import { Header } from "../../components/Header"
import { ModalDelete } from "../../components/Modal/ModalDelete"


export const Home = () => {
    const [openModal, setOpenModal] = useState(false)
    const [getTravelId, setGetTravelId] = useState<string | number | undefined>('')
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [edit, setEdit] = useState(false)

    const { getTravel } = useTravel()

    useEffect(() => {
        getTravel()
    },[openModalDelete, openModal])
    
    const handleModal = () => {
        setOpenModal(true)
    }

    return(
        <BodyHome>
            <ModalDelete id={getTravelId} openModalDelete={openModalDelete} setOpenModalDelete={setOpenModalDelete}/>
            <ModalCreateEdit id={getTravelId} openModal={openModal} setOpenModal={setOpenModal} edit={edit} />
            <Header setOpenModal={setOpenModal} />
            <ListTravel setEdit={setEdit} setGetTravelId={setGetTravelId} setOpenModalDelete={setOpenModalDelete} handleModal={handleModal} />
        </BodyHome>
    )
}