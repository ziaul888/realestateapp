import Link from "next/link";
import Image from "next/image";
//import styles from '../styles/Home.module.css'
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Property from "../component/Property.jsx";
import DefaultImage from "../asset/images/house.webp";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={DefaultImage} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gary.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="medium">
        {title1}
        <br />
        {title2}{" "}
      </Text>
      <Text
        fontSize="lg"
        paddingTop="3"
        paddingBottom="3"
        color="gray.700"
        fontWeight="medium"
      >
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize="xl" bg="blue.300">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home({ propertyForRent, propertyForSale }) {
  // ?\console.log(propertyForSale,propertyForRent)
  return (
    <div>
      <Box>
        <Banner
          purpose="SELL A HOME"
          title1="SELL Homes For"
          title2="Everyone"
          desc1=" Explore Apartments, villas, Homes"
          desc2="and more"
          buttonText="Explore Renting "
          linkName="/Search?purpose=for-rent"
          imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        />
        <Flex flexWrap="wrap">
          {propertyForSale.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>
        <Banner
          purpose="RENT A HOME"
          title1="Rental Homes For"
          title2="Everyone"
          desc1=" Explore Apartments, villas, Homes"
          desc2="and more"
          buttonText="Explore Renting "
          linkName="/Search?purpose=for-rent"
          imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4
       "
        />
        <Flex flexWrap="wrap">
          {propertyForRent.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>
      </Box>
    </div>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=10`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertyForRent: propertyForRent?.hits,
      propertyForSale: propertyForSale?.hits,
    },
  };
}
