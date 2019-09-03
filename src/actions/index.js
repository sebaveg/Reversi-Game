import {
  SET_NAME_PLAYERS,
  SET_COLOR_PLAYERS,
  SET_BOARD,
  SET_ALLOWED_CELLS,
  STARTED,
  CHANGE_TURN,
  SET_POSITION_DISK_BLACK,
  SET_POSITION_DISK_WHITE,
  ADD_DISKS,
  CLICK_CELL,
  SET_WINNER,
  SET_ERROR,
} from '../types/index';

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
  payload,
});
export const setBoard = (payload) => ({
  type: SET_BOARD,
  payload,
});
export const setAllowedCells = (payload) => ({
  type: SET_ALLOWED_CELLS,
  payload,
});
export const changeTurn = () => ({
  type: CHANGE_TURN,
});
export const setPosDisksWhite = (payload) => ({
  type: SET_POSITION_DISK_WHITE,
  payload,
});
export const setPosDisksBlack = (payload) => ({
  type: SET_POSITION_DISK_BLACK,
  payload,
});
export const addDisks = (payload) => ({
  type: ADD_DISKS,
  payload,
});
export const clickCell = (payload) => ({
  type: CLICK_CELL,
  payload,
});
export const setWinner = (payload) => ({
  type: SET_WINNER,
  payload,
});
export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});
