import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/contacts/operations';
import { getContacts } from 'components/redux/contacts/selectors';
import { Loader } from 'components/Loader/Loader';
import { Form, Button, Input, Label, Text } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const items = useSelector(getContacts);
  const flag = useRef(false);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    flag.current = true;
    const contactsList = [...items];
    if (
      contactsList.findIndex(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      ) !== -1
    ) {
      alert(`${name} is already in contacts.`);
      flag.current = false;
      return;
    }
    try {
      await dispatch(addContact({ name: name, number: number }));
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
    flag.current = false;
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Text>Name</Text>
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </Label>

      <Label>
        <Text>Number</Text>
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </Label>

      <Button>
        {flag.current === true ? <Loader /> : <span>Add Contact</span>}
      </Button>
    </Form>
  );
};
