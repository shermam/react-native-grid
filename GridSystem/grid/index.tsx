import React from "react";
import { View, ViewStyle } from "react-native";

export const GridContext = React.createContext({
  gutterSize: 0,
  numberOfColumns: 0
});

interface GridStyles {
  view: ViewStyle;
}

const styles: GridStyles = {
  view: {
    flex: 1
  }
};

interface GridProps {
  children: any;
  gutterSize: number;
  numberOfColumns: number;
}

const Grid: React.FC<GridProps> = (props: GridProps) => {
  GridContext.Provider;
  return (
    <GridContext.Provider value={{ ...props }}>
      <View style={[styles.view, ]}>
        {props.children}
      </View>
    </GridContext.Provider>
  );
};

export default Grid;
