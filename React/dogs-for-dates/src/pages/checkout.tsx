import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Spinner } from "@material-tailwind/react";
import { CheckoutList } from "../components/CheckoutList";
import PageHeader from "../components/PageHeader";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
    const [open, setOpen] = React.useState(false);
    const [cartList, setCartList] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleOpen = () => setOpen(!open);
    const navigate = useNavigate();

    const getCartData = async () => {
        await axios.get("/api/cartData")
        .then((response) => setCartList(response.data))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }

    useEffect(() => {
        getCartData()
    }, [])

    return(
        <>
            <PageHeader headerTitle="Checkout" />
            <div className="flex justify-center">
                {loading ? <Spinner className="h-8 w-8 mt-16"/> : <CheckoutList list={cartList} />}
            </div>
            <div className="flex justify-between w-1/2 m-auto mt-4 mb-8">
                <Button onClick={() => navigate(-1)} className="flex bg-dog-brown" disabled={loading}>Go back</Button>
                <span className="flex flex-grow w-1/2"></span>
                <Button onClick={handleOpen} className="flex bg-dog-tongue" disabled={loading}>Looks Good!</Button>
            </div>
            <Dialog open={open} handler={handleOpen} size="xs">
                <DialogHeader>You're all set for your date!</DialogHeader>
                <DialogBody>
                    I hope you enjoyed this demo experience!
                </DialogBody>
                <DialogFooter>
                <Button variant="gradient" color="green" onClick={handleOpen}>
                    <span>Thanks!</span>
                </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}