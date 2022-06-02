import React,{useState} from 'react'
import { Button,Modal,Grid,Segment,Icon,Header} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import SignUp from './SignUp';

export default function SignedOut() {

    const [open, setOpen] = useState(false);

    const handleModal = (value) => {
        setOpen(value);
    };

    return (
        <span>
            <Button
                circular
                color="blue"
                content="Giriş Yap"
                as={NavLink}
                to={"/candidate/signIn"}
            />

            
            <SignUp />
        </span>
    )
}
