import { Animated, View, Text, StyleSheet, Pressable, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRef, useEffect } from 'react';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function HeroSection() {
    const getStartedScale = useRef(new Animated.Value(1)).current;
    const exploreScale = useRef(new Animated.Value(1)).current;
    const animation = useRef(new Animated.Value(0)).current;

    // Animate gradient movement
    useEffect(() => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(animation, {
              toValue: 1,
              duration: 8000,
              easing: Easing.inOut(Easing.linear),
              useNativeDriver: false
            }),
            Animated.timing(animation, {
              toValue: 0,
              duration: 8000,
              easing: Easing.inOut(Easing.linear),
              useNativeDriver: false
            }),
          ])
        ).start();
      }, []);
      

    const startX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    const endX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 2],
    });

    // Button press animation
    const animatePress = (animatedValue: Animated.Value) => {
        Animated.spring(animatedValue, {
            toValue: 0.95,
            useNativeDriver: true,
            speed: 25,
            bounciness: 10,
        }).start();
    };

    const animateRelease = (animatedValue: Animated.Value) => {
        Animated.spring(animatedValue, {
            toValue: 1,
            useNativeDriver: true,
            speed: 25,
            bounciness: 10,
        }).start();
    };

    return (
        <AnimatedLinearGradient
            colors={['#101e2e', '#44576d', '#44576d', '#101e2e']}
            start={{ x: startX, y: 0 }}
            end={{ x: endX, y: 1 }}
            style={styles.heroGradient}
        >
            <View style={styles.hero}>
                <View style={styles.welcomeContainer}>
                    <Text style={[styles.title, styles.heroText]}>Welcome to</Text>
                    <Text style={[styles.title, styles.heroText]}>EventEase</Text>
                </View>
                <Text style={[styles.subtitle, styles.heroText]}>Your event, one platform</Text>

                <View style={styles.buttonContainer}>
                    <Animated.View style={{ transform: [{ scale: getStartedScale }] }}>
                        <Pressable
                            style={[styles.button, styles.primaryButton]}
                            onPressIn={() => animatePress(getStartedScale)}
                            onPressOut={() => animateRelease(getStartedScale)}
                        >
                            <Text style={styles.primaryButtonText}>Get Started</Text>
                        </Pressable>
                    </Animated.View>
                    <Animated.View style={{ transform: [{ scale: exploreScale }] }}>
                        <Pressable
                            style={[styles.button, styles.secondaryButton]}
                            onPressIn={() => animatePress(exploreScale)}
                            onPressOut={() => animateRelease(exploreScale)}
                        >
                            <Text style={styles.secondaryButtonText}>Explore Events</Text>
                        </Pressable>
                    </Animated.View>
                </View>
            </View>
        </AnimatedLinearGradient>
    );
}

const styles = StyleSheet.create({
    heroGradient: {
        paddingVertical: 80,
    },
    hero: {
        alignItems: 'center',
    },
    welcomeContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    heroText: {
        color: '#FFFFFF',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 38,
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 24,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 25,
        minWidth: 140,
    },
    primaryButton: {
        backgroundColor: '#FFFFFF',
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#FFFFFF',
    },
    primaryButtonText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: '#2D3436',
    },
    secondaryButtonText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    },
});
