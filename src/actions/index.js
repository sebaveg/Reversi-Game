import {
  ADD_DISKS_PLAYERS,
  CHANGE_TURN,
  RESET,
  SET_ALLOWED_CELLS,
  SET_BOARD,
  SET_COLOR_PLAYERS,
  SET_ERROR,
  SET_NAME_PLAYERS,
  SET_POSITION_DISK_BLACK,
  SET_POSITION_DISK_WHITE,
  SET_WINNER,
  STARTED,
  PUT_DISKS,
  UPDATE_ALLOWED_CELLS,
} from '../types/index';

export const addDisksPlayers = (payload) => ({
  type: ADD_DISKS_PLAYERS,
  payload,
});
export const changeTurn = () => ({
  type: CHANGE_TURN,
});
export const reset = (payload) => ({
  type: RESET,
  payload,
});
export const setAllowedCells = (payload) => ({
  type: SET_ALLOWED_CELLS,
  payload,
});
export const setBoard = (payload) => ({
  type: SET_BOARD,
  payload,
});
export const setColorPlayers = (payload) => ({
  type: SET_COLOR_PLAYERS,
  payload,
});
export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});
export const setNamePlayers = (payload) => ({
  type: SET_NAME_PLAYERS,
  payload,
});
export const setPosDisksBlack = (payload) => ({
  type: SET_POSITION_DISK_BLACK,
  payload,
});
export const setPosDisksWhite = (payload) => ({
  type: SET_POSITION_DISK_WHITE,
  payload,
});
export const setWinner = (payload) => ({
  type: SET_WINNER,
  payload,
});
export const setStarted = (payload) => ({
  type: STARTED,
  payload,
});
export const putDisks = (payload) => ({
  type: PUT_DISKS,
  payload,
});
export const updateAllowedCells = (payload) => ({
  type: UPDATE_ALLOWED_CELLS,
  payload,
});
