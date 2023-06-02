import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import SignIn from '../screens/SignIn';
import { Loading } from '../components/loading';
import { AppRotas } from './appRoutes';



export function Routes() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(true);

    return (
        <NavigationContainer>
            {user ? (
                <AppRotas />
            ) : (
                <SignIn />
            )}
        </NavigationContainer>
    );
}