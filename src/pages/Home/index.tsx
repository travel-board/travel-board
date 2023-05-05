import { useEffect, useMemo, useState } from "react";
import { ModalCreateEdit } from "../../components/Modal/ModalCreate";
import { BodyHome } from "./styles";
import { ListTravel } from "../../components/ListTravel";
import { useTravel } from "../../hooks/useTravel";
import { Header } from "../../components/Header";
import { ModalDelete } from "../../components/Modal/ModalDelete";

export const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [getTravelId, setGetTravelId] = useState<string | number | undefined>(
    ""
  );
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [edit, setEdit] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { getTravel, travel } = useTravel();
  const tripsToDisplay = useMemo(() => {
    return travel.filter((trip) => {
      return (
        trip.category.toLowerCase().includes(searchTerm) ||
        trip.cityCountry.toLowerCase().includes(searchTerm) ||
        trip.name.toLowerCase().includes(searchTerm)
      );
    });
  }, [travel, searchTerm]);

  useEffect(() => {
    if (!openModal && !openModalDelete) {
      getTravel();
    }
  }, [openModalDelete, openModal]);

  const handleModal = () => {
    setOpenModal(true);
  };

  const searchTrips = (search: string) => {
    setSearchTerm(search.toLowerCase());
  };

  return (
    <BodyHome>
      <ModalDelete
        id={getTravelId}
        openModalDelete={openModalDelete}
        setOpenModalDelete={setOpenModalDelete}
      />
      <ModalCreateEdit
        id={getTravelId}
        openModal={openModal}
        setOpenModal={setOpenModal}
        edit={edit}
      />
      <Header onSearch={searchTrips} />
      <ListTravel
        setEdit={setEdit}
        setGetTravelId={setGetTravelId}
        setOpenModalDelete={setOpenModalDelete}
        handleModal={handleModal}
        trips={tripsToDisplay}
      />
    </BodyHome>
  );
};
