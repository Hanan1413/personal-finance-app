import React, {useContext} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {PotContext} from '../../contexts/potContext/PotContext';

const Pot = ({title}) => {
    // const {posts, addMony, withdrawMony} = useContext(PotContext);
    return (

        <Card >
            <CardHeader title="Pot" />
            <CardContent>
                This is a pot
            </CardContent>

        </Card>
    )
}

export default Pot;