import { Typography } from "@material-tailwind/react";
import PageHeader from "../components/PageHeader";

export default function About() {
    return (
        <>
            <PageHeader headerTitle="About" />
            <Typography className="flex justify-center ml-56 mr-56">
                Made with devotion to dogs and dates everywhere :) 
                The idea is that you can rent out these friendly hounds to bring with you on a date!
                You'll feel more comfortable with a furry friend by your side, and your date is sure to love them too!
                Thank you for taking the time to consider my work!
            </Typography>
        </>
    )
}