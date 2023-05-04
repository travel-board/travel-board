import { useTravel } from "../../../hooks/useTravel"
import { Button } from "../../Button"
import { Modal } from "../ModalCreate/styles"
import { StyledModalDelete } from "./styles";

interface IModalDelete{
    id: number;
    setOpenModalDelete: (value: boolean) => void;
    openModalDelete: boolean;
}
export const ModalDelete = ({id,setOpenModalDelete,openModalDelete}:IModalDelete) => {
    const { deleteTravel } =useTravel()

    return (
        <Modal style={openModalDelete ? {display: "flex"} : {display: "none"}}>
            <dialog style={{height: "200px"}}>
            <StyledModalDelete>
            <h2>Tem certeza de que deseja excluir ?</h2>
            <div>
            <Button click={() => deleteTravel(id)} classN="blue">Desejo Excluir</Button>
            <Button click={() => setOpenModalDelete(false)} classN="gray">Cancelar</Button>
            </div>
            </StyledModalDelete>
            </dialog>
            
        </Modal>
    )
}