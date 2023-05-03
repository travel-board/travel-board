import { Modal } from './styles'
import { FormModal } from './Form'
import { AiOutlineClose } from 'react-icons/ai'

export const ModalCreateEdit = () => {
    return(
        <Modal>
           <dialog>
                <div  className='closeModal'>
                    <button>
                        <AiOutlineClose size={20} />
                    </button>
                </div>
                <h3>Adicionar novo local</h3>
                <FormModal />
           </dialog>
        </Modal>
    )
}