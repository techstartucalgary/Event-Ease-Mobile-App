import { createContext, type PropsWithChildren } from "react";
import { ClerkProvider } from "@clerk/clerk-expo";
import { TokenCache } from '@clerk/clerk-expo/dist/cache'
import * as SecureStore from 'expo-secure-store'
import { Platform } from "react-native";

const createTokenCache = (): TokenCache => {
    return {
        getToken: async (key: string) => {
            try {
                const item = await SecureStore.getItemAsync(key)
                if (item) {
                    console.log(`${key} was used 🔐 \n`)
                } else {
                    console.log('No values stored under key: ' + key)
                }
                return item
            } catch (error) {
                console.error('secure store get item error: ', error)
                await SecureStore.deleteItemAsync(key)
                return null
            }
        },
        saveToken: (key: string, token: string) => {
            return SecureStore.setItemAsync(key, token)
        },
    }
}

// SecureStore is not supported on the web
export const tokenCache = Platform.OS !== 'web' ? createTokenCache() : undefined

type authContext = {

}
const AuthContext = createContext<authContext | null>(null);

function Provider({ children }: PropsWithChildren) {
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}

export function AuthContextProvider({ children }: PropsWithChildren) {
    const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

    return (
        <ClerkProvider {...{ publishableKey, tokenCache }}>
            <Provider>
                {children}
            </Provider>
        </ClerkProvider>
    )
}