import React from "react";
import { Text, View } from "react-native";
import { style } from "./styles";
import { IListItemProps } from "./types";

export const ListItem: React.FC<IListItemProps> = ({ title, value }): JSX.Element => {
  return (
    <View style={style.container}>
      <View><Text style={style.title}>{title}</Text></View>
      <View><Text style={style.description}>{value}</Text></View>
    </View>
  )
}