import { useEffect, useState } from "react"
import { ModalCreateEdit } from "../../components/Modal/ModalCreate"
import { BodyHome } from "./styles"
import { ListTravel } from "../../components/ListTravel"
import { useTravel } from "../../hooks/useTravel"
import { Header } from "../../components/Header"
import { ModalDelete } from "../../components/Modal/ModalDelete"


export const Home = () => {
    const [openModal, setOpenModal] = useState(false)
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [edit, setEdit] = useState(false)

    const { getTravel } = useTravel()

    useEffect(() => {
        getTravel()
    },[])
    
    const handleModal = () => {
        setOpenModal(true)
        setEdit(false)
    }

    return(
        <BodyHome>
            <ModalDelete id={1} openModalDelete={openModalDelete} setOpenModalDelete={setOpenModalDelete}/>
            <Header />
            <ModalCreateEdit openModal={openModal} setOpenModal={setOpenModal} edit={edit} />
            <ListTravel setOpenModalDelete={setOpenModalDelete} handleModal={handleModal} />
        </BodyHome>
    )
}