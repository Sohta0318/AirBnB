import React from "react";
import AppleHeader from "react-native-apple-header";

const ProfileHeader = () => {
  return (
    <AppleHeader
      imageSource={{
        uri: "https://source.unsplash.com/1024x768/?nature",
      }}
    />
  );
};

export default ProfileHeader;
