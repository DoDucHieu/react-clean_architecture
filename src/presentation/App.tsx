import React, { useEffect } from "react";
import "./App.css";
import { ConfigProvider } from "antd";
import AppTheme from "../assets/styles/theme";
import Router from "./router/Router";
import { AuthUseCaseInterface } from "../application/usecases/AuthUseCase";
import { TestUseCaseInterface } from "../application/usecases/TestUseCase";
import { UserStorageUseCaseInterface } from "../application/usecases/UserStorageUseCase";
export interface AppProps {
  authUseCase: AuthUseCaseInterface;
  testUseCase: TestUseCaseInterface;
  userStorageUseCase: UserStorageUseCaseInterface;
}

function App(appProps: AppProps) {
  return (
    <ConfigProvider theme={AppTheme}>
      <Router {...appProps} />
    </ConfigProvider>
  );
}

export default App;
