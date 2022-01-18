import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiRoutes } from "_app/constants";
import { http } from "_app/services/client";
import { IEventResponse } from "../types";

export const getEvents = createAsyncThunk('events/getEvents', async () => {
    const response = await http.get<IEventResponse[]>(ApiRoutes.events)
    return response.data
  }
)