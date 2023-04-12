import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

import { baseUrl, fetchApi } from "@/utils/fetchApi";

/* ----BANNER COMPONENT---- */
const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, imageUrl, linkName }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p={5}>
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1} <br />{title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1} <br />{desc2}</Text>
      <Button fontSize="x1">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

/* Call the Component: Banner */
export default function Home({ propertiesForRent, propertiesForSale }) {
  console.log(propertiesForRent, propertiesForSale) //check for the properties being passed in
  return (
    <Box>
      <Banner 
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
        {/* In the flex container, display properties we will fetch from the API and map over them... */}
      </Flex>
      <Banner 
        purpose="BUY A HOME"
        title1="Find, Buy & Own Your"
        title2="Dream Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008" 
      />
      <Flex flexWrap="wrap">
        {/* In the flex container, display properties we will fetch from the API and map over them... */}
      </Flex>
    </Box>
  )
}
/*Function to fetch the data using Next.js instead of useEffect */
export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  /* Next.js automatically passes these properties to our component, Home */
  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    }
  }
}