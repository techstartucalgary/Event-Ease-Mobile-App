import { PropsWithChildren } from "react";
import QueryContextProvider from "./queryContext";
import { AuthContextProvider } from "./authContext";

export default function GlobalProvider({ children }: PropsWithChildren) {
    return (
        <QueryContextProvider>
            <AuthContextProvider>
                {children}
            </AuthContextProvider>
        </QueryContextProvider>
    )
}