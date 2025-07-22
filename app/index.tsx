import { Text, View } from "react-native";
import { styles } from "./indexstyle";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* this is for the header */}
      <View style={styles.headerRow}>
        <View style={styles.headerBar}>
          <Text style={styles.headerText}>Hi, this is my first app.</Text>
        </View>
        <View style = {styles.profileIcon}></View>
      </View>
      {/*This is for content block 1*/}
      <View>
        <Text>Content block 1</Text>
      </View>
      {/*This is for content block 2*/}
      <View>
        <Text>Content block 2</Text>
      </View>

    </View>

  );
}
