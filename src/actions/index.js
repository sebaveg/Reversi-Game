import { SET_NAME_PLAYERS, SET_COLOR_PLAYERS, STARTED, CHANGE_TURN, SET_POSITION_DISK_BLACK, SET_POSITION_DISK_WHITE, SET_ERROR } from '../types/index'

export const setNamePlayers = (payload) => ({
  type: SET_NAME_PLAYERS,
  payload,
});
export const setColorPlayers = (payload) => ({
  type: SET_COLOR_PLAYERS,
  payload,
});
export const setStarted = (payload) => ({
  type: STARTED,
  payload
})
export const setBoard = (payload) => ({
  type: SET_BOARD,
  payload
})
export const changeTurn = (payload) => ({
  type: CHANGE_TURN,
  payload
})
export const setPosDisksWhite = (payload) => ({
  type: SET_POSITION_DISK_WHITE,
  payload
})
export const setPosDisksBlack = (payload) => ({
  type: SET_POSITION_DISK_BLACK,
  payload
})
export const setWinner = (payload) => ({
  type: SET_WINNER,
  payload,
});
export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});
