/* eslint-disable react/react-in-jsx-scope */
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
export const EditIcon = ({size, color}) => {
  return <Feather name="edit" size={size} color={color} />;
};
export const DeleteIcon = ({size, color}) => {
  return <EvilIcons name="trash" size={size} color={color} />;
};
export const DashboardIcon = ({size, color}) => {
  return <AntDesign name="dashboard" size={size} color={color} />;
};
export const StartIcon = ({size, color}) => {
  return <AntDesign name="staro" size={size} color={color} />;
};
export const ExperienceIcon = ({size, color}) => {
  return <AntDesign name="link" size={size} color={color} />;
};
export const ApiIcon = ({size, color}) => {
  return <AntDesign name="API" size={size} color={color} />;
};
export const CheckIcon = ({size, color}) => {
  return <AntDesign name="check" size={size} color={color} />;
};
export const IdentityCard = ({size, color}) => {
  return <FontAwesome name="id-card-o" size={size} color={color} />;
};
export const ProjectIcon = ({size, color}) => {
  return <Ionicons name="git-network-outline" size={size} color={color} />;
};
export const CalendarIcon = ({size, color}) => {
  return <FontAwesome name="calendar" size={size} color={color} />;
};
export const GenderIcon = ({size, color}) => {
  return <Entypo name="500px" size={size} color={color} />;
};
export const PhoneIcon = ({size, color}) => {
  return <Feather name="phone" size={size} color={color} />;
};
export const LocationIcon = ({size, color}) => {
  return <Entypo name="location-pin" size={size} color={color} />;
};
export const EducationIcon = ({size, color}) => {
  return <Ionicons name="school-outline" size={size} color={color} />;
};
export const GraduateIcon = ({size, color}) => {
  return <FontAwesome5 name="user-graduate" size={size} color={color} />;
};
