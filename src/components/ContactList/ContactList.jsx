import { deleteContact } from 'components/redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getContacts } from 'components/redux/contacts/selectors';
import { Loader } from 'components/Loader/Loader';
import { useState } from 'react';
import { Item, Button, List, Text } from './ContactList.styled';

const getNormalizedContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  } else {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const normalizedContacts = getNormalizedContacts(contacts, filter);
  const [loading, setLoading] = useState('');

  const dispatch = useDispatch();
  const handleDelete = async id => {
    setLoading(id);
    try {
      await dispatch(deleteContact(id));
      setLoading('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <List>
      {normalizedContacts.map((contact, id) => (
        <Item key={id}>
          <Text>{contact.name} :</Text>
          <Text>{contact.number}</Text>
          <Button onClick={() => handleDelete(contact.id)}>
            {loading === contact.id ? <Loader /> : <Text>Delete</Text>}
          </Button>
        </Item>
      ))}
    </List>
  );
};
