import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useCharacterAnimations } from "../context/CharAnimation";

const Interface = () => {
  const { isPlayButton, animations, setAnimationIndex } =
    useCharacterAnimations();
  const [showComponents, setShowComponents] = useState(false);
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isPlayButton) {
      timeout = setTimeout(() => {
        setShowComponents(true);
      }, 6000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isPlayButton]);

  const renderButtonLabel = (animation: string) => {
    switch (animation) {
      case "Hi":
        return "Say Hi";
      case "Dance":
        return "Lets Dance";
      case "moonwalk":
        return "How to use the site??";
      default:
        return animation;
    }
  };

  const displayIndices = [0, 1, 5];

  return (
    <div>
      <div>
        {displayIndices.map((index) => (
          <Button
            key={animations[index]}
            onClick={() => setAnimationIndex(index)}
            className={showComponents ? "animate-fadeIn " : "opacity-0"}
          >
            {renderButtonLabel(animations[index])}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Interface;
