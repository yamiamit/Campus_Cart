import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import RatingView from "../components/RatingView";

const ReviewCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.ReviewCardHeader}>
        <View style={styles.profile}>
            <Image source={props.image} style={styles.imageContainer} />
            <Text style={styles.name}>{props.name}</Text>
        </View>
        <RatingView rating={props.rating} />
      </View>
      <Text>{props.review}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: 600,
    marginLeft: 7,
    fontSize: 16,
  },
  imageContainer: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 7,
  },
  ReviewCardHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    width: 280,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 20,
    marginRight: 20,
  },
});

export default ReviewCard;
