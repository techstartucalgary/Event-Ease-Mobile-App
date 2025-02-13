import { View, Text, StyleSheet } from 'react-native';
import EventCard from './EventCard';

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

export default function MainContent() {
    return (
        <View style={styles.mainContent}>
            {/* Top Events Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>TOP EVENTS</Text>
                <View style={styles.eventCards}>
                    {events.map((event) => (
                        <EventCard {...event} key={event.id} />
                    ))}
                </View>
            </View>

            {/* Marketing Sections */}
            <View style={styles.section}>
                <Text style={styles.marketingSectionTitle}>Create Memorable Experiences</Text>
                <Text style={styles.marketingText}>
                    Easily create, manage, and share your events. Our intuitive platform streamlines event planning so you can focus on what matters most – connecting with your audience. Whether it's a small gathering or a large conference, our tools help you bring your vision to life effortlessly.
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.marketingSectionTitle}>Be Part of the Experience</Text>
                <Text style={styles.marketingText}>
                    Discover events that matter to you. Whether it's a
                    conference, workshop, or social gathering, joining an
                    event has never been easier. Stay updated on upcoming
                    events, engage with organizers, and ensure you never
                    miss out on meaningful experiences.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContent: {
        padding: 20
    },
    section: {
        marginTop: 40
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4A4B4D'
    },
    eventCards: {
        marginTop: 20
    },
    marketingSectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2D3436',
        textAlign: 'center'
    },
    marketingText: {
        marginTop: 16,
        fontSize: 16,
        color: '#4A4B4D',
        textAlign: 'center',
        lineHeight: 24
    }
})