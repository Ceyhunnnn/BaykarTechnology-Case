import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({
  onPress,
  onLongPress,
  title,
  iconLeft,
  iconRight,
  style,
  textStyle,
  disabled,
  activeOpacity,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={[disabled ? styles.disabledButton : styles.button, style]}>
      {iconLeft}
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      {iconRight}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#b43b29',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  disabledButton: {
    backgroundColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Button;
