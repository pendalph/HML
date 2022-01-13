import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { ListItem } from '_app/components/ListItem/ListItem';
import { getDateFromISO } from '_app/utils';
import { styles } from './styles';
import { TParamList } from './types';

export const EventsDetailScreen: React.FC = (): JSX.Element => {
  const route = useRoute<TParamList>()

  const { actor, repo, type, created_at } = route.params;

  return (
    <View style={styles.container}>
      <ListItem title='пользователь' value={actor.login} />
      <ListItem title='дата' value={getDateFromISO(created_at)} />
      <ListItem title='репозиторий' value={repo.name} />
      <ListItem title='тип' value={type} />
    </View>
  )
}