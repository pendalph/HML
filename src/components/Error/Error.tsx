import React from 'react';
import { Button, Text, View } from 'react-native';

import { style } from './styles';
import { IErrorProps } from './types';

export const Error: React.FC<IErrorProps> = ({ title, description, action }) => {
  return (
    <View style={style.container}>
      <Text style={style.errorText}>{title}</Text>
      <Text style={style.errorDescription}>{description}</Text>
      {action && <Button title="загрузить еще раз" onPress={action} />}
    </View>
  );
};
