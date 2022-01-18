import React, { useCallback, useEffect, useState } from 'react';
import { RefreshControl, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import { Error } from '_app/components';
import { EventItem } from '_app/components/EventItem/EventItem';
import { getEvents } from '_app/store/events/actions/actions';
import { eventsSelector } from '_app/store/events/reducer';

import { useFocusEffect, useIsFocused } from '@react-navigation/native';

import { styles } from './styles';

export const HomeScreen: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { items, isLoading, isError } = useSelector(eventsSelector);

  const isFocused = useIsFocused();

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (!isLoading && isFocused) {
      fetchEvents();
    }
  }, [isFocused]);

  useFocusEffect(
    useCallback(() => {
      if (isRefreshing && !isScrolling) {
        const intervalId = setInterval(() => {
          fetchEvents();
        }, 60000);
        return () => clearInterval(intervalId);
      } else {
        const timeoutId = setTimeout(() => {
          setIsRefreshing(true);
        }, 15000);
        return () => clearTimeout(timeoutId);
      }
    }, [isRefreshing, isScrolling])
  );

  const fetchEvents = () => {
    dispatch(getEvents());
    setIsRefreshing(false);
  };

  const keyExtractor = useCallback(item => item.id.toString(), []);

  if (isError) {
    return <Error title="Произошла ошибка" description="Попробуйте еще раз" action={fetchEvents} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            enabled={!isRefreshing} // props work only in android devices
            onRefresh={isRefreshing ? () => fetchEvents() : undefined}
          />
        }
        renderItem={({ item }) => <EventItem {...item} />}
        onScrollBeginDrag={() => setIsScrolling(true)}
        onScrollEndDrag={() => setIsScrolling(false)}
        keyExtractor={keyExtractor}
        ListEmptyComponent={() => (
          <Error title="Похоже что данных еще нет" description="подождите немного а потом потяните вниз" />
        )}
        maxToRenderPerBatch={10}
        initialNumToRender={10}
      />
    </View>
  );
};
