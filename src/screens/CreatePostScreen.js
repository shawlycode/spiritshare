import { View, StyleSheet, Text, Image, TextInput, Button } from "react-native";
import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const user = {
  id: "u1",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  name: "Vadim Savin",
};

const CreatePostScreen = () => {
  const navigation = useNavigation();
  const [description, setDescription] = useState(" ");
  const [image, setImage] = useState(null);
  const onSubmit = () => {
    // console.warn("Post", description);
    setDescription("");
    navigation.goBack();
  };
  const Profile = () => {
    console.warn("profile page");
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: user.profileImage }}
          style={styles.profileImage}
        />

        <Text style={styles.name}>{user.name}</Text>
        <Entypo
          name="images"
          size={24}
          color="purple"
          onPress={pickImage}
          style={styles.imagePicker__icon}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="What's in your spirit today?"
          multiline
          style={styles.placeholderText}
        />
      </View>
      {image && (
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMethod="cover"
        />
      )}
      <Button title="Post" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 50,
    paddingBottom: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  name: {
    fontWeight: 500,
    fontSize: 20,
  },
  placeholderText: {
    padding: 10,

    fontSize: 18,
  },
  input: {
    paddingHorizontal: 10,
  },
  imagePicker__icon: {
    marginLeft: "auto",
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
  },
});

export default CreatePostScreen;
