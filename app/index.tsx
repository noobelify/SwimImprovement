import { Text, View } from "react-native";
import { styles } from "./indexstyle";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* this is for the header */}
      <View style={styles.headerRow}>
        <View style = {styles.profileIcon}></View>
        <View style={styles.headerBar}>
          <Text style={styles.headerText}>Hi, Evan.</Text>
        </View>
        
      </View>
      {/*This is for content block 1*/}
      <View style = {styles.ContentBlock1}>
        <Text style = {styles.ContentTextCenter}> Content block 1</Text>
      </View>
      {/*This is for content block 2*/}
      <View style = {styles.ContentBlock2}>
        <Text style = {styles.ContentTextCenter}> Content block 2</Text>
      </View>

    </View>

  );
}
