import { gql } from 'graphql-request';
import React, { useEffect, useRef, useState } from 'react';
import type { PointOfInterestFormData } from '../../types/PointOfInterest';
import fetcher from '../../util/fetcher';
import TextInput from './TextInput';
import FileInput from './FileInput';
import TextAreaInput from './TextAreaInput';
import { useStore } from '../../hooks';
import { useHistory } from 'react-router-dom';
import CheckboxInput from './CheckboxInput';

interface Props {}

const AddPoiForm: React.FC<Props> = () => {
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
    tags: '',
  });
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const draftPoi = useStore((state) => state.draftPoi);
  const formRef = useRef<HTMLFormElement>(null);
  const history = useHistory();
  const setNotification = useStore((state) => state.setNotification);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files?.length) setFormData({ ...formData, [e.target.name]: e?.target?.files[0] });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    formRef.current?.reportValidity();

    const mutation = gql`
      mutation createPoiMutation(
        $name: String!
        $email: String!
        $lat: Float!
        $lng: Float!
        $website: String
        $description: String
        $address: String!
        $category: String!
        $image: Upload!
      ) {
        createPoi(
          poi: {
            name: $name
            email: $email
            lat: $lat
            lng: $lng
            website: $website
            description: $description
            address: $address
            category: $category
            image: $image
          }
        )
      }
    `;

    setIsLoading(true);
    try {
      const res = await fetcher(mutation, formData);

      if (res.createPoi) {
        setNotification({
          title: 'Ort hinzugefügt',
          text:
            'Ort wurde erfolgreich hinzugefügt. Bitte überprüfe deine E-Mails und klicke auf den Link um den Eintrag zu verifizieren.',
          type: 'success',
        });
        history.push('/');
      } else {
        setIsLoading(false);
        throw new Error();
      }
    } catch {
      setIsLoading(false);
      setNotification({
        title: 'Fehler beim Hinzufügen',
        text: 'Ort konnte nicht hinzgefügt werden. Bitte später erneut probieren.',
        type: 'alert',
      });
    }
  };

  useEffect(() => {
    // Validation
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

  return (
    <form className="flex flex-col" onSubmit={handleSubmit} ref={formRef}>
      <CheckboxInput name="draft" label={'Bitte einen Pin auf der Karte setzen.'} value={Boolean(draftPoi)} required />
      <TextInput label={'Name des Orts'} name={'name'} value={formData.name} onChange={handleInputChange} required />
      <TextInput
        label={'Kategorie'}
        name={'category'}
        value={formData.category}
        onChange={handleInputChange}
        required
      />
      <TextInput label={'Anschrift'} name={'address'} value={formData.address} onChange={handleInputChange} required />
      <TextInput
        label={'E-Mail (wird nicht veröffentlicht)'}
        name={'email'}
        value={formData.email}
        onChange={handleInputChange}
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
      <button
        disabled={!isValid || isLoading}
        type="submit"
        className="mt-2 flex justify-center items-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg disabled:opacity-50 disabled:cursor-default disabled:hover:bg-indigo-500"
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        Hinzufügen
      </button>
    </form>
  );
};

export default AddPoiForm;
