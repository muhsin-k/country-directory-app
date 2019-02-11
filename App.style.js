import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  titleBody: {
    flex: 2,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
  },
  mainContainer: {
    flex: 1,
    padding: 8,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
  picker: {
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 4,
    borderRadius: 4,
  },
  cardView: {
    marginTop: 4,
    marginBottom: 4,
    padding: 8,
    elevation: 2,
    borderRadius: 4,
    flex: 1,
  },
  itemView: {
    flexDirection: 'row',
  },
  itemText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
