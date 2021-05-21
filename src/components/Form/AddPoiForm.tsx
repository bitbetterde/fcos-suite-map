import React, { useEffect, useRef, useState } from 'react';
import type { PointOfInterestFormData, Tag } from '../../types/PointOfInterest';
import fetcher from '../../util/fetcher';
import { validateFile } from '../../util/file';
import TextInput from './TextInput';
import FileInput from './FileInput';
import TextAreaInput from './TextAreaInput';
import { useStore, usePoiData } from '../../hooks';
import { useHistory } from 'react-router-dom';
import CoordinateInput from './CoordinateInput';
import TagInput from './TagInput';
import { removeDuplicateObjects } from '../../util/array';
import { createPoi, createTags } from '../../graphql/mutations';
import Spinner from '../Spinner';

const AddPoiForm: React.FC = () => {
  const [formData, setFormData] = useState<PointOfInterestFormData>({
    lat: 0,
    lng: 0,
    email: '',
    name: '',
    address: '',
    description: '',
    website: '',
    category: '',
    image: null,
    tags: [],
  });
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const draftPoi = useStore((state) => state.draftPoi);
  const formRef = useRef<HTMLFormElement>(null);
  const history = useHistory();
  const { data } = usePoiData();
  const [tagOptions, setTagOptions] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const setNotification = useStore((state) => state.setNotification);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files?.length) {
      const isFileValid = validateFile(e?.target?.files[0]);
      if (isFileValid) {
        setFormData({ ...formData, [e.target.name]: e?.target?.files[0] });
      }
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    formRef.current?.reportValidity();

    setIsLoading(true);
    try {
      const newTags: Tag[] = [];
      const newTagIdsResponse: number[] = [];
      const oldTags: Tag[] = [];
      selectedTags.forEach((tag) => (tag.id === 'draft' ? newTags.push(tag) : oldTags.push(tag)));

      if (newTags.length) {
        const tagsRes = await fetcher(createTags, {
          tags: newTags.map(({ displayName, color }) => ({
            displayName,
            color,
          })),
        });
        if (tagsRes.createTags.length > 0) {
          tagsRes.createTags.map((newTagResponse: { id: string }) => {
            newTagIdsResponse.push(Number(newTagResponse.id));
          });
        }
      }
      const finalData = { ...formData, tagIds: [...newTagIdsResponse, ...oldTags.map((oldTag) => Number(oldTag.id))] };

      const res = await fetcher(createPoi, finalData);

      if (res.createPoi) {
        setNotification({
          title: 'Ort hinzugefügt',
          text:
            'Ort wurde erfolgreich hinzugefügt. Bitte überprüfe deine E-Mails und klicke dort auf den Link um deine Mail-Adresse zu verifizieren.',
          type: 'success',
        });
        history.push('/');
      } else {
        setIsLoading(false);
        throw new Error();
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setNotification({
        title: 'Fehler beim Hinzufügen',
        text: 'Ort konnte nicht hinzgefügt werden. Bitte später erneut probieren.',
        type: 'alert',
      });
    }
  };

  // Aggregate all tags from all POIs and remove duplicates
  useEffect(() => {
    if (data) {
      const tagsWithDuplicates = data.flatMap((poi) => {
        return poi.tags;
      });
      const tags = removeDuplicateObjects(tagsWithDuplicates, 'id');
      setTagOptions(tags);
    }
  }, [data]);

  useEffect(() => {
    // Validation of native HTML input constraints
    const htmlValid = formRef.current?.checkValidity();

    if (draftPoi && htmlValid) {
      if (!isValid) setIsValid(true);
    } else {
      if (isValid) setIsValid(false);
    }
  }, [formData, draftPoi]);

  useEffect(() => {
    // Set lat/lng in Form when PIN is dropped on map
    if (draftPoi) setFormData({ ...formData, lat: draftPoi[0], lng: draftPoi[1] });
  }, [draftPoi]);

  useEffect(() => {
    console.log('Form Data', formData);
  }, [formData]);

  return (
    <form className="flex-1 flex flex-col justify-between" onSubmit={handleSubmit} ref={formRef}>
      <div className="flex flex-col">
        <CoordinateInput
          label={'Koordinaten'}
          text="Bitte Pin auf Karte setzen."
          value={[formData.lat, formData.lng]}
          required
        />
        <TagInput label={'Tags'} tags={selectedTags} options={tagOptions} onTagsChange={setSelectedTags} />
        <TextInput label={'Name des Orts'} name={'name'} value={formData.name} onChange={handleInputChange} required />
        <TextInput
          label={'Kategorie'}
          name={'category'}
          value={formData.category}
          onChange={handleInputChange}
          required
        />
        <TextInput
          label={'Anschrift'}
          name={'address'}
          value={formData.address}
          onChange={handleInputChange}
          required
        />
        <TextInput
          label={'E-Mail (wird nicht veröffentlicht)'}
          name={'email'}
          value={formData.email}
          onChange={(event) => {
            // event.target.setCustomValidity('Custom message');
            handleInputChange(event);
          }}
          type="email"
          required
        />
        <TextInput
          type="url"
          label={'Webseite'}
          name={'website'}
          value={formData.website}
          onChange={handleInputChange}
          required
        />
        <TextAreaInput
          label={'Beschreibung'}
          name={'description'}
          value={formData.description}
          onChange={handleInputChange}
          required
        />

        <FileInput value={formData.image} onChange={handleFileChange} name={'image'} label={'Bild'} required />
      </div>
      <button disabled={isLoading} type="submit" className="form-button">
        {isLoading && <Spinner />}
        Hinzufügen
      </button>
    </form>
  );
};

export default AddPoiForm;
