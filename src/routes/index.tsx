import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import SignIn from '../screens/SignIn';
import { Loading } from '../components/loading';
import { AppRotas } from './appRoutes';
import React from 'react';



export function Routes() {
    const [loading, setLoading] = useState(true);


    return (
        <NavigationContainer>
            <AppRotas />
        </NavigationContainer>
    );
}