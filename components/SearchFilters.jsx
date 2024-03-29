import { useEffect, useState } from "react";
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

import { filterData, getFilterValues } from '../utils/filterData';

const SearchFilters = () => {
    /* Get filter data to use in property search */
    const [filters, setFilters] = useState(filterData);

    const router = useRouter();

    /* Update property state */
    const searchProperties = (filterValues) => {
        /*update url when the state changes */
        const path = router.pathname;
        const { query } = router;

        const values = getFilterValues(filterValues)

        values.forEach((item) => {
        if(item.value && filterValues?.[item.name]) {
            query[item.name] = item.value
        }
        })

        router.push({ pathname: path, query: query });
    };

    return (
        <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
      {filters?.map((filter) => (
        <Box key={filter.queryName}>
          <Select 
            onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })} 
            placeholder={filter.placeholder} 
            w='fit-content' 
            p='2' 
            >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
      </Flex>
    )
}

export default SearchFilters;