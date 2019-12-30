import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { THEME } from '../theme';

export const AppHeadIcon = props => (
    <HeaderButton
        {...props}
        iconSize={24}
        color={Platform.OS === 'os' ? THEME.COLOR_MAIN : 'white'}
        IconComponent={Ionicons}
    />
);