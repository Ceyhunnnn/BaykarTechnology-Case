/* eslint-disable react/react-in-jsx-scope */
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
export const EditIcon = ({size, color}) => {
  return <Feather name="edit" size={size} color={color} />;
};
export const DeleteIcon = ({size, color}) => {
  return <EvilIcons name="trash" size={size} color={color} />;
};

export const DashboardIcon = ({size, color}) => {
  return <AntDesign name="dashboard" size={size} color={color} />;
};

export const ApiIcon = ({size, color}) => {
  return <AntDesign name="API" size={size} color={color} />;
};
