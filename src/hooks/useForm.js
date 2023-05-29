import { useState } from "react";

export const useForm = (initialValue = {}) => {
  const [formState, setformState] = useState(initialValue);

  const onNewValue = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setformState(initialValue);
  };

  return {
    ...formState,
    formState,
    onNewValue,
    onResetForm,
  };
};
