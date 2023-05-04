import { HiPencil,HiTrash,HiOutlineLocationMarker } from "react-icons/hi";
import { StyledLi } from "./styles";


interface ICard {
    img: string,
    name: string,
    category: string,
    location: string,
    setOpenModalDelete: (data: boolean) => void,
    handleModal: () => void,
}

export const Card = ({ img, name, category, location, setOpenModalDelete,  handleModal}: ICard) => {

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
                <button className="edit" onClick={handleModal}><HiPencil color="white"/></button>
                <button className="delete" onClick={() => setOpenModalDelete(true)}><HiTrash color="white"/></button>
            </div>
        </StyledLi>
    )
}