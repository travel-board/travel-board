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
      <ul>
        <span></span>
        <span></span>
        <div>
          <Button classN="blue" click={handleOpenModal}>
            Adicionar
          </Button>
        </div>
        {trips.map((i) => (
          <div key={i.id}>
            {i.userId === UserId ? (
              <Card
                setEdit={setEdit}
                id={i?.id}
                setGetTravelId={setGetTravelId}
                setOpenModalDelete={setOpenModalDelete}
                handleModal={handleModal}
                img={i.img}
                name={i.name}
                category={i.category}
                location={i.cityCountry}
              />
            ) : null}
          </div>
        ))}
      </ul>
    </StylesListTravel>
  );
};
