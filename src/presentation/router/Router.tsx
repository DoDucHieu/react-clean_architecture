import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SignInPage } from '../pages/SignInPage';
import { SignUpPage } from '../pages/SignUpPage';
import { HomePage } from '../pages/HomePage';
import { CounterPage } from '../pages/CounterPage';
import { AdminPage } from '../pages/AdminPage';
import { UserPage } from '../pages/UserPage';
import { ModeratorPage } from '../pages/ModeratorPage';
import { TimeSleepPage } from '../pages/TimeSleepPage';
import { AppProps } from '../App';
import { AUTH_ROUTES, PRIVATE_ROUTES } from './CONSTANTS';
import LoadingComponent from '../components/Loading';
import NotFound from '../components/NotFound';
import ErrorSite from '../components/Error';
import { PrivateRoute } from '../components/PrivateRoute';

const Router = (props: AppProps) => {
    const privateRoutes: any[] = [
        {
            path: PRIVATE_ROUTES.SUB.COUNTER,
            element: <CounterPage />,
        },
        {
            path: PRIVATE_ROUTES.SUB.ADMIN,
            element: <AdminPage testUseCase={props.testUseCase} />,
        },
        {
            path: PRIVATE_ROUTES.SUB.USER,
            element: <UserPage testUseCase={props.testUseCase} />,
        },
        {
            path: PRIVATE_ROUTES.SUB.MOD,
            element: <ModeratorPage testUseCase={props.testUseCase} />,
        },
        {
            path: PRIVATE_ROUTES.SUB.TIME,
            element: <TimeSleepPage testUseCase={props.testUseCase} />,
        },
    ];

    const authRoutes: any[] = [
        {
            path: AUTH_ROUTES.SUB.SIGNUP,
            element: <SignUpPage authenUseCase={props.authUseCase} />,
        },
        {
            path: AUTH_ROUTES.SUB.SIGNIN,
            element: (
                <SignInPage
                    userStorage={props.userStorageUseCase}
                    authenUseCase={props.authUseCase}
                />
            ),
        },
    ];

    return (
        <LoadingComponent>
            <Routes>
                <Route
                    path="/"
                    errorElement={<ErrorSite />}
                    element={<HomePage userStorageUseCase={props.userStorageUseCase} />}
                />
                <Route path={AUTH_ROUTES.PATH}>
                    {authRoutes.map((element, index) => (
                        <Route
                            key={index}
                            path={element.path}
                            errorElement={<ErrorSite />}
                            element={element.element}
                        />
                    ))}
                </Route>
                <Route
                    path={PRIVATE_ROUTES.PATH}
                    element={<PrivateRoute userStorageUseCase={props.userStorageUseCase} />}
                >
                    {privateRoutes.map((element, index) => (
                        <Route
                            key={index}
                            path={element.path}
                            errorElement={<ErrorSite />}
                            element={element.element}
                        />
                    ))}
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </LoadingComponent>
    );
};

export default Router;
