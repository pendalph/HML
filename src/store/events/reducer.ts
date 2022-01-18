import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../reducer';
import { getEvents } from './actions/actions';
import { IEventResponse } from './types';

export type EventsState = {
    items: Array<IEventResponse>,
    isLoading: boolean,
    isError: boolean,
};

export const initialState: EventsState = {
    items: [],
    isLoading: false,
    isError: false,
};

export const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getEvents.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getEvents.fulfilled, (state: EventsState, action: PayloadAction<Array<IEventResponse>>) => {
      const { payload } = action;

      state.items = [...payload]
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(getEvents.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
  }
});

export const eventsSelector = (state: RootState) => state.events;

export default eventSlice.reducer;
