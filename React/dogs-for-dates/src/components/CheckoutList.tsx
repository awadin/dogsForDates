import {
    List,
    ListItem,
    Card,
    Typography,
  } from "@material-tailwind/react";
import { CartDog } from "../App";
   
  export function CheckoutList(props: any) {
    return (
      <Card className="w-1/2">
        {props.list.length == 0 ? 
        <Typography className="flex justify-center m-4">No dogs currently in your cart!</Typography>
        : 
          <List>
          {props.list.map((dog: CartDog) => {
            return(
              <ListItem key={dog.id} selected={true} id={dog.id}>
            <div>
              <Typography variant="h6" color="blue-gray">
                {dog.title}
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                {dog.description}
              </Typography>
            </div>
          </ListItem>
            )
          })}
        </List>
      }
      </Card>
    );
  }