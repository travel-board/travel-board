import { Modal } from './styles'
import { FormModal } from './Form'
import { AiOutlineClose } from 'react-icons/ai'

interface Modal {
    openModal: boolean,
    setOpenModal: (data: boolean) => void,
    edit: boolean
}

export const ModalCreateEdit = ({openModal, setOpenModal, edit}:Modal) => {

    return(
        <Modal  style={openModal ? {display: 'flex'} : {display: 'none'}} >
           <dialog>
                <div  className='closeModal'>
                    <button onClick={() => setOpenModal(false)}>
                        <AiOutlineClose size={20} />
                    </button>
                </div>
                <h3>Adicionar novo local</h3>
                <FormModal edit={edit} />
           </dialog>
        </Modal>
    )
}