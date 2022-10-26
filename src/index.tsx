import React from 'react';
import { createRoot } from 'react-dom/client';
import FabCityMap from './components/FabCityMap';

const exampleData = [
  {
    "id": "1",
    "name": "Naboo",
    "description": "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.",
    "website": "http://www.fabcity.hamburg",
    "address": "Musterstraße. 123, 20457 Hamburg",
    "lat": 53.541955879117,
    "lng": 10.010503310879,
    "image": "https://map-api.fabcity.hamburg/uploads/images/dKAtCcP6DDY83nFkS1SUXBzXLd0e9dhCnxFh29jS.jpg",
    "category": "Fab Lab / Offene Werkstatt",
    "relationStatus": "Vereinsmitglied Fab City Hamburg e.V.",
    "tags": [
      { "id": "4", "displayName": "Lasercutter", "color": "hsl(333,60%,80%)" },
      { "id": "5", "displayName": "CNC-Fräse", "color": "hsl(115,60%,80%)" },
      { "id": "6", "displayName": "Elektronikwerkstatt", "color": "hsl(306,60%,80%)" },
      { "id": "7", "displayName": "Fab Lab / Offene Werkstatt", "color": "hsl(146,60%,80%)" },
      { "id": "8", "displayName": "Workshops", "color": "hsl(229,60%,80%)" },
      { "id": "3", "displayName": "3D-Drucker", "color": "rgba(209,250,229,1)" }
    ]
  },
  {
    "id": "2",
    "name": "Nevarro",
    "description": "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.",
    "website": "http://www.fabcity.hamburg",
    "address": "Bürgerhaus Wilhelmsburg, Mengestraße 20, 21107 Hamburg",
    "lat": 53.500543446403,
    "lng": 9.9962177938385,
    "image": "https://map-api.fabcity.hamburg/uploads/images/FkXmcxFHqgoUCPpxktz8rAcq8p6O9c5YQRnnG2W8.jpg",
    "category": "Fab Lab / Offene Werkstatt",
    "relationStatus": "Vereinsmitglied Fab City Hamburg e.V.",
    "tags": [
      { "id": "3", "displayName": "3D-Drucker", "color": "rgba(209,250,229,1)" },
      { "id": "6", "displayName": "Elektronikwerkstatt", "color": "hsl(306,60%,80%)" },
      { "id": "8", "displayName": "Workshops", "color": "hsl(229,60%,80%)" },
      { "id": "7", "displayName": "Fab Lab / Offene Werkstatt", "color": "hsl(146,60%,80%)" }
    ]
  },
  {
    "id": "3",
    "name": "Onderon",
    "description": "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.",
    "website": "http://www.fabcity.hamburg",
    "address": "Bachstraße 98, 22083 Hamburg",
    "lat": 53.579789405468,
    "lng": 10.02200822904,
    "image": "https://map-api.fabcity.hamburg/uploads/images/AE1Ig73qHanJFKu9ZTRxsw70yMHTgGRflURXfKQO.jpg",
    "category": "Fab Lab / Offene Werkstatt",
    "relationStatus": "Vereinsmitglied Fab City Hamburg e.V.",
    "tags": [
      { "id": "9", "displayName": "Holzwerkstatt", "color": "hsl(22,60%,80%)" },
      { "id": "3", "displayName": "3D-Drucker", "color": "rgba(209,250,229,1)" },
      { "id": "5", "displayName": "CNC-Fräse", "color": "hsl(115,60%,80%)" },
      { "id": "6", "displayName": "Elektronikwerkstatt", "color": "hsl(306,60%,80%)" },
      { "id": "8", "displayName": "Workshops", "color": "hsl(229,60%,80%)" },
      { "id": "7", "displayName": "Fab Lab / Offene Werkstatt", "color": "hsl(146,60%,80%)" }
    ]
  },
  {
    "id": "4",
    "name": "Wobani",
    "description": "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.",
    "website": "http://www.fabcity.hamburg",
    "address": "Eschelsweg 4, 22767 Hamburg",
    "lat": 53.549864003284,
    "lng": 9.9464665686577,
    "image": "https://map-api.fabcity.hamburg/uploads/images/ipM4GoMnXzP1Pc63nL6H1e7sEIZY83f7ZK8RMhuV.jpg",
    "category": "Fab Lab / Offene Werkstatt",
    "relationStatus": "Vereinsmitglied Fab City Hamburg e.V.",
    "tags": [
      { "id": "3", "displayName": "3D-Drucker", "color": "rgba(209,250,229,1)" },
      { "id": "4", "displayName": "Lasercutter", "color": "hsl(333,60%,80%)" },
      { "id": "5", "displayName": "CNC-Fräse", "color": "hsl(115,60%,80%)" },
      { "id": "6", "displayName": "Elektronikwerkstatt", "color": "hsl(306,60%,80%)" },
      { "id": "9", "displayName": "Holzwerkstatt", "color": "hsl(22,60%,80%)" },
      { "id": "8", "displayName": "Workshops", "color": "hsl(229,60%,80%)" },
      { "id": "7", "displayName": "Fab Lab / Offene Werkstatt", "color": "hsl(146,60%,80%)" }
    ]
  },
  {
    "id": "5",
    "name": "Zeffo",
    "description": "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.",
    "website": "http://www.fabcity.hamburg",
    "address": "Stockmeyerstr. 43, Halle 4K, Eingang von der Wasserseite, 20457 Hamburg",
    "lat": 53.541994386894,
    "lng": 10.010334958155,
    "image": "https://map-api.fabcity.hamburg/uploads/images/sFtxfseZAC1PNur5zfQeZriJ6OExkAtqqpDxP9Mv.jpg",
    "category": "Fab Lab / Offene Werkstatt",
    "relationStatus": "Vereinsmitglied Fab City Hamburg e.V.",
    "tags": [
      { "id": "10", "displayName": "Biotechnologie", "color": "hsl(2,60%,80%)" },
      { "id": "11", "displayName": "Landwirtschaft", "color": "hsl(255,60%,80%)" },
      { "id": "7", "displayName": "Fab Lab / Offene Werkstatt", "color": "hsl(146,60%,80%)" }
    ]
  },
  {
    "id": "6",
    "name": "Utapau",
    "description": "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.",
    "website": "http://www.fabcity.hamburg",
    "address": "Lange Reihe 89, 20099 Hamburg",
    "lat": 53.558563745016,
    "lng": 10.012549674438,
    "image": "https://map-api.fabcity.hamburg/uploads/images/FG9f7HYGkYwaX8NDemer11GP7u8llIsvtKHeUcKN.jpg",
    "category": "Handwerksbetrieb",
    "relationStatus": "Vereinsmitglied Fab City Hamburg e.V.",
    "tags": [
      { "id": "12", "displayName": "Unternehmen", "color": "hsl(257,60%,80%)" },
      { "id": "13", "displayName": "Metallwerkstatt", "color": "hsl(273,60%,80%)" },
      { "id": "9", "displayName": "Holzwerkstatt", "color": "hsl(22,60%,80%)" }
    ]
  },
  {
    "id": "7",
    "name": "Yavin",
    "description": "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.",
    "website": "http://www.fabcity.hamburg",
    "address": "Hongkongstraße 5, 20457 Hamburg",
    "lat": 53.542208035899,
    "lng": 10.001291735134,
    "image": "https://map-api.fabcity.hamburg/uploads/images/kq1N6EnvZXNSNlXvvO3YgcoAvUf4A6DUHXvFvFyI.jpg",
    "category": "Bildungs- und Veranstaltungsort",
    "relationStatus": "Vereinsmitglied Fab City Hamburg e.V.",
    "tags": [{ "id": "8", "displayName": "Workshops", "color": "hsl(229,60%,80%)" }]
  },
  {
    "id": "8",
    "name": "Honoghr",
    "description": "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.",
    "website": "http://www.fabcity.hamburg",
    "address": "Karlshöhe 60, 22175 Hamburg",
    "lat": 53.63006349047,
    "lng": 10.110588334093,
    "image": "https://map-api.fabcity.hamburg/uploads/images/IQdyJ1knlSxXDT1CrzT7uZQmqgmZgfTxRhsatN5r.jpg",
    "category": "Bildungs- und Veranstaltungsort",
    "relationStatus": "Vereinsmitglied Fab City Hamburg e.V.",
    "tags": [
      { "id": "8", "displayName": "Workshops", "color": "hsl(229,60%,80%)" },
      { "id": "11", "displayName": "Landwirtschaft", "color": "hsl(255,60%,80%)" }
    ]
  },
  {
    "id": "9",
    "name": "Korriban",
    "description": "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.",
    "website": "http://www.fabcity.hamburg",
    "address": "Holstenhofweg 85, 22043 Hamburg",
    "lat": 53.567516952488,
    "lng": 10.113037061205,
    "image": "https://map-api.fabcity.hamburg/uploads/images/SKFzkd6OYwomC640B9ZxdRDtyRAUArQLwVN1xjuo.jpg",
    "category": "Fab Lab / Offene Werkstatt",
    "relationStatus": "Vereinsmitglied Fab City Hamburg e.V.",
    "tags": [
      { "id": "3", "displayName": "3D-Drucker", "color": "rgba(209,250,229,1)" },
      { "id": "4", "displayName": "Lasercutter", "color": "hsl(333,60%,80%)" },
      { "id": "5", "displayName": "CNC-Fräse", "color": "hsl(115,60%,80%)" },
      { "id": "9", "displayName": "Holzwerkstatt", "color": "hsl(22,60%,80%)" },
      { "id": "6", "displayName": "Elektronikwerkstatt", "color": "hsl(306,60%,80%)" },
      { "id": "8", "displayName": "Workshops", "color": "hsl(229,60%,80%)" },
      { "id": "7", "displayName": "Fab Lab / Offene Werkstatt", "color": "hsl(146,60%,80%)" }
    ]
  },
  {
    "id": "10",
    "name": "Selonia ",
    "description": "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.",
    "website": "http://www.fabcity.hamburg",
    "address": "Stockmeyerstr. 43, Halle 4K, 20457 Hamburg",
    "lat": 53.541914624826,
    "lng": 10.010271399351,
    "image": "https://map-api.fabcity.hamburg/uploads/images/boFp8pUb7GjZZvp4JSzOY72oKwnUxklgw0BoowTk.jpg",
    "category": "Digital-handwerkliche Produktionsstätte",
    "relationStatus": "Vereinsmitglied Fab City Hamburg e.V.",
    "tags": [
      { "id": "12", "displayName": "Unternehmen", "color": "hsl(257,60%,80%)" },
      { "id": "13", "displayName": "Metallwerkstatt", "color": "hsl(273,60%,80%)" },
      { "id": "9", "displayName": "Holzwerkstatt", "color": "hsl(22,60%,80%)" },
      { "id": "8", "displayName": "Workshops", "color": "hsl(229,60%,80%)" }
    ]
  },
]


const container = document.getElementById('app');
const root = createRoot(container!);

const MAPBOX_TOKEN = import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN;

root.render(
  <React.StrictMode>
    <FabCityMap data={exampleData} mapboxToken={MAPBOX_TOKEN}/>
  </React.StrictMode>,
);
