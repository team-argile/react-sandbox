import { SetStateAction, useCallback, useMemo, useState } from "react";
import Select, { ActionMeta, components, SingleValue } from "react-select";
import { Flex, FlexProps } from "@chakra-ui/react";
import {
  convertSuggestionToAddress,
  addressToOption,
  suggestionToOption,
} from "./helpers/addressHelpers";
import { useFetchAddressSuggestions } from "@/hooks/useFetchAddressSuggestions";
import { BanFormat, Feature } from "@/types/address";
import { CSSObject } from "@emotion/react";

const styles = {
  container: (provided: CSSObject) => ({
    ...provided,
    width: "500px",
  }),
  control: (provided: CSSObject) => ({
    ...provided,
    borderRadius: "12px",
    padding: "5px 2px 5px 7px",
    border: "none", // This removes the border on the input field
    boxShadow: "none", // This removes any shadow that might be applied to the border
  }),
};

type AddressInputProps = FlexProps & {
  onValueChanged: (address: BanFormat) => void;
  onClear?: () => void;
  value?: BanFormat | null;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Input = (props: any) => <components.Input {...props} isHidden={false} />;

export default function AddressInput({
  onValueChanged,
  onClear,
  value,
}: AddressInputProps) {
  const [inputValue, setInputValue] = useState("");
  const {
    data,
    isError,
    isLoading: isLoadingAutocomplete,
  } = useFetchAddressSuggestions(inputValue);

  const options = useMemo(
    () => data?.map((suggestion: Feature) => suggestionToOption(suggestion)),
    [data]
  );

  // Handler for when a new option is selected or the input changes
  const handleInputChange = useCallback(
    (
      selectedOption: SetStateAction<string>,
      { action }: { action: string }
    ) => {
      if (action !== "input-change") {
        return;
      }
      setInputValue(selectedOption);
    },
    []
  );

  const handleChange = useCallback(
    (
      selected?: SingleValue<{ value: string }>,
      action?: ActionMeta<{ value: string }>
    ) => {
      if (action?.action === "clear") {
        setInputValue("");
        onClear?.();
        return;
      }
      if (action?.action === "select-option") {
        if (!data || data.length === 0) return;
        const item = data.find((suggestion) => {
          if (suggestion.properties.id === selected?.value) {
            return suggestion;
          }
          return null;
        });
        if (!item) return;
        onValueChanged(convertSuggestionToAddress(item));
        setInputValue(item.properties.label);
      }
    },
    [data, onClear, onValueChanged]
  );

  const option = useMemo(
    () => (value?.banId ? addressToOption(value) : undefined),
    [value]
  );

  return (
    <Flex gap={2} align="center" direction="column" m={10} w="100%">
      <Select
        styles={styles}
        options={options}
        onInputChange={handleInputChange}
        onChange={handleChange}
        isLoading={isLoadingAutocomplete}
        defaultValue={option}
        inputValue={inputValue}
        isClearable
        filterOption={() => true}
        placeholder={"1 grande-rue 25000 Besançon"}
        loadingMessage={() => "Chargement des suggestions..."}
        noOptionsMessage={() =>
          isError
            ? "Impossible de charger des suggestions..."
            : "Aucune adresse trouvée"
        }
        components={{
          Input,
        }}
      />
    </Flex>
  );
}
