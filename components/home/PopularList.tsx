import React from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import { PopularDataType } from '../../types';
import PopularItem from './PopularItem';
import SectionTitle from './SectionTitle';

type PopularListProps = {
  data: PopularDataType[];
};

const PopularList: React.FC<PopularListProps> = ({data}) => {
  const renderItem: ListRenderItem<PopularDataType> = ({item, index}) => (
    <PopularItem item={item} index={index} />
  );

  return (
    <View style={styles.container}>
      <SectionTitle title="Popular Fashion" />
      <View style={styles.list}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default PopularList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 24
  },
  list: {
    height: 400,
  },
});
