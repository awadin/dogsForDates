import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    PopoverHandler,
    Popover,
    PopoverContent,
  } from "@material-tailwind/react";
import axios from "axios";
import { Dog } from "../App";

  export function DogCard(props: Dog) {
    
    async function addToCart(dog:Dog) {
      axios.post('/api/cartData/',{
        title: dog.title,
        description: dog.description,
      }).then((response) => {
        if(response.status === 201) {
          console.log('Success!')
        }
      }).catch((error) => {
        console.log(error);
      });
    }

    return (
      <Card className="m-12 w-96 bg-dog-brown">
        <CardHeader color="blue-gray" floated={false} className="relative h-52">
          <img
            src={props.image}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="white" className="mb-2">
            {props.title}
          </Typography>
          <Typography color="white">
            {props.description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
        <Popover>
          <PopoverHandler onClick={() => addToCart(props)}>
            <Button className="bg-dog-tongue">Book this Bowwow</Button>
          </PopoverHandler>
          <PopoverContent>
            Added to your cart!
          </PopoverContent>
        </Popover>
        </CardFooter>
      </Card>
    );
  }
