import { Box, Spacer, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified, goVerified } from "react-icons/go";
import millify from "millify";

/* fetch our utility functions */
import { baseUrl, fetchApi } from "@/utils/fetchApi";

/* */
const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) => (
    <Box maxWidth="1000px" margin="auto" p="4">
        {photos && <ImageSCroller data={photos} />}
    </Box>
)

export default PropertyDetails;

export async function getServerSideProps({params: { id }}) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`)

    return {
        props: {
            propertyDetails: data
        } 
    }
}