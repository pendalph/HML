import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { EventItem } from '_app/components/EventItem/EventItem';
import { getEvents } from '_app/store/events/actions/actions';
import { eventsSelector } from '_app/store/events/reducer';
import { styles } from './styles';

export const HomeScreen: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { items } = useSelector(eventsSelector);

  useEffect(()=> {
    dispatch(getEvents());
  }, []);

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <EventItem {...item} />}
        keyExtractor={keyExtractor}
        maxToRenderPerBatch={5}
        initialNumToRender={5}
      />
    </View>
  )
}