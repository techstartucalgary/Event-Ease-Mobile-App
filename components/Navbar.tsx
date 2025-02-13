import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';

export default function Navbar() {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.navbar, { paddingTop: insets.top - 5, height: (insets.top * 2) + 20 }]}>
            <View style={styles.navbarContent}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('@/assets/images/logo.png')}
                        style={styles.logo}
                        contentFit="contain"
                    />
                    <Text style={styles.logoText}>EventEase</Text>
                </View>
                <Pressable style={styles.profileButton}>

                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#1C2833',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        justifyContent: 'center'
    },
    navbarContent: {
        height: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        width: 32,
        height: 32
    },
    logoText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 8
    },
    profileButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        overflow: 'hidden'
    },
    profileIcon: {
        width: '100%',
        height: '100%'
    }
})