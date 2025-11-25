import { Input } from "../ui/input";

interface searchBarProps {
  onSearch: (search: string) => void;
}
const SearchBar = ({ onSearch }: searchBarProps) => {
  return (
    <div className="mb-4 md:w-3/4">
      <h3 className="font-bold"> search news</h3>
      <Input
        placeholder="search news"
        type="text"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
