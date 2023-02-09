import React, { useState } from "react";

const useModalOpener = () => {
  const [open, setOpen] = useState(false);
  const handleOpener = () => {
    setOpen(true);
  };
  const handleCloser = () => {
    setOpen(false);
  };
  return [open, handleOpener, handleCloser];
};

export default useModalOpener;
