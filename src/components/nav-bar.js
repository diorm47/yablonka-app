import React from "react";
import { View, StyleSheet } from "react-native";
import LocationIcon from "../../assets/icons/location-icon.svg";
import MainLogo from "../../assets/logos/main-logo.svg";
import SearchIcon from "../../assets/icons/serch-icon.svg";

function NavBar() {
  return (
    <View style={styles.navbar}>
      <View>
        <LocationIcon />
      </View>
      <View style={styles.m}>
        <MainLogo />
      </View>
      <View>
        <SearchIcon />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 25,
    marginBottom: 15,
  },
  m: {
    marginLeft: 56,
  },
});

export default NavBar;
