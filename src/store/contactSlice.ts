import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
    id: string;
    firstname: string;
    lastname: string;
    mobileNo: string;
    isActive: boolean;
}

interface ContactState {
    contacts: Contact[];
}

const initialState: ContactState = {
    contacts: []
}

const contactSlice = createSlice({
    name: "Contacts",
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction<Contact>) => {
            state.contacts.push(action.payload);
        },
        editContacts: (state, action: PayloadAction<Contact>) => {
            const i = state.contacts.findIndex((contact) => contact.id === action.payload.id);
            if (i !== -1) {
                state.contacts[i] = action.payload;
            }
        },
        delContact: (state, action: PayloadAction<string>) => {
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
        }
    }
});

export const { addContact, editContacts, delContact } = contactSlice.actions;
export default contactSlice.reducer;
