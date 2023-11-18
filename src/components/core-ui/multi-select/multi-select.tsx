import { useCallback, useMemo, useState } from 'react';

import twc from 'tw-classnames';

import Button from '../button/button';
import { IMultiSelectProps } from './IMultiSelect';

function MultiSelect({ options, className, isMulti }: IMultiSelectProps) {
  const [selectedOptions, setSelectedOptions] = useState<string | string[] | undefined>([]);

  const handleButtonClick = useCallback(
    (id: string) => {
      if (isMulti) {
        // If multi-select, toggle selection
        const isSelected = selectedOptions ? selectedOptions.includes(id) : false;

        if (isSelected) {
          setSelectedOptions((selectedOptions as string[]).filter((selectedId) => selectedId !== id));
        } else {
          setSelectedOptions([...(selectedOptions as string[]), id]);
        }
      } else {
        // If single-select, select only the clicked option
        setSelectedOptions(id);
      }
    },
    [isMulti, selectedOptions]
  );

  const isSelected = useMemo(() => {
    return (id: string) => {
      if (isMulti) {
        return selectedOptions ? selectedOptions.includes(id) : false;
      }
      return selectedOptions === id;
    };
  }, [isMulti, selectedOptions]);

  return (
    <ul className={twc('flex flex-col gap-3', className)}>
      {options &&
        options.map(({ id, title }) => (
          <li key={id}>
            <Button
              onClick={() => handleButtonClick(id)}
              variant='text'
              className={twc(
                'w-full px-4 py-2 rounded-md shadow-md',
                isSelected(id) ? 'bg-secondary text-white' : 'bg-gray-100 text-gray-700'
              )}
            >
              {title}
            </Button>
          </li>
        ))}
    </ul>
  );
}

export default MultiSelect;
