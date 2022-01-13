import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { RefreshControl, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { Error } from '_app/components';
import { EventItem } from '_app/components/EventItem/EventItem';
import { getEvents } from '_app/store/events/actions/actions';
import { eventsSelector } from '_app/store/events/reducer';
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
    }, [isRefreshing, isScrolling]),
  );

  const fetchEvents = () => {
    dispatch(getEvents());
    setIsRefreshing(false);
  };

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  if (isError) {
    return <Error title='Произошла ошибка' description='попробуйте еще раз' action={fetchEvents}/>
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={!isLoading ? () => fetchEvents() : undefined}
          />
        }
        renderItem={({ item }) => <EventItem {...item} />}
        onScroll={event => setIsScrolling(!event ? false : true)}
        keyExtractor={keyExtractor}
        ListEmptyComponent={() => 
          <Error
            title='Ой, мы что то напутали'
            description='кажется данных еще нет, потяните вниз'
          />
        }
        maxToRenderPerBatch={5}
        initialNumToRender={5}
      />
    </View>
  )
}