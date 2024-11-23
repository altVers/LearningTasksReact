import { useState, useRef, useEffect } from "react";

export function useList() {
  const [list, setItem] = useState([
    {
      title: "Молоко",
      id: 0,
      done: false,
    },
    {
      title: "Банан",
      id: 1,
      done: true,
    },
  ]);

  /** Создать новый элемент. */
  const createItem = () => {
    const newItem = {
      title: "",
      id: Date.now(),
      done: false,
    };
    setItem([...list, newItem]);
  };

  /**
   * Установить заголовок элемента.
   *
   * @param id - ID элемента.
   * @param title - Заголовок элемента.
   */
  const setItemTitle = (id, title) => {
    setItem(
      list.map((el) => {
        if (el.id === id) {
          return { ...el, title: title };
        } else {
          return el;
        }
      })
    );
  };

  /**
   * Переключить выполненность элемента.
   *
   * @param id - ID элемента.
   */
  const toggleItem = (id) => {
    setItem(
      list.map((el) => {
        if (el.id === id) {
          return { ...el, done: !el.done };
        } else {
          return el;
        }
      })
    );
  };

  /**
   * Удалить элемент.
   *
   * @param id - ID элемента.
   */
  const deleteItem = (id) => {
    setItem(list.filter((item) => item.id != id));
  };

  return {
    list,
    createItem,
    setItemTitle,
    toggleItem,
    deleteItem,
  };
}

export const useAutoFocus = (inputRef) => {
  useEffect(() => {
    inputRef.current.focus();
  }, []);
}
