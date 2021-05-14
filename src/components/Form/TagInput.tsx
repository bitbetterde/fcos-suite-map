import React, { useEffect, useMemo, useState } from 'react';
import type { Tag as TagType } from 'src/types/PointOfInterest';
import { generateRandomHslColor } from '../../util/color';
import Tag from '../Tag';

interface Props {
  label?: string;
  tags: TagType[];
  options: TagType[];
  onTagsChange: (tags: TagType[]) => void;
  required?: boolean;
}

const TagInput = ({ label, tags, options, onTagsChange, required }: Props) => {
  // const [allTags, setAllTags] = useState<TagType[]>([]);
  // All options
  const [tagOptions, setTagOptions] = useState<TagType[]>([]);
  // The text input
  const [draftEntry, setDraftEntry] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  // Only show options that start with current draftEntry value
  const filteredTagOptions = useMemo(
    () => tagOptions.filter((tagOption) => tagOption.displayName.toLowerCase().startsWith(draftEntry.toLowerCase())),
    [tagOptions, draftEntry],
  );

  const handleKeyboardInput = (e: React.KeyboardEvent) => {
    if (draftEntry === '') {
      if (e.nativeEvent.key === 'Backspace') {
        const tagsClone = JSON.parse(JSON.stringify(tags));
        const removedTag = tagsClone.pop();
        if (removedTag) {
          onTagsChange(tagsClone);
        }
      }
    } else {
      if (e.nativeEvent.key === 'Enter') {
        e.preventDefault();
        // Check if a Tag with that name already exists
        const allTagNames = tags.map((tag) => tag.displayName.toLowerCase());
        const isDuplicate = allTagNames.includes(draftEntry.toLowerCase());
        if (!isDuplicate) {
          onTagsChange([...tags, { displayName: draftEntry, color: generateRandomHslColor(60, 80), id: 'draft' }]);
        }
        setDraftEntry('');
      }
    }
  };

  const handleClickDeleteTag = (tag: TagType) => {
    onTagsChange(tags.filter((filterTag) => tag.displayName.toLowerCase() !== filterTag.displayName.toLowerCase()));
  };

  const handleSelectTag = (tag: TagType) => {
    onTagsChange([...tags, tag]);
  };

  useEffect(() => {
    setTagOptions(
      options.filter(
        (tagOption) => !tags.find((tag) => tag.displayName.toLowerCase() === tagOption.displayName.toLowerCase()),
      ),
    );
  }, [tags, options]);

  return (
    <label className="relative block mb-4">
      {!!label && (
        <span className="form-label">
          {label}
          {required && `*`}
        </span>
      )}
      <div
        tabIndex={0}
        className={`${
          showOptions && filteredTagOptions.length ? 'rounded-t-lg hover:border-opacity-40 ' : 'rounded-lg '
        }flex w-full border-2 border-black border-opacity-20 focus-within:border-indigo-300 focus-within:ring focus-within:ring-indigo-200 focus-within:ring-opacity-50 input-chevron mt-1`}
      >
        <div className="flex flex-wrap items-center flex-1 p-2">
          {tags.map((selectedTag) => (
            <Tag
              key={`selected${selectedTag.id}`}
              onClickDelete={() => handleClickDeleteTag(selectedTag)}
              color={selectedTag.color}
            >
              {selectedTag.displayName}
            </Tag>
          ))}
          <input
            onKeyDown={handleKeyboardInput}
            onChange={(e) => {
              const newValue = e.target.value;
              setDraftEntry(newValue);
            }}
            onFocus={() => setShowOptions(true)}
            onBlur={() => {
              setShowOptions(false);
            }}
            type={'text'}
            value={draftEntry}
            className={`w-16 block p-0 flex-1 rounded-lg border-0 focus:outline-none focus:ring-0 ${
              tags.length ? '' : 'px-3'
            }`}
          />
        </div>
      </div>
      {/* Options Dropdown */}
      {filteredTagOptions.length > 0 && (
        <ul
          className={`${
            showOptions && filteredTagOptions.length ? 'block ' : 'hidden '
          }rounded-b-lg z-10 absolute w-full bg-white border-2 border-t-0 shadow-md`}
        >
          {filteredTagOptions.map((option) => {
            return (
              <li
                key={`${option.id}`}
                onMouseDown={(e) => {
                  handleSelectTag(option);
                }}
                className="w-full p-1 hover:bg-gray-100"
              >
                <Tag color={option.color}>{option.displayName}</Tag>
              </li>
            );
          })}
        </ul>
      )}
    </label>
  );
};

export default TagInput;
