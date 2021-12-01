import { ContextProviders } from "_client/stores/_contextProviders";
import { LoadInitialData } from "_client/stores/_loadInitialData";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { FC } from "react";
import "styles/tailwind.css";
import "styles/theme.scss";

const App: FC<AppProps> = ({ pageProps, Component }) => {
  const router = useRouter();

  return (
    <ContextProviders>
      <LoadInitialData>
        <Component {...pageProps} />
      </LoadInitialData>
    </ContextProviders>
  );
};

export default App;
