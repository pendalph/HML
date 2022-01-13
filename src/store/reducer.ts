import { combineReducers } from '@reduxjs/toolkit';
import events, { EventsState } from './events/reducer';

export type RootState = {
  events: EventsState;
}

export const rootReducer = combineReducers<RootState>({
  events
})