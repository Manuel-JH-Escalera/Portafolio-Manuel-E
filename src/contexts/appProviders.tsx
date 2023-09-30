import { ReactNode } from "react";
import LanguageProvider from "./language/languageProvider";
import ThemeProvider from "./theme/themeProvider";

interface AppProvidersProps {
  children: ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {

    return (
        <ThemeProvider>
            <LanguageProvider>
                {children}
            </LanguageProvider>
        </ThemeProvider>
    );
}