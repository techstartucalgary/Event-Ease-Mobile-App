import { StyleSheet, View, ScrollView } from 'react-native';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Navbar />
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                <HeroSection />
                <MainContent />
                <Footer />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        flex: 1,
        backgroundColor: '#F5F5F4',
        marginTop: 82 // Height of navbar (40 + 10 padding + 32 logo height)
    }
});