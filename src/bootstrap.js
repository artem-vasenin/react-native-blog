import * as Font from 'expo-font';

export async function bootstrap() {
    await Font.loadAsync({
        'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'roboto-reg': require('../assets/fonts/Roboto-Regular.ttf'),
    });
};