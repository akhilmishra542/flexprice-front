import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value = '',
  placeholder = 'Search...',
  disabled,
  onChange,
}) => {
  return (
    <div className="flex w-full items-center rounded-lg border px-3 py-2 bg-background">
      <Search className="h-4 w-4 text-muted-foreground mr-2" />

      <input
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className="flex-1 bg-transparent outline-none text-sm"
      />

      {value && (
        <button onClick={() => onChange?.('')}>
          <X className="h-4 w-4 text-muted-foreground" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
