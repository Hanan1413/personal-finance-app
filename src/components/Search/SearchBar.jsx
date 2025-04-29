import { Search} from "lucide-react";


export default function SearchBar({searchQuery, onSearchQuery }) {
  return (
    <div className="relative w-full sm:w-64 ">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      <input className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Search" 
       value={searchQuery}
       onChange={(e) => onSearchQuery(e.target.value)}
       />
    </div>
  );
}
