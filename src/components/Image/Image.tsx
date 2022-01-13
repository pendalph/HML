import React from 'react';
import FastImage from 'react-native-fast-image';
import { IImageProps } from './types';

export const Image: React.FC<IImageProps> = ({ styles, uri }): JSX.Element => {
  return (
  <FastImage
        style={styles}
        source={{
            uri: uri,
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
    />
  );
};