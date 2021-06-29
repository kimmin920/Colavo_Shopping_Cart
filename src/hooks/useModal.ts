import { MouseEventHandler, useState } from 'react';

interface ReturnType {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: MouseEventHandler;
}

function useModal(initialMode: boolean): ReturnType {
  const [isModalOpen, setIsModalOpen] = useState(initialMode);

  function toggle() {
    setIsModalOpen((prev) => !prev);
  }

  return {
    isModalOpen,
    setIsModalOpen,
    toggle,
  };
}

export default useModal;
