import type { PayloadAction } from "@reduxjs/toolkit";
import  { createSlice } from "@reduxjs/toolkit"

export interface IThemeSliceState {
  theme: "white" | "gray"
}

type ThemePayload = "white" | "gray"

const initialState: IThemeSliceState = {
  theme: "white",
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: create => ({
    toggleTheme: create.reducer((state, action: PayloadAction<ThemePayload>) => {state.theme = action.payload}),
  }),
  selectors: {
    selectTheme: theme => theme.theme,
  },
})

export const { toggleTheme } = themeSlice.actions
export const { selectTheme } = themeSlice.selectors
