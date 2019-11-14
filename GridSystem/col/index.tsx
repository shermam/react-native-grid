import React, { useContext } from 'react';
import {View, ViewStyle, Dimensions} from 'react-native';
import { GridContext } from '../grid';

interface ColProps {
  size: number;
  children?: any;
  styles?: ViewStyle;
}

const Col: React.FC<ColProps> = (props: ColProps) => {
  const gridContext = useContext(GridContext);
  const gapSize = gridContext.gutterSize;
  const colNumber = gridContext.numberOfColumns;
  const screenSize = Dimensions.get("screen").width - gapSize *2;
  const colSize = (screenSize - (gapSize * (colNumber - 1))) / colNumber;

  const width = (props.size * colSize) + ((props.size - 1) * gapSize);
  return (

    // TODO: backgroundColor: "green", minHeight: 50 should be removed
    <View style={[{width, backgroundColor: "green", minHeight: 50}, props.styles]}>
      {props.children}
    </View>
  );
};

export default Col;
