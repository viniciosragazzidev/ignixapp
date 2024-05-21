export type OSTypedata = {
  id: string;
  custome_name: string;
  custome_contact: string;
  osItems: OSItemTableType[];
  osStatus: String;
  date: Date;
  osValue: number;
};

export type OSItemTableType = {
  id: string;
  item_name: string;
  item_brand: string;
  item_model: string;
  item_value: number;
  item_description: string;
};
