import { HiPencil,HiTrash,HiOutlineLocationMarker } from "react-icons/hi";
import { StyledLi } from "./styles";


interface ICard {
    id: string | number | undefined,
    img: string,
    name: string,
    category: string,
    location: string,
    setOpenModalDelete: (data: boolean) => void,
    handleModal: () => void,
    setGetTravelId: (data: number | string | undefined) => void,
    setEdit: (data: boolean) => void
}

export const Card = ({ 
    id, 
    img, 
    name, 
    category, 
    location, 
    setOpenModalDelete,  
    handleModal, 
    setGetTravelId,
    setEdit}: ICard) => {

    const handleDelete = () => {
        setOpenModalDelete(true)
        setGetTravelId(id)
    }

    const handleEditModal = () => {
        setGetTravelId(id)
        setEdit(true)
        handleModal()
    }

    return (
        <StyledLi>
            <figure>
                <img src={img} alt={name} />
            </figure>
            <div className="travelInfo">
                <p className="category">{category}</p>
                <h2>{name}</h2>
                <span><HiOutlineLocationMarker color="#26A59E" /><p className="location">{location}</p></span>
            </div>
            <div className="buttons-container">
                <button className="edit" onClick={handleEditModal}><HiPencil color="white"/></button>
                <button className="delete" onClick={handleDelete}><HiTrash color="white"/></button>
            </div>
        </StyledLi>
    )
}