import React from "react";
import { render, waitForElement, cleanup, fireEvent } from "@testing-library/react";
import Movie from "../../components/Movie/Movie";
import { Provider } from "../../components/Context";
import { reducer } from '../../components/Context/reducer';

beforeEach(() => {
  cleanup();
  jest.enableAutomock();
});

test("render title and firing event updateBackgroundImage", async () => {
  // Setting width of 1000 for Jest
  global.innerWidth = 1000;

  const handleUpdateBackgroundImage = jest.fn()

  const { getByTestId } = render(
    <Provider initialState={{ handleUpdateBackgroundImage }} reducer={reducer}>
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
          director="George 2"
          opening_crawl="2"
        ></Movie>
    </Provider>
  );

  const t1 = await waitForElement(() => getByTestId(`Movie-${1}`));
  expect(t1).toHaveTextContent(/TITLE-1/);

  fireEvent.click(getByTestId(`Movie-${1}`))
  expect(handleUpdateBackgroundImage).toHaveBeenCalled();
});
