import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <View style={styles.footerSection}>
                <Text style={styles.footerHeader}>About Us</Text>
                <Text style={styles.footerLink}>Our Story</Text>
                <Text style={styles.footerLink}>Team</Text>
            </View>

            <View style={styles.footerSection}>
                <Text style={styles.footerHeader}>Services</Text>
                <Text style={styles.footerLink}>What We Offer</Text>
                <Text style={styles.footerLink}>Pricing</Text>
                <Text style={styles.footerLink}>Support</Text>
            </View>

            <View style={styles.footerSection}>
                <Text style={styles.footerHeader}>Contact</Text>
                <Text style={styles.footerLink}>Get in Touch</Text>
                <Text style={styles.footerLink}>FAQ</Text>
                <Text style={styles.footerLink}>Help Center</Text>
            </View>

            <View style={styles.footerBottom}>
                <Text style={styles.copyright}>© 2025 Event Ease. All rights reserved.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#1C2833',
        padding: 40,
        paddingBottom: 120,
        alignItems: 'center'
    },
    footerSection: {
        marginBottom: 30,
        alignItems: 'center'
    },
    footerHeader: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center'
    },
    footerLink: {
        color: '#9BA3AF',
        fontSize: 16,
        marginBottom: 12,
        textAlign: 'center'
    },
    footerBottom: {
        borderTopWidth: 1,
        borderTopColor: '#2C3539',
        marginTop: 20,
        paddingTop: 20,
        width: '100%',
        alignItems: 'center'
    },
    copyright: {
        color: '#9BA3AF',
        textAlign: 'center',
        fontSize: 14
    }
})