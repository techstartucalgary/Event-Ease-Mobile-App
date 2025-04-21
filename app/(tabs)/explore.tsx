"use client";

import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FlashList } from "@shopify/flash-list";
import { useInfiniteQuery } from "@tanstack/react-query";
import { searchEvents, Event } from "@/lib/api/event";
import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
// import { useFilters } from "@/contexts/FilterContext"; // Optional

const LIMIT = 6;

export default function ExploreScreen() {
  const insets = useSafeAreaInsets();
  const [searchTerm, setSearchTerm] = useState("");

  // Optional: filter context if implemented
  // const { filters, isFiltersApplied } = useFilters();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useInfiniteQuery<Event[], Error>({
    queryKey: ["events", searchTerm],
    queryFn: ({ pageParam = 1 }) =>
      searchEvents({
        searchTerm,
        page: pageParam as number,
        limit: LIMIT,
        // date: filters.date,
        // sort: filters.sort,
        // priceRange: filters.priceRange,
        // categories: filters.categories,
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length < LIMIT ? undefined : allPages.length + 1,
    initialPageParam: 1,
  });

  const events = data?.pages.flat() || [];

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={[styles.header, { paddingTop: insets.top * 2 + 40 }]}>
        <Text style={styles.title}>Explore Events</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search events..."
          placeholderTextColor="#666666"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>

      <View style={{ flex: 1 }}>
        {status === "pending" ? (
          <Text style={styles.statusText}>Loading events...</Text>
        ) : status === "error" ? (
          <Text style={[styles.statusText, { color: "red" }]}>
            Error loading events: {error.message}
          </Text>
        ) : events.length > 0 ? (
          <FlashList
            data={events}
            estimatedItemSize={200}
            renderItem={({ item }) => (
              <View style={styles.cardWrapper}>
                <EventCard
                  title={item.name}
                  description={item.description}
                  image={item.images[0]}
                  tags={[]}
                />
              </View>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
            ListFooterComponent={
              <View>
                {hasNextPage && (
                  <View style={styles.loadMoreContainer}>
                    <Pressable
                      onPress={() => fetchNextPage()}
                      disabled={isFetchingNextPage}
                      style={({ pressed }) => [
                        styles.loadMoreButton,
                        pressed && { opacity: 0.7 },
                      ]}
                    >
                      <Text style={styles.loadMoreText}>
                        {isFetchingNextPage
                          ? "Loading more..."
                          : "Load more events"}
                      </Text>
                    </Pressable>
                  </View>
                )}
                <Footer />
              </View>
            }
          />
        ) : (
          <Text style={styles.statusText}>No events found</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F4",
  },
  header: {
    padding: 20,
    backgroundColor: "#F5F5F4",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E4",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#523d35",
  },
  searchInput: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statusText: {
    padding: 20,
    fontSize: 16,
    textAlign: "center",
  },
  cardWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  listContent: {
    paddingBottom: 0,
  },
  loadMoreContainer: {
    alignItems: "center",
    paddingVertical: 16,
  },
  loadMoreButton: {
    backgroundColor: "#523D35",
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
  },
  loadMoreText: {
    color: "#fff",
    fontSize: 16,
  },
});
