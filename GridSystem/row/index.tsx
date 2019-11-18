import React from 'react';
import {View, ViewStyle} from 'react-native';

interface RowStyles {
  view: ViewStyle;
}

const styles: RowStyles = {
  view: {
    flexDirection: "row",
    padding: 8,
  }
}

interface RowProps {
  children?: any
}

const Row: React.FC<RowProps> = (props: RowProps) => {
  return (
    <View style={styles.view}>
      {props.children}
    </View>
  );
};

export default Row;
