import React, { useState, useCallback } from "react";
import "./Background.scss";

import { Provider } from "../../components/Context/index";
import { reducer } from '../../components/Context/reducer';
import Home from "../Home/Home";

function Background(props) {
  const [image, setImage] = useState("4_bg");

  const loadImage = useCallback(() => {
    return require(`../../assets/images/${image}.jpg`);
  }, [image]);

  const handleUpdateBackgroundImage = id => {
    setImage(`${id}_bg`);
  };

  const initialState = {
    handleUpdateBackgroundImage: handleUpdateBackgroundImage,
    selectedMovie: {
      episode_id: "",
      title: "",
      release_date: "",
      director: ""
    }
  };

  return (
    <Provider initialState={initialState} reducer={reducer}>
      <Home />
      <div
        data-testid={`Background-${image}`}
        className="Background"
        style={{ backgroundImage: `url(${loadImage()})` }}
      >
        <div className="Mask" />
      </div>
    </Provider>
  );
}

export default Background;
