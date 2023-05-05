import { Modal } from "./styles";
import { FormModal } from "./Form";
import { AiOutlineClose } from "react-icons/ai";

interface IFormModal {
  id: string | number | undefined;
  openModal: boolean;
  setOpenModal: (data: boolean) => void;
  edit: boolean;
}

export const ModalCreateEdit = ({
  id,
  openModal,
  setOpenModal,
  edit,
}: IFormModal) => {
  return (
    <Modal style={openModal ? { display: "flex" } : { display: "none" }}>
      <dialog>
        <div className="closeModal">
          <button onClick={() => setOpenModal(false)}>
            <AiOutlineClose size={20} />
          </button>
        </div>
        {edit ? <h3>Editar destino</h3> : <h3>Adicionar novo local</h3>}
        <FormModal id={id} setOpenModal={setOpenModal} edit={edit} />
      </dialog>
    </Modal>
  );
};
