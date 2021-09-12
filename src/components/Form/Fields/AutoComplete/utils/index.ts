import { Item } from 'chakra-ui-autocomplete';

export const convertArrayToString = (array: Item[]) => array.map((item) => item.value).toString();
