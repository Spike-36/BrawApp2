// screens/Home.js
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Home({ onStart, hasProgress }) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Braw</Text>
      <Text style={styles.sub}>Tiny, stable vocab app.</Text>

      <Pressable onPress={onStart} style={styles.btn}>
        <Text style={styles.btnTxt}>{hasProgress ? 'Continue' : 'Start'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap:{ flex:1, alignItems:'center', justifyContent:'center', padding:24 },
  title:{ fontSize:32, fontWeight:'700', marginBottom:8 },
  sub:{ fontSize:16, color:'#666', marginBottom:24 },
  btn:{ backgroundColor:'#111', paddingHorizontal:24, paddingVertical:14, borderRadius:10 },
  btnTxt:{ color:'#fff', fontSize:16, fontWeight:'600' },
});
