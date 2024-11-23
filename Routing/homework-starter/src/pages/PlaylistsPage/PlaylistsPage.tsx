import { ChangeEvent, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { PLAYLISTS } from "../../data";
import "./PlaylistsPage.css";

export function PlaylistsPage() {
  const [searchParam, setSearchParam] = useSearchParams();   // здесь храним квери параметры 
  const searchName = searchParam.get("searchName") || ""
  const searchGenre = searchParam.get("searchGenre") || ""

  
  // const [searchName, setSearchName] = useState(             // здесь храним стейт навзания плейлиста
  //   searchParam.get("searchName") || ""
  // );
  // const [searchGenre, setSearchGenre] = useState(           // здесь храним стейт жанра плейлиста
  //   searchParam.get("searchGenre") || ""
  // );

  // function handleSetSearchParam() {                          // тут описана функция записи нескольких квери-параметров и
  //   if (searchGenre && searchName) {                          // их удаление из адресной строки, если соответсвующий инпут пустой
  //     setSearchParam({
  //       searchPlaylist: searchName.toLowerCase(),
  //       searchPlaylistGenre: searchGenre.toLowerCase(),
  //     });
  //   } else if (!searchGenre && !searchName) {
  //     setSearchParam({});
  //   } else if (searchGenre && !searchName) {
  //     setSearchParam({
  //       searchPlaylistGenre: searchGenre.toLowerCase(),
  //     });
  //   } else if (searchName && !searchGenre) {
  //     setSearchParam({
  //       searchPlaylist: searchName.toLowerCase(),
  //     });
  //   }
  // }

  // useEffect(() => {                                         // через useEffect подписываемся на изменения стейтов:
  //   handleSetSearchParam();                                 // при изменении какого либо стейта, перезаписываются квери-параметры
  // }, [searchName, searchGenre]);

  const handleSearchName = (event: ChangeEvent<HTMLInputElement>): void => {
    // setSearchName(event.target.value);
    setSearchParam({searchName: event.target.value.toLowerCase(), searchGenre})
  };

  const handleSearchGenre = (event: ChangeEvent<HTMLInputElement>): void => {
    // setSearchGenre(event.target.value);
    setSearchParam({searchGenre: event.target.value.toLowerCase(), searchName})
  };

  const filteredPlaylists = PLAYLISTS.filter(                 // фильтруем массив по стейтам
    ({ name, genre }) =>
      name.toLowerCase().includes(searchName.toLowerCase()) &&
      genre !== "Non Music" &&
      genre.toLowerCase().includes(searchGenre.toLowerCase())
  );

  return (
    <div className="playlistsPage">
      <h2>PlaylistsPage</h2>

      <div className="playlists">
        <label>
          введите название плейлиста{" "}
          <input type="text" value={searchName} onChange={handleSearchName} />
        </label>
        <label>
          введите жанр плейлиста{" "}
          <input type="text" value={searchGenre} onChange={handleSearchGenre} />
        </label>

        {filteredPlaylists.map(({ name, id }) => (
          <Link className="playlists__item" to={`/playlists/${id}`} key={id}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
