import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import likeImage from "./assets/images/like.png";

const post = {
  id: "p1",
  createdAt: "4 m",
  User: {
    id: "u1",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
    name: "Vadim Savin",
  },
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
  numberOfLikes: 11,
  numberOfShares: 2,
};
export default function App() {
  return (
    <View styles={styles.container}>
      <View style={styles.post}>
        {/* header */}
        <View style={styles.header}>
          <Image
            source={{ uri: post.User.image }}
            style={styles.profileImage}
            resizeMode="cover"
          />
          <View style={styles.name__container}>
            <Text style={styles.name}>{post.User.name}</Text>
            <Text style={styles.subtitle}>{post.createdAt}</Text>
          </View>

          <Entypo
            name="dots-three-horizontal"
            size={24}
            color="black"
            style={styles.icon}
          />
        </View>
        {/* body */}
        <View style={styles.body}>
          {/* conditional rendering of description & image using the && operator */}
          {post.description && (
            <Text style={styles.description}>{post.description}</Text>
          )}
          {post.image && (
            <Image source={{ uri: post.image }} style={styles.image} />
          )}
        </View>
        {/* footer */}
        <View style={styles.footer}>
          <View style={styles.stats}>
            <Image source={likeImage} style={styles.likeIcon} />
            <Text style={styles.likeBy}>
              Elon Musk and {post.numberOfLikes} others
            </Text>
            <Text style={styles.shares}>{post.numberOfShares} shares</Text>
          </View>
          <View style={styles.StatsBottom}>
            <View style={styles.footerIcons}>
              <TouchableOpacity>
                <AntDesign name="like2" size={18} style={styles.icon__footer} />
              </TouchableOpacity>
              <Text style={styles.iconText}>Like</Text>
            </View>
            <View style={styles.footerIcons}>
              <TouchableOpacity>
                <FontAwesome5
                  name="comment-alt"
                  size={18}
                  style={styles.icon__footer}
                />
              </TouchableOpacity>
              <Text style={styles.iconText}>Comment</Text>
            </View>
            <View style={styles.footerIcons}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="share-outline"
                  size={18}
                  style={styles.icon__footer}
                />
              </TouchableOpacity>
              <Text style={styles.iconText}>Share</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  post: {
    marginTop: 50,

    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  name__container: {
    justifyContent: "center",
  },
  name: {
    fontWeight: 500,
  },
  subtitle: {
    color: "gray",
  },
  icon: {
    marginLeft: "auto",
  },
  //body
  description: {
    marginTop: 5,
    lineHeight: 20,
    letterSpacing: 0.3,
    paddingHorizontal: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
    marginTop: 10,
  },
  //footer
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  footer: { paddingHorizontal: 10 },
  stats: {
    flexDirection: "row",
    marginVertical: 10,
    borderBottom: StyleSheet.hairlineWidth,
  },
  shares: {
    marginLeft: "auto",
    color: "grey",
  },
  likeBy: {
    color: "grey",
  },
  StatsBottom: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  footerIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontSize: 12,
    color: "grey",
  },
  icon__footer: {
    color: "grey",

    marginRight: 5,
  },
});