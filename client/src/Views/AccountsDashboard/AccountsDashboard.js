import React, { useEffect, useState } from 'react';

import AccountCard from './Components/AccountCard';
import NewAccountForm from './Components/NewAccountForm';
import Message from '../../Components/Message/Message';

import { getAllAccounts, createNewAccount, editAccount, deleteAccount } from '../../Api/Accounts';


const AccountsDashboard = () => {

    const [accounts, setAccounts] = useState([]);
    const [message, setMessage] = useState({ isOpen: false, type: "", text: "" });

    useEffect(() => {
        refreshAccountsHandler();
    }, []);

    const refreshAccountsHandler = async () => {
        const response = await getAllAccounts();
        if(response){
            setAccounts(response);
        } else {
            setMessage({ isOpen: true, type: "error", text: "Error listing the accounts" });
        }
    }

    const addAccountHandler = async (email, password) => {
        const response = await createNewAccount(email, password);
        if(response){
            refreshAccountsHandler();
        } else {
            setMessage({ isOpen: true, type: "error", text: "Error adding a new account"});
        }
    }

    const editAccountHandler = async (id, newEmail, newPassword) => {
        const response = await editAccount(id, newEmail, newPassword);
        if(response){
            refreshAccountsHandler();
        } else {
            setMessage({ isOpen: true, type: "error", text: "Error editing the account" });
        }
    }

    const deleteAccountHandler = async (id) => {
        const response = await deleteAccount(id);
        if(response){
            refreshAccountsHandler();
        } else {
            setMessage({ isOpen: true, type: "error", text: "Error deleting the account" });
        }
    }

    return (
        <div>
            {
                accounts.map(a => {
                    return (
                        <AccountCard
                            email = {a.email}
                            id = {a.id}
                            onEdit = {editAccountHandler}
                            onDelete = {deleteAccountHandler}
                        />
                    )
                })
            }
            <NewAccountForm onAdd={addAccountHandler} />
        
            <Message
                isOpen={message.isOpen}
                type={message.type}
                text={message.text}
                onClose={() => setMessage({ isOpen: false, type: "", text: "" })}
            />
        </div>
    );
}

export default AccountsDashboard;