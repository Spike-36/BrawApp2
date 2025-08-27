// screens/Word.js
import React, { useMemo, useRef, useEffect } from 'react';
import { View, Text, FlatList, Dimensions, Pressable, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default function Word({ words, indexLang, index, setIndex }) {
  const listRef = useRef(null);

  // Keep list in sync if index changes externally (e.g., from List tab)
  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollToIndex({ index, animated: true });
  }, [index]);

  const getItemLayout = (_, i) => ({ length: width, offset: width * i, index: i });

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    const v = viewableItems[0];
    if (v && typeof v.index === 'number') setIndex(v.index);
  }).current;

  const viewabilityConfig = useMemo(() => ({ itemVisiblePercentThreshold: 60 }), []);

  const renderItem = ({ item }) => (
    <View style={[styles.page, { width }]}>
      <Text style={styles.term}>{item.term}</Text>
      <Text style={styles.tr}>{item.translations?.[indexLang] ?? ''}</Text>

      <View style={styles.controls}>
        <Pressable
          onPress={() => setIndex((i) => Math.max(0, i - 1))}
          style={[styles.navBtn, index === 0 && styles.navBtnDisabled]}
          disabled={index === 0}
        >
          <Text style={styles.navTxt}>‹ Prev</Text>
        </Pressable>

        <Pressable
          onPress={() => setIndex((i) => Math.min(words.length - 1, i + 1))}
          style={[styles.navBtn, index === words.length - 1 && styles.navBtnDisabled]}
          disabled={index === words.length - 1}
        >
          <Text style={styles.navTxt}>Next ›</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <FlatList
      ref={listRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      data={words}
      keyExtractor={(_, i) => String(i)}
      renderItem={renderItem}
      initialScrollIndex={index}
      getItemLayout={getItemLayout}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      removeClippedSubviews
    />
  );
}

const styles = StyleSheet.create({
  page:{ flex:1, alignItems:'center', justifyContent:'center', padding:24 },
  term:{ fontSize:28, fontWeight:'700', marginBottom:8 },
  tr:{ fontSize:18, color:'#555' },
  controls:{ flexDirection:'row', gap:12, marginTop:24 },
  navBtn:{ paddingHorizontal:16, paddingVertical:10, borderRadius:8, backgroundColor:'#111' },
  navBtnDisabled:{ backgroundColor:'#aaa' },
  navTxt:{ color:'#fff', fontWeight:'600' },
});
