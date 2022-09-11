import React from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import { RecommendDataType } from '../../types';
import RecommendedItem from './RecommendedItem';
import SectionTitle from './SectionTitle';

type RecommendedListProps = {
  data: RecommendDataType[];
};

const RecommendedList: React.FC<RecommendedListProps> = ({data}) => {
  const renderItem: ListRenderItem<RecommendDataType> = ({item}) => (
    <RecommendedItem item={item} />
  );

  return (
    <View>
      <SectionTitle title="Recommended" />
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default RecommendedList;
