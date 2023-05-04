import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { RxExit } from "react-icons/rx";
import logo from "../../assets/logo.svg";
import { FormEvent, SyntheticEvent, useState } from "react";
import { StyledHeader } from "./style";
import { useUser } from "../../hooks/useUser";
import { useTravel } from "../../hooks/useTravel";

interface HeaderProps {
  onSearch(search: string): void;
}

type SearchFormElement = HTMLFormElement & {
  search: HTMLInputElement;
};

export const Header = ({ onSearch }: HeaderProps) => {
  const [openMenu, setOpenMenu] = useState(false);

  const { handleLogout } = useUser();

  const handleSearch = (event: FormEvent<SearchFormElement>) => {
    event.preventDefault();
    const form = event.target as SearchFormElement;
    onSearch(form.search.value);
  };

  return (
    <StyledHeader>
      <div className="heading">
        <figure className="logo">
          <img src={logo} alt="Logo" />
        </figure>
        <button className="menuBtn" onClick={() => setOpenMenu(!openMenu)}>
          <AiOutlineMenu className="menuIcon" />
        </button>
        <div className="headerNavDesktop">
          <div className="searchContainer">
            <form onSubmit={handleSearch}>
              <input
                className="searchBar"
                type="text"
                placeholder="Search"
                name="search"
              />
              <button className="searchIcon">
                <AiOutlineSearch color="white" />
              </button>
            </form>
          </div>
          <div className="userIconAndLogoutBtn">
            <figure className="userIcon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="UserIcon"
              />
            </figure>
            <button className="exitButton" onClick={handleLogout}>
              <div className="closeContainer">
                <RxExit color="hsla(177, 63%, 40%, 1)" className="exitIcon" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {openMenu ? (
        <div className="headerNav">
          <div className="searchContainer">
            <input className="searchBar" type="text" placeholder="Search" />
            <span className="searchIcon">
              <AiOutlineSearch color="white" />
            </span>
          </div>
          <div className="userIconAndLogoutBtn">
            <figure className="userIcon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="UserIcon"
              />
            </figure>
            <button className="addBtn">Adicionar</button>
            <button className="exitButton">
              <div className="closeContainer">
                <p>Sair</p>
                <RxExit color="hsla(177, 63%, 40%, 1)" className="exitIcon" />
              </div>
            </button>
          </div>
        </div>
      ) : null}
    </StyledHeader>
  );
};
