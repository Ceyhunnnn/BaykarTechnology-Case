/* eslint-disable react/react-in-jsx-scope */
import {Image} from 'react-native';
import {imageList} from '../../utils/imageList';

export const EditIcon = () => {
  return <Image source={imageList.detail} />;
};
export const DeleteIcon = () => {
  return <Image source={imageList.delete} />;
};
