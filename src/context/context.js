import React from "react";
const initialState = {
  value: ""
};

const FamilyContext = React.createContext(initialState);

export const FamilyProvider = FamilyContext.Provider;
export const FamilyConsumer = FamilyContext.Consumer;
