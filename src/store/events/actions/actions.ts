import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "_app/services/client";
import { IEventResponse } from "../types";

export const getEvents = createAsyncThunk('events/getEvents', async () => {
    const response = await http.get<IEventResponse[]>()
    return response.data
  }
)