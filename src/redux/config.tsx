import { configureStore } from "@reduxjs/toolkit";

import network from "./modules/network";
const store = configureStore({
    reducer: {
        network,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;