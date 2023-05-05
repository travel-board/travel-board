import { HiPencil, HiTrash, HiOutlineLocationMarker } from "react-icons/hi";
import { StyledLi } from "./styles";
import { IData } from "../../../interfaces/travel";
import { FallbackTripImage } from "../../FallbackTripImage";

interface ICard {
  trip: IData;

  setOpenModalDelete: (data: boolean) => void;
  handleModal: () => void;
  setGetTravelId: (data: number | string | undefined) => void;
  setEdit: (data: boolean) => void;
}

export const Card = ({
  trip,

  setOpenModalDelete,
  handleModal,
  setGetTravelId,
  setEdit,
}: ICard) => {
  const handleDelete = () => {
    setOpenModalDelete(true);
    setGetTravelId(trip.id);
  };

  const handleEditModal = () => {
    setGetTravelId(trip.id);
    setEdit(true);
    handleModal();
  };

  return (
    <StyledLi>
      <figure>
        {trip.img && trip.img.length ? (
          <img src={trip.img} alt={trip.name} />
        ) : (
          <FallbackTripImage alt={trip.name} />
        )}
      </figure>
      <div className="travelInfo">
        <p className="category">{trip.category}</p>
        <h2>{trip.name}</h2>
        <span>
          <HiOutlineLocationMarker color="#26A59E" />
          <p className="location">{trip.cityCountry}</p>
        </span>
      </div>
      <div className="buttons-container">
        <button className="edit" onClick={handleEditModal}>
          <HiPencil color="white" />
        </button>
        <button className="delete" onClick={handleDelete}>
          <HiTrash color="white" />
        </button>
      </div>
    </StyledLi>
  );
};
