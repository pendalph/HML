import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Linking, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from '_app/components';
import { ProfileScreenNavigationProp } from '_app/screens/HomeScreen/types';
import { IEventResponse } from '_app/store/events/types';
import { getTimeAgo } from '_app/utils';
import { events } from './mock';
import { styles } from './styles';

export const EventItem: React.FC<IEventResponse> = ({ actor, type, created_at, repo }): JSX.Element => {
  const timeAgo = getTimeAgo(created_at);
  const eventsTypeText = events[type];

  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const openLink = (url: string): void => {
    Linking.openURL(url)
  }

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('EventsDetailScreen', {
        actor: actor,
        type: type,
        created_at: created_at,
        repo: repo
      })}
      style={styles.listItem}
    >
      <View style={styles.avatarContainer}>
        <Image styles={styles.userAvatar} uri={actor.avatar_url}/>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.userName}>{actor.login}</Text>
          <Text style={styles.time}>{timeAgo}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{`${eventsTypeText} в`}</Text>
          <TouchableOpacity onPress={() => openLink(`https://github.com/${repo.name}`)}>
            <Text style={styles.link} numberOfLines={3}>{`https://github.com/${repo.name}`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}