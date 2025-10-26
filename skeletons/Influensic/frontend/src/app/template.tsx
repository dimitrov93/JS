"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <LazyMotion features={domAnimation}>
            <Provider store={store}>
                <div>
                    {children}
                </div>
            </Provider>
        </LazyMotion>
    )
}