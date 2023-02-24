import { nanoid } from 'nanoid';
import {
  BtnWrapper,
  ContactInfo,
  ListBtn,
  ListItem,
  ListWrapper,
  ModalBtn,
  ModalTitle,
  ModalWrapper,
} from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {  toast } from 'react-toastify';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const submit = id => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <ModalWrapper className="custom-ui">
            <ModalTitle>Are you sure?</ModalTitle>
            <p>You want to delete this contact?</p>
            <BtnWrapper>
              <ModalBtn onClick={onClose}>No</ModalBtn>
              <ModalBtn
                onClick={() => {
                  dispatch(deleteContact(id));
                  toast.success('Success! The contact has been deleted', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                  });
                  onClose();
                }}
              >
                Yes!
              </ModalBtn>
            </BtnWrapper>
          </ModalWrapper>
        );
      },
    });
  };

  const handleDeleteContact = id => {
    submit(id);
  };

  const normalizeFilter = filter.toLocaleLowerCase();

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(normalizeFilter);
  });

  return (
    <ListWrapper>
      {filterContacts.map(contact => {
        return (
          <ListItem key={nanoid()}>
            <ContactInfo>
              {contact.name}: {contact.number}
            </ContactInfo>
            <ListBtn
              type="button"
              onClick={() => {
                handleDeleteContact(contact.id);
              }}
            >
              Delete
            </ListBtn>
          </ListItem>
        );
      })}
    </ListWrapper>
  );
};
