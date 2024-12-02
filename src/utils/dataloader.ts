import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

// Helper function to parse CSV content
const parseCSV = (csvContent: string): { [key: string]: string }[] => {
  const [headerLine, ...lines] = csvContent.split('\n'); // Split into lines
  const headers = headerLine.split(','); // Extract headers from the first line

  return lines
    .filter((line) => line.trim() !== '') // Ignore empty lines
    .map((line) => {
      const values = line.split(',');
      const entry: { [key: string]: string } = {};
      headers.forEach((header, index) => {
        entry[header.trim()] = values[index]?.trim() || ''; // Map headers to values
      });
      return entry;
    });
};

export const loadStipendData = async (): Promise<{ [key: string]: string }[]> => {
  try {
    // Load the CSV file, now in the same folder as this file
    const asset = Asset.fromModule(require('./stipend-us.csv'));
    await asset.downloadAsync(); // Ensure the file is downloaded if needed

    console.log('Resolved CSV Path:', asset.localUri); // Debugging log for the file path

    // Read the file content
    const csvContent = await FileSystem.readAsStringAsync(asset.localUri || '');
    console.log('CSV Content:', csvContent); // Debugging log for the CSV content

    // Parse and return the CSV data
    return parseCSV(csvContent);
  } catch (error) {
    console.error('Error loading stipend data:', error); // Log any errors
    return [];
  }
};
