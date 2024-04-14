import React, { ReactNode, createContext, useContext, useState } from "react";

interface CharacterAnimationsContextType {
  animationIndex: number;
  setAnimationIndex: React.Dispatch<React.SetStateAction<number>>;
  animations: string[];
  setAnimations: React.Dispatch<React.SetStateAction<string[]>>;
  isPlayButton: boolean;
  setIsPlayButton: React.Dispatch<React.SetStateAction<boolean>>;
}

const CharacterAnimationsContext =
  createContext<CharacterAnimationsContextType>(
    {} as CharacterAnimationsContextType
  );

interface CharacterAnimationsProviderProps {
  children: ReactNode;
}

export const CharacterAnimationsProvider: React.FC<
  CharacterAnimationsProviderProps
> = ({ children }) => {
  const [animationIndex, setAnimationIndex] = useState<number>(1);
  const [animations, setAnimations] = useState<string[]>([]);
  const [isPlayButton, setIsPlayButton] = useState<boolean>(false);

  return (
    <CharacterAnimationsContext.Provider
      value={{
        animationIndex,
        setAnimationIndex,
        animations,
        setAnimations,
        isPlayButton,
        setIsPlayButton,
      }}
    >
      {children}
    </CharacterAnimationsContext.Provider>
  );
};

export const useCharacterAnimations = (): CharacterAnimationsContextType => {
  return useContext(CharacterAnimationsContext);
};
