import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import Header from '../components/Header';
import RankingList from '../components/RankingList';
import { loadStipendData } from '../utils/dataloader';

const StipendRankings: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [data, setData] = useState<{ id: string; name: string; amount: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rankings = await loadStipendData(); // Fetch stipend data
        console.log('Fetched Data:', rankings); // Debug the data structure
        setData(rankings); // Update state with the fetched data
        setLoading(false); // Stop the loading spinner
      } catch (error) {
        console.error('Error fetching data:', error); // Log errors
        setLoading(false); // Ensure loading stops on error
      }
    };

    fetchData(); // Call the function to load data
  }, []); // Empty dependency array ensures it runs only once

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Stipend Rankings" />
      <RankingList data={data} onItemPress={(item) => navigation.navigate('Details', { item })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StipendRankings;
