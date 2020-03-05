import React from "react";
import {
  render,
  fireEvent,
  waitForElementToBeRemoved
} from "@testing-library/react";
import { act } from "react-dom/test-utils";

import CustomSlider from "../../components/CustomSlider/CustomSlider";
import Movie from "../../components/Movie/Movie";
import { Provider } from "../../components/Context";
import { reducer } from "../../components/Context/reducer";

const initialState = {
  handleUpdateBackgroundImage: jest.fn,
  selectedMovie: {
    episode_id: "",
    title: "",
    release_date: "",
    director: ""
  }
};

test("if movies are fetch", async () => {
  global.innerWidth = 1000;

  const { queryByTestId } = render(
    <Provider initialState={initialState} reducer={reducer}>
      <CustomSlider>
        <Movie
          key={1}
          episode_id={1}
          title="TITLE-1"
          release_date="1997-01-01"
          director="George"
          opening_crawl="1"
        ></Movie>
        <Movie
          key={2}
          episode_id={2}
          title="TITLE-2"
          release_date="1998-01-01"
          director="George"
          opening_crawl="2"
        ></Movie>
        <Movie
          key={3}
          episode_id={3}
          title="TITLE-3"
          waitForElementToBeRemoved
        ></Movie>
        <Movie
          key={4}
          episode_id={4}
          title="TITLE-4"
          release_date="1996-01-01"
          director="George"
          opening_crawl="4"
        ></Movie>
        <Movie
          key={5}
          episode_id={5}
          title="TITLE-5"
          release_date="1995-01-01"
          director="George"
          opening_crawl="5"
        ></Movie>
      </CustomSlider>
    </Provider>
  );

  let prevButton = queryByTestId(`Slider__Button__Prev`);
  let nextButton = queryByTestId(`Slider__Button__Next`);
  expect(prevButton).not.toBeTruthy();
  expect(nextButton).toBeTruthy();

  act(() => {
    //fireEvent.click(nextButton);
    nextButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  waitForElementToBeRemoved(
    () => (nextButton = queryByTestId(`Slider__Button__Next`))
  ).then(() => expect(nextButton).toBeUndefined());

  waitForElementToBeRemoved(
    () => (prevButton = queryByTestId(`Slider__Button__Prev`))
  ).then(() => expect(prevButton).toBeDefined());
});
