import { GraphQLClient, request, gql } from 'graphql-request';
import React, { useEffect, useState } from 'react';

interface Props {}

const AddPoiForm: React.FC<Props> = () => {
  const [formData, setFormData] = useState({
    lat: 123,
    lng: 123,
    name: '',
    address: '',
    description: '',
    website: '',
    category: '',
    image: '',
    tags: '',
  });

  useEffect(() => {
    console.log('Form data', formData);
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const mutation = gql`
  //   mutation createPoiMutation(
  //     $name: String!
  //     $email: String!
  //     $lat: Float!
  //     $lng: Float!
  //     $website: String
  //     $description: String
  //     $address: String!
  //     $category: String!
  //   ) {
  //     createPoi(
  //       poi: {
  //         name: $name
  //         email: $email
  //         lat: $lat
  //         lng: $lng
  //         website: $website
  //         description: $description
  //         address: $address
  //         category: $category
  //         image: "ababababa"
  //       }
  //     )
  //   }
  // `;

  // const variables = {
  //   name: 'Inception',
  //   email: 2010,
  //   file: document.querySelector('input#avatar').files[0]
  // };
  // const data = await request(import.meta.env.SNOWPACK_PUBLIC_API_URL, mutation, formData);

  return (
    <form className="flex flex-col">
      <p className="leading-relaxed mb-5 text-gray-600">Bitte auf der Karte einen Pin setzen.</p>
      <label className="block mb-4">
        <span className="form-label">Name</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          className="form-input"
          placeholder="Musterspace"
          onChange={handleInputChange}
        />
      </label>
      <label className="block mb-4">
        <span className="form-label">Adresse</span>
        <input
          type="text"
          name="address"
          value={formData.address}
          className="form-input"
          placeholder=""
          onChange={handleInputChange}
        />
      </label>
      <label className="block mb-4">
        <span className="form-label">Webseite</span>
        <input
          type="text"
          name="website"
          value={formData.website}
          className="form-input"
          placeholder=""
          onChange={handleInputChange}
        />
      </label>
      <label className="block mb-4">
        <span className="form-label">Beschreibung</span>
        <textarea
          name="description"
          value={formData.description}
          className="form-input"
          rows={3}
          onChange={handleInputChange}
        ></textarea>
      </label>
      <label className="block mb-6">
        <span className="form-label">Bild</span>
        <input
          className="block w-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        ></input>
      </label>
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg"
      >
        Hinzufügen
      </button>
    </form>
  );
};

export default AddPoiForm;
