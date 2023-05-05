import { IData } from "../../interfaces/travel";
import { Button } from "../Button";
import { Card } from "./Card";
import { StylesListTravel } from "./styles";

interface IListTravel {
  handleModal: () => void;
  setOpenModalDelete: (data: boolean) => void;
  setGetTravelId: (data: number | string | undefined) => void;
  setEdit: (data: boolean) => void;
  trips: IData[];
}

export const ListTravel = ({
  handleModal,
  setOpenModalDelete,
  setGetTravelId,
  setEdit,
  trips,
}: IListTravel) => {
  const handleOpenModal = () => {
    handleModal();
    setEdit(false);
  };

  const UserId = localStorage.getItem("@USERID");
  return (
    <StylesListTravel>
      <section>
        <div className="addBtn">
          <Button classN="blue" click={handleOpenModal}>
            Adicionar
          </Button>
        </div>

        <ul>
          {trips
            .filter((trip) => trip.userId === UserId)
            .map((trip) => (
              <Card
                key={trip.id}
                trip={trip}
                setEdit={setEdit}
                setGetTravelId={setGetTravelId}
                setOpenModalDelete={setOpenModalDelete}
                handleModal={handleModal}
              />
            ))}
        </ul>
      </section>
    </StylesListTravel>
  );
};
