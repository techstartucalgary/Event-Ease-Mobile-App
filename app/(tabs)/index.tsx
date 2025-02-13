import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top, backgroundColor: '#29353c' }]}>
            <WebView source={{ uri: 'https://eventeaseca.vercel.app/' }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});