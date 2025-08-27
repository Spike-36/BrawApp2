// screens/Settings.js
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Settings({ indexLang, setIndexLang }) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Settings</Text>

      <Text style={styles.label}>App language</Text>
      <View style={styles.row}>
        {['en', 'es'].map(code => (
          <Pressable
            key={code}
            onPress={() => setIndexLang(code)}
            style={[styles.choice, indexLang===code && styles.choiceActive]}
          >
            <Text style={[styles.choiceTxt, indexLang===code && styles.choiceTxtActive]}>
              {code.toUpperCase()}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap:{ flex:1, padding:24 },
  title:{ fontSize:24, fontWeight:'700', marginBottom:16 },
  label:{ fontSize:16, color:'#666', marginBottom:8 },
  row:{ flexDirection:'row', gap:8 },
  choice:{ paddingHorizontal:14, paddingVertical:10, borderRadius:8, backgroundColor:'#eee' },
  choiceActive:{ backgroundColor:'#111' },
  choiceTxt:{ color:'#333', fontWeight:'600' },
  choiceTxtActive:{ color:'#fff' },
});
