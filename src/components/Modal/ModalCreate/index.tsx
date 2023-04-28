import Modal from 'react-modal';
import { FormModal } from './Form';
import { AiOutlineClose } from 'react-icons/ai'

export const ModalCreateEdit = () => {
    return(
        <Modal
            isOpen={true}
            style={{overlay: {background: '#D9D9D994', opacity: 0.2}}}
            /* onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles} */
        >
            <div  className='closeModal'>
                <button>
                    <AiOutlineClose size={20} />
                </button>
            </div>
            <h3>Adicionar novo local</h3>
                <FormModal />
        </Modal>
    )
}