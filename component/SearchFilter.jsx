import React from "react";
import { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Select,
  Input,
  Spinner,
  Icon,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel, MdQueryBuilder } from "react-icons/md";
import { filterData, getFilterValues } from "../utils/filterData";

export const SearchFilter = () => {
  const [filters, setFilters] = useState(filterData);
  const searchPropertis = () => {};
  return (
    <>
      <Flex bg="gary.100" p="4" justifyContent="center" flexWrap="wrap">
        {filterData.map((filter) => (
          <Box key={filter.queryName}>
            <Select
              onChange={(e) =>
                searchProperties({ [filter.queryName]: e.target.value })
              }
              placeholder={filter.placeholder}
              w="fit-content"
              p="2"
            >
              {filter?.items.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              ))}
            </Select>
          </Box>
        ))}
      </Flex>
    </>
  );
};
