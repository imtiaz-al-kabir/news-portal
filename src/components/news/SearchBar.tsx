import { Input } from "../ui/input";

interface searchBarProps {
  onSearch: (search: string) => void;
}
const SearchBar = ({ onSearch }: searchBarProps) => {
  return (
    <div className="mb-4 md:w-2/4">
      <h3 className="font-bold pb-4"> Search News</h3>
      <Input
        placeholder="search news"
        type="text"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
