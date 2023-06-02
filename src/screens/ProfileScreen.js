import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import {
  Ionicons,
  EvilIcons,
  Entypo,
  FontAwesome5,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import UpdateProfileScreen from "./UpdateProfileScreen";

const user = {
  id: "u1",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
  name: "Vadim Savin",
  profileImg:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  join: "October , 2021",
  location: "Accra, Ghana",
};

const ProfileScreen = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.profileBg}>
        <ImageBackground source={{ uri: user.image }} style={styles.image} />
        <View style={styles.profilePic}>
          <Image source={{ uri: user.profileImg }} style={styles.profile} />
          <Text style={styles.profileName}>{user.name}</Text>
        </View>
      </View>
      <View style={styles.profileBtn}>
        <View style={styles.btn}>
          <Ionicons name="add-circle" size={22} color="#fff" />
          <Text style={styles.btnText}>Add to Story</Text>
        </View>
        <Pressable style={styles.btn2} onPress={() => navigation.navigate('UpdateProfile')}>
          <EvilIcons name="pencil" size={24} color="black" />
          <Text style={styles.btnText2}>Edit Profile</Text>
        </Pressable>
        <View style={styles.btn3}>
          <MaterialIcons name="logout" size={24} color="black" />
        </View>
      </View>
      <View style={styles.education}>
        <View style={styles.eduContainer}>
          <FontAwesome5 name="graduation-cap" size={18} color="grey" />
          <Text style={styles.eduText}>Graduated University</Text>
        </View>
        <View style={styles.eduContainer}>
          <AntDesign name="clockcircle" size={18} color="grey" />
          <Text style={styles.eduText}>Joined {user.join}</Text>
        </View>
        <View style={styles.eduContainer}>
          <Entypo name="location-pin" size={18} color="grey" />
          <Text style={styles.eduText}>From {user.location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  profileBg: {
    flex: 0.6,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    zIndex: -1,
    position: "relative",
  },
  profile: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "#fff",
  },
  profilePic: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 200,
    marginLeft: 135,
  },
  profileName: {
    fontWeight: 500,
    paddingTop: 10,
    fontSize: 18,
  },
  profileBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  btn: {
    width: 140,
    flexDirection: "row",
    justifyContent: "",
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 3,

    backgroundColor: "royalblue",
    borderRadius: 5,
  },
  btn2: {
    width: 140,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",

    borderRadius: 5,
  },
  btn3: {
    width: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    paddingVertical: 3,
    borderRadius: 5,
  },
  btnText: {
    color: "#fff",
    paddingLeft: 5,
  },
  btnText2: {
    color: "#000",
    paddingLeft: 5,
  },
  btnText3: {
    color: "#000",
    paddingLeft: 5,
  },
  next: {
    flex: 1,
  },
  eduContainer: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  eduText: {
    paddingLeft: 5,
  },
});

export default ProfileScreen;
