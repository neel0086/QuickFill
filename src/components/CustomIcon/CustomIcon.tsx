import React from "react";

// Define a map of image names to their corresponding URLs
const imageMap = {
  menu: "images/menu.png",
  email: "images/gmail.png",
  name: "images/name.png",
  address: "images/address.png",
  location: "images/location.png",
  gender: "images/gender.png",
  linkedin: "images/linkedin.png",
  github: "images/github.png",
  website: "images/website.png",
  leetcode: "images/leetcode.png",
  codechef: "images/codechef.png",
  codeforces: "images/codeforces.png",
  sex: "images/gender.png",
  school: "images/school.png",
  facebook: "images/facebook.png",
  instagram: "images/instagram.png",
  twitter: "images/twitter.png",

  // Add more mappings as needed
};

const svgMap = {
  delete: "svgs/delete.svg",
  view: "svgs/view.svg",
  update: "svgs/update.svg",
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
  const matchingKey = imageKeys.find((imageKey) =>
    key.toLowerCase().includes(imageKey)
  );
  if (matchingKey) {
    return imageMap[matchingKey];
  } else {
    return `https://api.dicebear.com/8.x/bottts-neutral/svg?seed=${key}`; // No matching key found in imageMap
  }
};
export const SelectSVG = (key: string) => {
  key = synonymWord(key);
  const imageKeys = Object.keys(svgMap);
  const matchingKey = imageKeys.find((imageKey) =>
    key.toLowerCase().includes(imageKey)
  );
  if (matchingKey) {
    return svgMap[matchingKey];
  } else {
    return false; // No matching key found in imageMap
  }
};
