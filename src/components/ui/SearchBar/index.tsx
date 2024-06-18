import { Input,InputProps } from "@nextui-org/react";
import { Icon } from "@iconify/react";

interface SearchBarProps extends InputProps {}

const SearchBar: React.FC<SearchBarProps> = ({size,...rest}) => {
    return (
        <Input
            classNames={{
                base: "max-w-full sm:max-w-[10rem] h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper: "h-full font-normal text-foreground-500 bg-foreground/20 dark:bg-foreground/20",
                
            }}
            placeholder="Type to search..."
            size={size}
            startContent={<Icon icon="material-symbols-light:search" width={24} />}
            type="search"
            {...rest}
        />         
    )
}

export default SearchBar;