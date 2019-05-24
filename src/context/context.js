import React from "react";
const initialState = {
  value: ""
};

const Context = React.createContext(initialState);

export const Provider = Context.Provider;
export const Consumer = Context.Consumer;
