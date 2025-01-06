import { useParams } from "react-router-dom";
import useAssetItemsWithHeaders from "../hooks/useAssetItemsWithHeaders";
import { Text, Image, HStack, Stack, Flex } from "@chakra-ui/react";
import CardForms from "../components/CardForms";

const AssetItemDetails = () => {
  const { id } = useParams();
  const { data: assetItemWithHeader } = useAssetItemsWithHeaders(parseInt(id!));
  return (
    <Flex justifyContent="center">
      <CardForms>
        {assetItemWithHeader?.map((assetItemWithHeader) => (
          <Stack spacing={3} key={assetItemWithHeader.id}>
            <HStack>
              <Text fontWeight="bold">Asset Number: </Text>
              <Text>{assetItemWithHeader.assetHeader.assetNumber}</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold">Duty: </Text>
              <Text>{assetItemWithHeader.duty}</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold">Specification: </Text>
              <Text>{assetItemWithHeader.specification}</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold">Valve Type: </Text>
              <Text>{assetItemWithHeader.valveType}</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold">Valve Size: </Text>
              <Text>{assetItemWithHeader.valveSize}</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold">Actuation: </Text>
              <Text>{assetItemWithHeader.actuation}</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold">Actuation Type: </Text>
              <Text>{assetItemWithHeader.actuationType}</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold">Flange Connection: </Text>
              <Text>{assetItemWithHeader.flangeConnection}</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold">Instrumentation: </Text>
              <Text>{assetItemWithHeader.instrumentation}</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold">OEM Part Number: </Text>
              <Text>{assetItemWithHeader.oemPartNumber}</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold">ANSI: </Text>
              <Text>{assetItemWithHeader.ansi}</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold">General Notes: </Text>
              <Text>{assetItemWithHeader.generalNotes}</Text>
            </HStack>
            <Text fontWeight="bold">Image/s: </Text>
            <Image src={assetItemWithHeader.images}></Image>
          </Stack>
        ))}
      </CardForms>
    </Flex>
  );
};

export default AssetItemDetails;
