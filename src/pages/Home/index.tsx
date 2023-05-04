import { useEffect, useState } from "react"
import { Button } from "../../components/Button"
import { ModalCreateEdit } from "../../components/Modal/ModalCreate"
import { BodyHome } from "./styles"
import { useUser } from "../../hooks/useUser"
import { ListTravel } from "../../components/ListTravel"
import { useTravel } from "../../hooks/useTravel"


export const Home = () => {
    const [openModal, setOpenModal] = useState(false)
    const [edit, setEdit] = useState(false)

    const { user } = useUser();
    const { getTravel, travel } = useTravel()

    useEffect(() => {
        getTravel()
    },[])
    
    const handleModal = () => {
        setOpenModal(true)
        setEdit(false)
    }

    return(
        <BodyHome>
            <ModalCreateEdit openModal={openModal} setOpenModal={setOpenModal} edit={edit} />
            <ListTravel handleModal={handleModal} />
        </BodyHome>
    )
}