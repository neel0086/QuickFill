import React from "react";

// Define a map of image names to their corresponding URLs
const imageMap = {
  menu: "menu.png",
  email: "gmail.png",
  name: "name.png",
  address: "address.png",
  location: "location.png",
  gender: "gender.png",
  linkedin: "linkedin.png",
  github: "github.png",
  website: "website.png",
  leetcode: "leetcode.png",
  codechef: "codechef.png",
  codeforces: "codeforces.png",
  sex: "gender.png",
  school: "school.png",
  // Add more mappings as needed
};

// CustomIcon component takes an 'imageName' prop and returns the corresponding image component
export const CustomIcon = (imageName: string) => {
  // Check if the imageName exists in the imageMap
  if (imageMap.hasOwnProperty(imageName)) {
    // If yes, return the image component with the corresponding URL
    return imageMap[imageName];
  } else {
    // If imageName doesn't match any entry in the imageMap, return null or handle accordingly
    return null; // You can also throw an error or provide a default image
  }
};

const synonymWord = (key: string) => {
  if (
    key.includes("school") ||
    key.includes("university") ||
    key.includes("college") ||
    key.includes("graduation")
  ) {
    key += " school university college graduation";
  }
  return key;
};
export const SelectImage = (key: string) => {
  key = synonymWord(key);
  const imageKeys = Object.keys(imageMap);
  const matchingKey = imageKeys.find((imageKey) => key.includes(imageKey));
  console.log(matchingKey);
  if (matchingKey) {
    return imageMap[matchingKey];
  } else {
    return false; // No matching key found in imageMap
  }
};
