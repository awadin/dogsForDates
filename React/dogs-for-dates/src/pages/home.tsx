import { useEffect, useState } from "react";
import { DogCard } from "../components/Card";
import PageHeader from "../components/PageHeader";
import axios from "axios";
import { Spinner, Typography } from "@material-tailwind/react";
import { Dog } from "../App";

function Home() {
    const [dogList, setDogList] = useState([]);
    const [loading, setLoading] = useState(true);

    const getDogData = async () => {
        await axios.get("/api/dogData")
        .then((response) => setDogList(response.data))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }

    useEffect(() => {
        getDogData()
    }, [])

    return(
        <>
            <PageHeader headerTitle="Peruse Our Pups!" />
            <div className="flex flex-wrap justify-center">
                {loading ? <Spinner className="h-8 w-8 mt-16"/> : 
                    dogList.length == 0 ? 
                    <Typography className="flex justify-center ">No dogs listed! Please see the admin page to add some.</Typography>
                    :
                    dogList.map((dog: Dog) => {
                        return(
                            <DogCard 
                                key={dog.id} 
                                id={dog.id}
                                image={dog.image} 
                                title={dog.title} 
                                description={dog.description}
                            />
                        )
                    })
                }
            </div>
        </>
    ) 

}

export default Home;