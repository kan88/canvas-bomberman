import * as renderer from 'react-test-renderer'
import { Game } from './game'
import configureStore from 'redux-mock-store'
import { GameStatus } from '../../store/gameSlice'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

const mockStore = configureStore([])

describe(`Snapshot test page Game`, () => {
  test(`Should correct render (with store - status START)`, () => {
    const store = mockStore({ game: { status: GameStatus.START } })

    const tree = renderer
      .create(
        <Provider store={store}>
          <Game />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`Should correct render (with store - status IN_PROGRESS)`, () => {
    const store = mockStore({ game: { status: GameStatus.IN_PROGRESS } })

    const tree = renderer
      .create(
        <Provider store={store}>
          <Game />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`Should correct render (with store - status END)`, () => {
    const store = mockStore({ game: { status: GameStatus.END } })

    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/game`]}>
            <Game />
          </MemoryRouter>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
