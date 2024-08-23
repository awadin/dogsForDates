import { Typography } from "@material-tailwind/react";

export default function PageHeader(prop: any) { 
    return(
        <Typography variant="h1" color="gray" className="flex justify-center mt-4 mb-4">
            {prop.headerTitle}
        </Typography>
    ) 
}