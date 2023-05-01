import { FormModal } from './Form';
import { AiOutlineClose } from 'react-icons/ai'
import { Modal } from './styles';

export const ModalCreateEdit = () => {
    return(
        <Modal
            /* isOpen={true}
            style={{overlay: {background: '#D9D9D994', opacity: 0.2}, content: {inset: '0'}}}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles} */
        >
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