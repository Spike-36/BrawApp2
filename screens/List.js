// screens/List.js
import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';

export default function List({ words, indexLang, onPick }) {
  return (
    <View style={{ flex:1 }}>
      <FlatList
        data={words}
        keyExtractor={(_, i) => String(i)}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => onPick(index)} style={styles.row}>
            <Text style={styles.term}>{item.term}</Text>
            <Text style={styles.tr}>{item.translations?.[indexLang] ?? ''}</Text>
          </Pressable>
        )}
        contentContainerStyle={{ padding:12 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row:{ paddingVertical:14 },
  sep:{ height:1, backgroundColor:'#eee' },
  term:{ fontSize:16, fontWeight:'600' },
  tr:{ fontSize:14, color:'#666', marginTop:2 },
});
