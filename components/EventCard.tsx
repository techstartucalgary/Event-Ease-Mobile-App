import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";

type Props = {
    title: string;
    description: string;
    tags: string[];
    image: string;
}
export default function EventCard({ title, description, tags, image }: Props) {
    return (
        <TouchableOpacity style={styles.eventCard}>
            <Image
                source={image}
                style={styles.eventImage}
                contentFit="cover"
            />
            <View style={styles.eventContent}>
                <Text style={styles.eventTitle}>{title}</Text>
                <Text style={styles.eventDescription}>
                    {description}
                </Text>
                <View style={styles.tagContainer}>
                    {tags.map((tag, index) => (
                        <View style={styles.tag} key={`${tag}-${index}`}>
                            <Text style={styles.tagText}>{tag}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    eventCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3
    },
    eventImage: {
        height: 200,
        backgroundColor: '#E1E2E3'
    },
    eventContent: {
        padding: 16
    },
    eventTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2D3436'
    },
    eventDescription: {
        marginTop: 8,
        fontSize: 14,
        color: '#666666',
        lineHeight: 20
    },
    tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginTop: 12
    },
    tag: {
        backgroundColor: '#F5F5F4',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 16
    },
    tagText: {
        fontSize: 14,
        color: '#666666'
    }
});