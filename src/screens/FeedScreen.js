import { StyleSheet, FlatList } from "react-native";
import posts from "../../assets/data/posts.json";
import FeedPost from "../../src/components/FeedPost";

const FeedScreen = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <FeedPost post={item} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default FeedScreen;
