'use client'

import React, { createContext, useState } from 'react';

export const AgeContext = createContext();

export const AgeProvider = ({ children }) => {
  const [isAge, setIsAge] = useState(false);

  const Aged = () => {
    // Perform the login process and set isLoggedIn to true if successful
    setIsAge(true);
  };

  const unAge = () => {
    // Perform the logout process and set isLoggedIn to false
    setIsAge(false);
  };

  return (
    <AgeContext.Provider value={{ isAge, Aged, unAge }}>
      {children}
    </AgeContext.Provider>
  );
};
