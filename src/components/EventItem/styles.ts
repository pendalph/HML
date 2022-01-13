import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  listItem: {
    height: 97,
    backgroundColor: '#FFFFFF',
    marginBottom: 25,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row'
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    marginLeft: 20
  },
  userName: {
    marginLeft: 15,
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  descriptionText: {
    marginLeft: 15,
    paddingBottom: 5,
    fontSize: 12,
    fontWeight: 'normal',
  },
  link: {
    fontSize: 13,
    color: 'blue',
    fontStyle: 'italic',
    marginLeft: 15,
    marginRight: 10,
    flexWrap: 'wrap'
  },
  time: {
    marginLeft: 'auto',
    paddingRight: 15,
    fontSize: 12
  },
  topContainer: {
    height: 16,
    marginBottom: 8,
    flexDirection: 'row'
  },
  descriptionContainer: {

  },
  textContainer: {
    flexDirection: 'column',
    flex: 1
  }
})