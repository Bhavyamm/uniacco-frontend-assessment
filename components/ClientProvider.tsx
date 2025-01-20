"use client"; 
import React from "react";
import Header from "@/components/Header"; 
import { Provider } from "react-redux";
import { store } from "@/store";

interface ClientProviderProps {
  children: React.ReactNode;
}

export const ClientProvider = ({ children }: ClientProviderProps) => {
  return (
    <Provider store={store}>
      <Header />
      {children}
    </Provider>
  );
}
