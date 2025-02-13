import { StyleSheet, View, TextInput, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import EventCard from '@/components/EventCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// Use the same events data from home page
const events = [
    {
        id: "1",
        title: 'Tech Conference 2025',
        description: 'Join industry leaders discussing the future of AI and technology.',
        image: require('@/assets/images/tech.jpg'),
        tags: ['Technology', 'AI', 'Networking'],
    },
    {
        id: "2",
        title: 'Global AI Hackathon 2025',
        description: 'Compete in a 48-hour AI hackathon and build cutting-edge solutions with a team of innovators.',
        image: require('@/assets/images/hackathon.png'),
        tags: ['Hackathon', 'AI', 'Competition'],
    },
    {
        id: "3",
        title: 'Startup Pitch Night',
        description: 'Pitch your startup idea to investors and network with entrepreneurs in the industry.',
        image: require('@/assets/images/startup.jpg'),
        tags: ['Startups', 'Entrepreneurship', 'Investment'],
    },
    {
        id: "4",
        title: 'Tech Networking Mixer',
        description: 'Meet tech professionals, developers, and recruiters to expand your network in the industry.',
        image: require('@/assets/images/networking.jpg'),
        tags: ['Networking', 'Career', 'Tech'],
    }
];

export default function ExploreScreen() {
    const insets = useSafeAreaInsets();

    return (
        <View style={styles.container}>
            <Navbar />
            <View style={[styles.header, { paddingTop: (insets.top * 2) + 40 }]}>
                <Text style={styles.title}>
                    Explore Events
                </Text>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search events..."
                    placeholderTextColor="#666666"
                />
            </View>
            <FlashList
                data={events}
                renderItem={({ item }) => (
                    <View style={styles.flashListContent}>
                        <EventCard {...item} />
                    </View>
                )}
                estimatedItemSize={200}
                ListFooterComponent={Footer}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F4'
    },
    header: {
        padding: 20,
        paddingBottom: 24,
        backgroundColor: '#F5F5F4',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E4',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#523d35'
    },
    searchInput: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 12,
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3
    },
    flashListContent: {
        padding: 20
    }
});