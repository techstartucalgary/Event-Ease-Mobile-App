import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import EventCard from './EventCard';

const events = [
  {
    id: '1',
    title: 'Tech Conference 2025',
    description: 'Join industry leaders discussing the future of AI and technology.',
    image: require('@/assets/images/tech.jpg'),
    tags: ['Technology', 'AI', 'Networking'],
  },
  {
    id: '2',
    title: 'Global AI Hackathon 2025',
    description: 'Compete in a 48-hour AI hackathon and build cutting-edge solutions.',
    image: require('@/assets/images/hackathon.png'),
    tags: ['Hackathon', 'AI', 'Competition'],
  },
  {
    id: '3',
    title: 'Startup Pitch Night',
    description: 'Pitch your startup idea to investors and network with entrepreneurs.',
    image: require('@/assets/images/startup.jpg'),
    tags: ['Startups', 'Entrepreneurship'],
  },
  {
    id: '4',
    title: 'Tech Networking Mixer',
    description: 'Meet tech professionals, developers, and recruiters in the industry.',
    image: require('@/assets/images/networking.jpg'),
    tags: ['Networking', 'Career', 'Tech'],
  },
];

const features = [
    { title: 'Seamless Planning', description: 'Intuitive tools and workflows that make event planning effortless.', icon: 'calendar-check' },
    { title: 'Insightful Analytics', description: 'Make data-driven decisions with comprehensive analytics.', icon: 'chart-line' },
    { title: 'Secure & Reliable', description: 'Enterprise-grade security and 99.9% uptime guarantee.', icon: 'shield-alt' },
  ];  

const testimonials = [
  { name: 'Sarah Chen', role: 'Event Director, TechCorp', quote: 'EventEase transformed how we manage our tech conferences.' },
  { name: 'Marcus Rodriguez', role: 'Startup Founder', quote: 'EventEase made our launch event seamless and intuitive.' },
  { name: 'Bob Smith', role: 'Community Manager', quote: 'The attendee engagement tools helped us create better connections.' },
];

const partners = [
  { name: 'TechStart', logo: require('@/assets/images/partners/techstart.png') },
  { name: 'Google', logo: require('@/assets/images/partners/google.png') },
  { name: 'Meta', logo: require('@/assets/images/partners/meta.png') },
  { name: 'Apple', logo: require('@/assets/images/partners/apple.png') },
  { name: 'Amazon', logo: require('@/assets/images/partners/amazon.png') },
];

export default function MainContent() {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {/* Top Events */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Events</Text>
        <View style={styles.eventCards}>
          {events.map((event) => (
            <EventCard {...event} key={event.id} />
          ))}
        </View>
      </View>

      {/* Features */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Choose EventEase</Text>
        {features.map((feature, index) => (
            <View key={index} style={styles.featureCard}>
                <FontAwesome5 name={feature.icon} size={32} color="#768a96" style={{ marginBottom: 10 }} />
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureText}>{feature.description}</Text>
            </View>
        ))}

      </View>

      {/* Testimonials */}
      <View style={[styles.section, styles.testimonialSection]}>
        <Text style={[styles.sectionTitle, { color: 'white' }]}>What Our Users Say</Text>
        {testimonials.map((testimonial, index) => (
          <View key={index} style={styles.testimonialCard}>
            <Text style={styles.testimonialQuote}>
              “{testimonial.quote}”
            </Text>
            <Text style={styles.testimonialName}>{testimonial.name}</Text>
            <Text style={styles.testimonialRole}>{testimonial.role}</Text>
          </View>
        ))}
      </View>

      {/* Partners */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trusted by Industry Leaders</Text>
        <View style={styles.partnerLogos}>
          {partners.map((partner, index) => (
            <Image
              key={index}
              source={partner.logo}
              style={styles.partnerLogo}
              resizeMode="contain"
            />
          ))}
        </View>
      </View>

      {/* Stats */}
      <View style={[styles.section, styles.statsSection]}>
        <View style={styles.statItem}><Text style={styles.statNumber}>500K+</Text><Text style={styles.statLabel}>Active Users</Text></View>
        <View style={styles.statItem}><Text style={styles.statNumber}>50K+</Text><Text style={styles.statLabel}>Events Hosted</Text></View>
        <View style={styles.statItem}><Text style={styles.statNumber}>98%</Text><Text style={styles.statLabel}>Satisfaction Rate</Text></View>
        <View style={styles.statItem}><Text style={styles.statNumber}>40+</Text><Text style={styles.statLabel}>Countries</Text></View>
      </View>

      {/* CTA */}
      <View style={[styles.section, { marginBottom: 30 }]}>
        <Text style={styles.sectionTitle}>Ready to Host Your Event?</Text>
        <Text style={styles.ctaText}>Join thousands of organizers who trust EventEase to create memorable experiences.</Text>
        <Pressable style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Get Started Now</Text>
        </Pressable>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  section: {
    marginTop: 40
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3436',
    textAlign: 'center',
    marginBottom: 20
  },
  eventCards: {
    marginTop: 20
  },
  featureCard: {
    marginBottom: 20,
    alignItems: 'center'
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A4B4D'
  },
  featureText: {
    textAlign: 'center',
    color: '#626567',
    marginTop: 10
  },
  testimonialSection: {
    backgroundColor: '#2D3436',
    paddingVertical: 40,
    borderRadius: 10,
    marginVertical: 20
  },
  testimonialCard: {
    marginBottom: 20,
    paddingHorizontal: 10
  },
  testimonialQuote: {
    color: '#D0D3D4',
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  testimonialName: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8
  },
  testimonialRole: {
    color: '#ABB2B9',
    fontSize: 12,
    textAlign: 'center'
  },
  partnerLogos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  partnerLogo: {
    width: 80,
    height: 40,
    margin: 10
  },
  statsSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: '#2D3436', // solid dark fallback
    paddingVertical: 40,
    borderRadius: 12,
    marginTop: 30,
    marginBottom: 20
  },
  statItem: {
    alignItems: 'center',
    marginBottom: 20
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#768a96',
    textAlign: 'center'
  },
  statLabel: {
    color: '#F5F5F4',
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
    fontWeight: '500'
  },
  ctaText: {
    marginTop: 10,
    fontSize: 16,
    color: '#4A4B4D',
    textAlign: 'center',
    lineHeight: 24
  },
  ctaButton: {
    backgroundColor: '#768a96',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: 20
  },
  ctaButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center'
  }  
});
