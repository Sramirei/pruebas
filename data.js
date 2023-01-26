const countries = [
  {
    countryName: 'Afghanistan',
    population: '29121286',
    capital: 'Kabul',
    continentName: 'Asia'
  },
  {
    countryName: 'Albania',
    population: '2986952',
    capital: 'Tirana',
    continentName: 'Europe'
  },
  {
    countryName: 'Algeria',
    population: '34586184',
    capital: 'Algiers',
    continentName: 'Africa'
  },
  {
    countryName: 'American Samoa',
    population: '57881',
    capital: 'Pago Pago',
    continentName: 'Oceania'
  },
  {
    countryName: 'Andorra',
    population: '84000',
    capital: 'Andorra la Vella',
    continentName: 'Europe'
  },
  {
    countryName: 'Angola',
    population: '13068161',
    capital: 'Luanda',
    continentName: 'Africa'
  },
  {
    countryName: 'Anguilla',
    population: '13254',
    capital: 'The Valley',
    continentName: 'North America'
  },
  {
    countryName: 'Antigua and Barbuda',
    population: '86754',
    capital: "St. John's",
    continentName: 'North America'
  },
  {
    countryName: 'Argentina',
    population: '41343201',
    capital: 'Buenos Aires',
    continentName: 'South America'
  },
  {
    countryName: 'Armenia',
    population: '2968000',
    capital: 'Yerevan',
    continentName: 'Asia'
  },
  {
    countryName: 'Aruba',
    population: '71566',
    capital: 'Oranjestad',
    continentName: 'North America'
  },
  {
    countryName: 'Australia',
    population: '21515754',
    capital: 'Canberra',
    continentName: 'Oceania'
  },
  {
    countryName: 'Austria',
    population: '8205000',
    capital: 'Vienna',
    continentName: 'Europe'
  },
  {
    countryName: 'Azerbaijan',
    population: '8303512',
    capital: 'Baku',
    continentName: 'Asia'
  },
  {
    countryName: 'Bahamas',
    population: '301790',
    capital: 'Nassau',
    continentName: 'North America'
  },
  {
    countryName: 'Bahrain',
    population: '738004',
    capital: 'Manama',
    continentName: 'Asia'
  },
  {
    countryName: 'Bangladesh',
    population: '156118464',
    capital: 'Dhaka',
    continentName: 'Asia'
  },
  {
    countryName: 'Barbados',
    population: '285653',
    capital: 'Bridgetown',
    continentName: 'North America'
  },
  {
    countryName: 'Belarus',
    population: '9685000',
    capital: 'Minsk',
    continentName: 'Europe'
  },
  {
    countryName: 'Belgium',
    population: '10403000',
    capital: 'Brussels',
    continentName: 'Europe'
  },
  {
    countryName: 'Belize',
    population: '314522',
    capital: 'Belmopan',
    continentName: 'North America'
  },
  {
    countryName: 'Benin',
    population: '9056010',
    capital: 'Porto-Novo',
    continentName: 'Africa'
  },
  {
    countryName: 'Bermuda',
    population: '65365',
    capital: 'Hamilton',
    continentName: 'North America'
  },
  {
    countryName: 'Bhutan',
    population: '699847',
    capital: 'Thimphu',
    continentName: 'Asia'
  },
  {
    countryName: 'Bolivia',
    population: '9947418',
    capital: 'Sucre',
    continentName: 'South America'
  },
  {
    countryName: 'Bonaire',
    population: '18012',
    capital: 'Kralendijk',
    continentName: 'North America'
  },
  {
    countryName: 'Bosnia and Herzegovina',
    population: '4590000',
    capital: 'Sarajevo',
    continentName: 'Europe'
  },
  {
    countryName: 'Botswana',
    population: '2029307',
    capital: 'Gaborone',
    continentName: 'Africa'
  },
  {
    countryName: 'Brazil',
    population: '201103330',
    capital: 'Brasília',
    continentName: 'South America'
  },
  {
    countryName: 'British Indian Ocean Territory',
    population: '4000',
    capital: '',
    continentName: 'Asia'
  },
  {
    countryName: 'British Virgin Islands',
    population: '21730',
    capital: 'Road Town',
    continentName: 'North America'
  },
  {
    countryName: 'Brunei',
    population: '395027',
    capital: 'Bandar Seri Begawan',
    continentName: 'Asia'
  },
  {
    countryName: 'Bulgaria',
    population: '7148785',
    capital: 'Sofia',
    continentName: 'Europe'
  },
  {
    countryName: 'Burkina Faso',
    population: '16241811',
    capital: 'Ouagadougou',
    continentName: 'Africa'
  },
  {
    countryName: 'Burundi',
    population: '9863117',
    capital: 'Bujumbura',
    continentName: 'Africa'
  },
  {
    countryName: 'Cambodia',
    population: '14453680',
    capital: 'Phnom Penh',
    continentName: 'Asia'
  },
  {
    countryName: 'Cameroon',
    population: '19294149',
    capital: 'Yaoundé',
    continentName: 'Africa'
  },
  {
    countryName: 'Canada',
    population: '33679000',
    capital: 'Ottawa',
    continentName: 'North America'
  },
  {
    countryName: 'Cape Verde',
    population: '508659',
    capital: 'Praia',
    continentName: 'Africa'
  },
  {
    countryName: 'Cayman Islands',
    population: '44270',
    capital: 'George Town',
    continentName: 'North America'
  },
  {
    countryName: 'Central African Republic',
    population: '4844927',
    capital: 'Bangui',
    continentName: 'Africa'
  },
  {
    countryName: 'Chad',
    population: '10543464',
    capital: "N'Djamena",
    continentName: 'Africa'
  },
  {
    countryName: 'Chile',
    population: '16746491',
    capital: 'Santiago',
    continentName: 'South America'
  },
  {
    countryName: 'China',
    population: '1330044000',
    capital: 'Beijing',
    continentName: 'Asia'
  },
  {
    countryName: 'Christmas Island',
    population: '1500',
    capital: 'Flying Fish Cove',
    continentName: 'Oceania'
  },
  {
    countryName: 'Cocos [Keeling] Islands',
    population: '628',
    capital: 'West Island',
    continentName: 'Asia'
  },
  {
    countryName: 'Colombia',
    population: '47790000',
    capital: 'Bogotá',
    continentName: 'South America'
  },
  {
    countryName: 'Comoros',
    population: '773407',
    capital: 'Moroni',
    continentName: 'Africa'
  },
  {
    countryName: 'Cook Islands',
    population: '21388',
    capital: 'Avarua',
    continentName: 'Oceania'
  },
  {
    countryName: 'Costa Rica',
    population: '4516220',
    capital: 'San José',
    continentName: 'North America'
  },
  {
    countryName: 'Croatia',
    population: '4284889',
    capital: 'Zagreb',
    continentName: 'Europe'
  },
  {
    countryName: 'Cuba',
    population: '11423000',
    capital: 'Havana',
    continentName: 'North America'
  },
  {
    countryName: 'Curacao',
    population: '141766',
    capital: 'Willemstad',
    continentName: 'North America'
  },
  {
    countryName: 'Cyprus',
    population: '1102677',
    capital: 'Nicosia',
    continentName: 'Europe'
  },
  {
    countryName: 'Czechia',
    population: '10476000',
    capital: 'Prague',
    continentName: 'Europe'
  },
  {
    countryName: 'Democratic Republic of the Congo',
    population: '70916439',
    capital: 'Kinshasa',
    continentName: 'Africa'
  },
  {
    countryName: 'Denmark',
    population: '5484000',
    capital: 'Copenhagen',
    continentName: 'Europe'
  },
  {
    countryName: 'Djibouti',
    population: '740528',
    capital: 'Djibouti',
    continentName: 'Africa'
  },
  {
    countryName: 'Dominica',
    population: '72813',
    capital: 'Roseau',
    continentName: 'North America'
  },
  {
    countryName: 'Dominican Republic',
    population: '9823821',
    capital: 'Santo Domingo',
    continentName: 'North America'
  },
  {
    countryName: 'East Timor',
    population: '1154625',
    capital: 'Dili',
    continentName: 'Oceania'
  },
  {
    countryName: 'Ecuador',
    population: '14790608',
    capital: 'Quito',
    continentName: 'South America'
  },
  {
    countryName: 'Egypt',
    population: '80471869',
    capital: 'Cairo',
    continentName: 'Africa'
  },
  {
    countryName: 'El Salvador',
    population: '6052064',
    capital: 'San Salvador',
    continentName: 'North America'
  },
  {
    countryName: 'Equatorial Guinea',
    population: '1014999',
    capital: 'Malabo',
    continentName: 'Africa'
  },
  {
    countryName: 'Eritrea',
    population: '5792984',
    capital: 'Asmara',
    continentName: 'Africa'
  },
  {
    countryName: 'Estonia',
    population: '1291170',
    capital: 'Tallinn',
    continentName: 'Europe'
  },
  {
    countryName: 'Ethiopia',
    population: '88013491',
    capital: 'Addis Ababa',
    continentName: 'Africa'
  },
  {
    countryName: 'Falkland Islands',
    population: '2638',
    capital: 'Stanley',
    continentName: 'South America'
  },
  {
    countryName: 'Faroe Islands',
    population: '48228',
    capital: 'Tórshavn',
    continentName: 'Europe'
  },
  {
    countryName: 'Fiji',
    population: '875983',
    capital: 'Suva',
    continentName: 'Oceania'
  },
  {
    countryName: 'Finland',
    population: '5244000',
    capital: 'Helsinki',
    continentName: 'Europe'
  },
  {
    countryName: 'France',
    population: '64768389',
    capital: 'Paris',
    continentName: 'Europe'
  },
  {
    countryName: 'French Guiana',
    population: '195506',
    capital: 'Cayenne',
    continentName: 'South America'
  },
  {
    countryName: 'French Polynesia',
    population: '270485',
    capital: 'Papeete',
    continentName: 'Oceania'
  },
  {
    countryName: 'Gabon',
    population: '1545255',
    capital: 'Libreville',
    continentName: 'Africa'
  },
  {
    countryName: 'Gambia',
    population: '1593256',
    capital: 'Bathurst',
    continentName: 'Africa'
  },
  {
    countryName: 'Georgia',
    population: '4630000',
    capital: 'Tbilisi',
    continentName: 'Asia'
  },
  {
    countryName: 'Germany',
    population: '81802257',
    capital: 'Berlin',
    continentName: 'Europe'
  },
  {
    countryName: 'Ghana',
    population: '24339838',
    capital: 'Accra',
    continentName: 'Africa'
  },
  {
    countryName: 'Gibraltar',
    population: '27884',
    capital: 'Gibraltar',
    continentName: 'Europe'
  },
  {
    countryName: 'Greece',
    population: '11000000',
    capital: 'Athens',
    continentName: 'Europe'
  },
  {
    countryName: 'Greenland',
    population: '56375',
    capital: 'Nuuk',
    continentName: 'North America'
  },
  {
    countryName: 'Grenada',
    population: '107818',
    capital: "St. George's",
    continentName: 'North America'
  },
  {
    countryName: 'Guadeloupe',
    population: '443000',
    capital: 'Basse-Terre',
    continentName: 'North America'
  },
  {
    countryName: 'Guam',
    population: '159358',
    capital: 'Hagåtña',
    continentName: 'Oceania'
  },
  {
    countryName: 'Guatemala',
    population: '13550440',
    capital: 'Guatemala City',
    continentName: 'North America'
  },
  {
    countryName: 'Guernsey',
    population: '65228',
    capital: 'St Peter Port',
    continentName: 'Europe'
  },
  {
    countryName: 'Guinea',
    population: '10324025',
    capital: 'Conakry',
    continentName: 'Africa'
  },
  {
    countryName: 'Guinea-Bissau',
    population: '1565126',
    capital: 'Bissau',
    continentName: 'Africa'
  },
  {
    countryName: 'Guyana',
    population: '748486',
    capital: 'Georgetown',
    continentName: 'South America'
  },
  {
    countryName: 'Haiti',
    population: '9648924',
    capital: 'Port-au-Prince',
    continentName: 'North America'
  },
  {
    countryName: 'Honduras',
    population: '7989415',
    capital: 'Tegucigalpa',
    continentName: 'North America'
  },
  {
    countryName: 'Hong Kong',
    population: '6898686',
    capital: 'Hong Kong',
    continentName: 'Asia'
  },
  {
    countryName: 'Hungary',
    population: '9982000',
    capital: 'Budapest',
    continentName: 'Europe'
  },
  {
    countryName: 'Iceland',
    population: '308910',
    capital: 'Reykjavik',
    continentName: 'Europe'
  },
  {
    countryName: 'India',
    population: '1173108018',
    capital: 'New Delhi',
    continentName: 'Asia'
  },
  {
    countryName: 'Indonesia',
    population: '242968342',
    capital: 'Jakarta',
    continentName: 'Asia'
  },
  {
    countryName: 'Iran',
    population: '76923300',
    capital: 'Tehran',
    continentName: 'Asia'
  },
  {
    countryName: 'Iraq',
    population: '29671605',
    capital: 'Baghdad',
    continentName: 'Asia'
  },
  {
    countryName: 'Ireland',
    population: '4622917',
    capital: 'Dublin',
    continentName: 'Europe'
  },
  {
    countryName: 'Isle of Man',
    population: '75049',
    capital: 'Douglas',
    continentName: 'Europe'
  },
  {
    countryName: 'Israel',
    population: '7353985',
    capital: '',
    continentName: 'Asia'
  },
  {
    countryName: 'Italy',
    population: '60340328',
    capital: 'Rome',
    continentName: 'Europe'
  },
  {
    countryName: 'Ivory Coast',
    population: '21058798',
    capital: 'Yamoussoukro',
    continentName: 'Africa'
  },
  {
    countryName: 'Jamaica',
    population: '2847232',
    capital: 'Kingston',
    continentName: 'North America'
  },
  {
    countryName: 'Japan',
    population: '127288000',
    capital: 'Tokyo',
    continentName: 'Asia'
  },
  {
    countryName: 'Jersey',
    population: '90812',
    capital: 'Saint Helier',
    continentName: 'Europe'
  },
  {
    countryName: 'Jordan',
    population: '6407085',
    capital: 'Amman',
    continentName: 'Asia'
  },
  {
    countryName: 'Kazakhstan',
    population: '15340000',
    capital: 'Astana',
    continentName: 'Asia'
  },
  {
    countryName: 'Kenya',
    population: '40046566',
    capital: 'Nairobi',
    continentName: 'Africa'
  },
  {
    countryName: 'Kiribati',
    population: '92533',
    capital: 'Tarawa',
    continentName: 'Oceania'
  },
  {
    countryName: 'Kosovo',
    population: '1800000',
    capital: 'Pristina',
    continentName: 'Europe'
  },
  {
    countryName: 'Kuwait',
    population: '2789132',
    capital: 'Kuwait City',
    continentName: 'Asia'
  },
  {
    countryName: 'Kyrgyzstan',
    population: '5776500',
    capital: 'Bishkek',
    continentName: 'Asia'
  },
  {
    countryName: 'Laos',
    population: '6368162',
    capital: 'Vientiane',
    continentName: 'Asia'
  },
  {
    countryName: 'Latvia',
    population: '2217969',
    capital: 'Riga',
    continentName: 'Europe'
  },
  {
    countryName: 'Lebanon',
    population: '4125247',
    capital: 'Beirut',
    continentName: 'Asia'
  },
  {
    countryName: 'Lesotho',
    population: '1919552',
    capital: 'Maseru',
    continentName: 'Africa'
  },
  {
    countryName: 'Liberia',
    population: '3685076',
    capital: 'Monrovia',
    continentName: 'Africa'
  },
  {
    countryName: 'Libya',
    population: '6461454',
    capital: 'Tripoli',
    continentName: 'Africa'
  },
  {
    countryName: 'Liechtenstein',
    population: '35000',
    capital: 'Vaduz',
    continentName: 'Europe'
  },
  {
    countryName: 'Lithuania',
    population: '2944459',
    capital: 'Vilnius',
    continentName: 'Europe'
  },
  {
    countryName: 'Luxembourg',
    population: '497538',
    capital: 'Luxembourg',
    continentName: 'Europe'
  },
  {
    countryName: 'Macao',
    population: '449198',
    capital: 'Macao',
    continentName: 'Asia'
  },
  {
    countryName: 'Macedonia',
    population: '2062294',
    capital: 'Skopje',
    continentName: 'Europe'
  },
  {
    countryName: 'Madagascar',
    population: '21281844',
    capital: 'Antananarivo',
    continentName: 'Africa'
  },
  {
    countryName: 'Malawi',
    population: '15447500',
    capital: 'Lilongwe',
    continentName: 'Africa'
  },
  {
    countryName: 'Malaysia',
    population: '28274729',
    capital: 'Kuala Lumpur',
    continentName: 'Asia'
  },
  {
    countryName: 'Maldives',
    population: '395650',
    capital: 'Malé',
    continentName: 'Asia'
  },
  {
    countryName: 'Mali',
    population: '13796354',
    capital: 'Bamako',
    continentName: 'Africa'
  },
  {
    countryName: 'Malta',
    population: '403000',
    capital: 'Valletta',
    continentName: 'Europe'
  },
  {
    countryName: 'Marshall Islands',
    population: '65859',
    capital: 'Majuro',
    continentName: 'Oceania'
  },
  {
    countryName: 'Martinique',
    population: '432900',
    capital: 'Fort-de-France',
    continentName: 'North America'
  },
  {
    countryName: 'Mauritania',
    population: '3205060',
    capital: 'Nouakchott',
    continentName: 'Africa'
  },
  {
    countryName: 'Mauritius',
    population: '1294104',
    capital: 'Port Louis',
    continentName: 'Africa'
  },
  {
    countryName: 'Mayotte',
    population: '159042',
    capital: 'Mamoudzou',
    continentName: 'Africa'
  },
  {
    countryName: 'Mexico',
    population: '112468855',
    capital: 'Mexico City',
    continentName: 'North America'
  },
  {
    countryName: 'Micronesia',
    population: '107708',
    capital: 'Palikir',
    continentName: 'Oceania'
  },
  {
    countryName: 'Moldova',
    population: '4324000',
    capital: 'Chişinău',
    continentName: 'Europe'
  },
  {
    countryName: 'Monaco',
    population: '32965',
    capital: 'Monaco',
    continentName: 'Europe'
  },
  {
    countryName: 'Mongolia',
    population: '3086918',
    capital: 'Ulan Bator',
    continentName: 'Asia'
  },
  {
    countryName: 'Montenegro',
    population: '666730',
    capital: 'Podgorica',
    continentName: 'Europe'
  },
  {
    countryName: 'Montserrat',
    population: '9341',
    capital: 'Plymouth',
    continentName: 'North America'
  },
  {
    countryName: 'Morocco',
    population: '33848242',
    capital: 'Rabat',
    continentName: 'Africa'
  },
  {
    countryName: 'Mozambique',
    population: '22061451',
    capital: 'Maputo',
    continentName: 'Africa'
  },
  {
    countryName: 'Myanmar [Burma]',
    population: '53414374',
    capital: 'Naypyitaw',
    continentName: 'Asia'
  },
  {
    countryName: 'Namibia',
    population: '2128471',
    capital: 'Windhoek',
    continentName: 'Africa'
  },
  {
    countryName: 'Nauru',
    population: '10065',
    capital: 'Yaren',
    continentName: 'Oceania'
  },
  {
    countryName: 'Nepal',
    population: '28951852',
    capital: 'Kathmandu',
    continentName: 'Asia'
  },
  {
    countryName: 'Netherlands',
    population: '16645000',
    capital: 'Amsterdam',
    continentName: 'Europe'
  },
  {
    countryName: 'New Caledonia',
    population: '216494',
    capital: 'Noumea',
    continentName: 'Oceania'
  },
  {
    countryName: 'New Zealand',
    population: '4252277',
    capital: 'Wellington',
    continentName: 'Oceania'
  },
  {
    countryName: 'Nicaragua',
    population: '5995928',
    capital: 'Managua',
    continentName: 'North America'
  },
  {
    countryName: 'Niger',
    population: '15878271',
    capital: 'Niamey',
    continentName: 'Africa'
  },
  {
    countryName: 'Nigeria',
    population: '154000000',
    capital: 'Abuja',
    continentName: 'Africa'
  },
  {
    countryName: 'Niue',
    population: '2166',
    capital: 'Alofi',
    continentName: 'Oceania'
  },
  {
    countryName: 'Norfolk Island',
    population: '1828',
    capital: 'Kingston',
    continentName: 'Oceania'
  },
  {
    countryName: 'North Korea',
    population: '22912177',
    capital: 'Pyongyang',
    continentName: 'Asia'
  },
  {
    countryName: 'Northern Mariana Islands',
    population: '53883',
    capital: 'Saipan',
    continentName: 'Oceania'
  },
  {
    countryName: 'Norway',
    population: '5009150',
    capital: 'Oslo',
    continentName: 'Europe'
  },
  {
    countryName: 'Oman',
    population: '2967717',
    capital: 'Muscat',
    continentName: 'Asia'
  },
  {
    countryName: 'Pakistan',
    population: '184404791',
    capital: 'Islamabad',
    continentName: 'Asia'
  },
  {
    countryName: 'Palau',
    population: '19907',
    capital: 'Melekeok',
    continentName: 'Oceania'
  },
  {
    countryName: 'Palestine',
    population: '3800000',
    capital: '',
    continentName: 'Asia'
  },
  {
    countryName: 'Panama',
    population: '3410676',
    capital: 'Panama City',
    continentName: 'North America'
  },
  {
    countryName: 'Papua New Guinea',
    population: '6064515',
    capital: 'Port Moresby',
    continentName: 'Oceania'
  },
  {
    countryName: 'Paraguay',
    population: '6375830',
    capital: 'Asunción',
    continentName: 'South America'
  },
  {
    countryName: 'Peru',
    population: '29907003',
    capital: 'Lima',
    continentName: 'South America'
  },
  {
    countryName: 'Philippines',
    population: '99900177',
    capital: 'Manila',
    continentName: 'Asia'
  },
  {
    countryName: 'Pitcairn Islands',
    population: '46',
    capital: 'Adamstown',
    continentName: 'Oceania'
  },
  {
    countryName: 'Poland',
    population: '38500000',
    capital: 'Warsaw',
    continentName: 'Europe'
  },
  {
    countryName: 'Portugal',
    population: '10676000',
    capital: 'Lisbon',
    continentName: 'Europe'
  },
  {
    countryName: 'Puerto Rico',
    population: '3916632',
    capital: 'San Juan',
    continentName: 'North America'
  },
  {
    countryName: 'Qatar',
    population: '840926',
    capital: 'Doha',
    continentName: 'Asia'
  },
  {
    countryName: 'Republic of the Congo',
    population: '3039126',
    capital: 'Brazzaville',
    continentName: 'Africa'
  },
  {
    countryName: 'Romania',
    population: '21959278',
    capital: 'Bucharest',
    continentName: 'Europe'
  },
  {
    countryName: 'Russia',
    population: '140702000',
    capital: 'Moscow',
    continentName: 'Europe'
  },
  {
    countryName: 'Rwanda',
    population: '11055976',
    capital: 'Kigali',
    continentName: 'Africa'
  },
  {
    countryName: 'Réunion',
    population: '776948',
    capital: 'Saint-Denis',
    continentName: 'Africa'
  },
  {
    countryName: 'Saint Barthélemy',
    population: '8450',
    capital: 'Gustavia',
    continentName: 'North America'
  },
  {
    countryName: 'Saint Helena',
    population: '7460',
    capital: 'Jamestown',
    continentName: 'Africa'
  },
  {
    countryName: 'Saint Kitts and Nevis',
    population: '51134',
    capital: 'Basseterre',
    continentName: 'North America'
  },
  {
    countryName: 'Saint Lucia',
    population: '160922',
    capital: 'Castries',
    continentName: 'North America'
  },
  {
    countryName: 'Saint Martin',
    population: '35925',
    capital: 'Marigot',
    continentName: 'North America'
  },
  {
    countryName: 'Saint Pierre and Miquelon',
    population: '7012',
    capital: 'Saint-Pierre',
    continentName: 'North America'
  },
  {
    countryName: 'Saint Vincent and the Grenadines',
    population: '104217',
    capital: 'Kingstown',
    continentName: 'North America'
  },
  {
    countryName: 'Samoa',
    population: '192001',
    capital: 'Apia',
    continentName: 'Oceania'
  },
  {
    countryName: 'San Marino',
    population: '31477',
    capital: 'San Marino',
    continentName: 'Europe'
  },
  {
    countryName: 'Saudi Arabia',
    population: '25731776',
    capital: 'Riyadh',
    continentName: 'Asia'
  },
  {
    countryName: 'Senegal',
    population: '12323252',
    capital: 'Dakar',
    continentName: 'Africa'
  },
  {
    countryName: 'Serbia',
    population: '7344847',
    capital: 'Belgrade',
    continentName: 'Europe'
  },
  {
    countryName: 'Seychelles',
    population: '88340',
    capital: 'Victoria',
    continentName: 'Africa'
  },
  {
    countryName: 'Sierra Leone',
    population: '5245695',
    capital: 'Freetown',
    continentName: 'Africa'
  },
  {
    countryName: 'Singapore',
    population: '4701069',
    capital: 'Singapore',
    continentName: 'Asia'
  },
  {
    countryName: 'Sint Maarten',
    population: '37429',
    capital: 'Philipsburg',
    continentName: 'North America'
  },
  {
    countryName: 'Slovakia',
    population: '5455000',
    capital: 'Bratislava',
    continentName: 'Europe'
  },
  {
    countryName: 'Slovenia',
    population: '2007000',
    capital: 'Ljubljana',
    continentName: 'Europe'
  },
  {
    countryName: 'Solomon Islands',
    population: '559198',
    capital: 'Honiara',
    continentName: 'Oceania'
  },
  {
    countryName: 'Somalia',
    population: '10112453',
    capital: 'Mogadishu',
    continentName: 'Africa'
  },
  {
    countryName: 'South Africa',
    population: '49000000',
    capital: 'Pretoria',
    continentName: 'Africa'
  },
  {
    countryName: 'South Korea',
    population: '48422644',
    capital: 'Seoul',
    continentName: 'Asia'
  },
  {
    countryName: 'South Sudan',
    population: '8260490',
    capital: 'Juba',
    continentName: 'Africa'
  },
  {
    countryName: 'Spain',
    population: '46505963',
    capital: 'Madrid',
    continentName: 'Europe'
  },
  {
    countryName: 'Sri Lanka',
    population: '21513990',
    capital: 'Colombo',
    continentName: 'Asia'
  },
  {
    countryName: 'Sudan',
    population: '35000000',
    capital: 'Khartoum',
    continentName: 'Africa'
  },
  {
    countryName: 'Suriname',
    population: '492829',
    capital: 'Paramaribo',
    continentName: 'South America'
  },
  {
    countryName: 'Svalbard and Jan Mayen',
    population: '2550',
    capital: 'Longyearbyen',
    continentName: 'Europe'
  },
  {
    countryName: 'Swaziland',
    population: '1354051',
    capital: 'Mbabane',
    continentName: 'Africa'
  },
  {
    countryName: 'Sweden',
    population: '9828655',
    capital: 'Stockholm',
    continentName: 'Europe'
  },
  {
    countryName: 'Switzerland',
    population: '7581000',
    capital: 'Bern',
    continentName: 'Europe'
  },
  {
    countryName: 'Syria',
    population: '22198110',
    capital: 'Damascus',
    continentName: 'Asia'
  },
  {
    countryName: 'São Tomé and Príncipe',
    population: '175808',
    capital: 'São Tomé',
    continentName: 'Africa'
  },
  {
    countryName: 'Taiwan',
    population: '22894384',
    capital: 'Taipei',
    continentName: 'Asia'
  },
  {
    countryName: 'Tajikistan',
    population: '7487489',
    capital: 'Dushanbe',
    continentName: 'Asia'
  },
  {
    countryName: 'Tanzania',
    population: '41892895',
    capital: 'Dodoma',
    continentName: 'Africa'
  },
  {
    countryName: 'Thailand',
    population: '67089500',
    capital: 'Bangkok',
    continentName: 'Asia'
  },
  {
    countryName: 'Togo',
    population: '6587239',
    capital: 'Lomé',
    continentName: 'Africa'
  },
  {
    countryName: 'Tokelau',
    population: '1466',
    capital: '',
    continentName: 'Oceania'
  },
  {
    countryName: 'Tonga',
    population: '122580',
    capital: "Nuku'alofa",
    continentName: 'Oceania'
  },
  {
    countryName: 'Trinidad and Tobago',
    population: '1328019',
    capital: 'Port of Spain',
    continentName: 'North America'
  },
  {
    countryName: 'Tunisia',
    population: '10589025',
    capital: 'Tunis',
    continentName: 'Africa'
  },
  {
    countryName: 'Turkey',
    population: '77804122',
    capital: 'Ankara',
    continentName: 'Asia'
  },
  {
    countryName: 'Turkmenistan',
    population: '4940916',
    capital: 'Ashgabat',
    continentName: 'Asia'
  },
  {
    countryName: 'Turks and Caicos Islands',
    population: '20556',
    capital: 'Cockburn Town',
    continentName: 'North America'
  },
  {
    countryName: 'Tuvalu',
    population: '10472',
    capital: 'Funafuti',
    continentName: 'Oceania'
  },
  {
    countryName: 'U.S. Minor Outlying Islands',
    population: '0',
    capital: '',
    continentName: 'Oceania'
  },
  {
    countryName: 'U.S. Virgin Islands',
    population: '108708',
    capital: 'Charlotte Amalie',
    continentName: 'North America'
  },
  {
    countryName: 'Uganda',
    population: '33398682',
    capital: 'Kampala',
    continentName: 'Africa'
  },
  {
    countryName: 'Ukraine',
    population: '45415596',
    capital: 'Kiev',
    continentName: 'Europe'
  },
  {
    countryName: 'United Arab Emirates',
    population: '4975593',
    capital: 'Abu Dhabi',
    continentName: 'Asia'
  },
  {
    countryName: 'United Kingdom',
    population: '62348447',
    capital: 'London',
    continentName: 'Europe'
  },
  {
    countryName: 'United States',
    population: '310232863',
    capital: 'Washington',
    continentName: 'North America'
  },
  {
    countryName: 'Uruguay',
    population: '3477000',
    capital: 'Montevideo',
    continentName: 'South America'
  },
  {
    countryName: 'Uzbekistan',
    population: '27865738',
    capital: 'Tashkent',
    continentName: 'Asia'
  },
  {
    countryName: 'Vanuatu',
    population: '221552',
    capital: 'Port Vila',
    continentName: 'Oceania'
  },
  {
    countryName: 'Vatican City',
    population: '921',
    capital: 'Vatican City',
    continentName: 'Europe'
  },
  {
    countryName: 'Venezuela',
    population: '27223228',
    capital: 'Caracas',
    continentName: 'South America'
  },
  {
    countryName: 'Vietnam',
    population: '89571130',
    capital: 'Hanoi',
    continentName: 'Asia'
  },
  {
    countryName: 'Wallis and Futuna',
    population: '16025',
    capital: 'Mata-Utu',
    continentName: 'Oceania'
  },
  {
    countryName: 'Western Sahara',
    population: '273008',
    capital: 'Laâyoune / El Aaiún',
    continentName: 'Africa'
  },
  {
    countryName: 'Yemen',
    population: '23495361',
    capital: 'Sanaa',
    continentName: 'Asia'
  },
  {
    countryName: 'Zambia',
    population: '13460305',
    capital: 'Lusaka',
    continentName: 'Africa'
  },
  {
    countryName: 'Zimbabwe',
    population: '13061000',
    capital: 'Harare',
    continentName: 'Africa'
  },
  {
    countryName: 'Åland',
    population: '26711',
    capital: 'Mariehamn',
    continentName: 'Europe'
  }
]
const notes = [
  {
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
  },
  {
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
  },
  {
    id: 4,
    title: 'eum et est occaecati',
    body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
  },
  {
    id: 5,
    title: 'nesciunt quas odio',
    body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'
  },
  {
    id: 6,
    title: 'dolorem eum magni eos aperiam quia',
    body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae'
  },
  {
    id: 7,
    title: 'magnam facilis autem',
    body: 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas'
  },
  {
    id: 8,
    title: 'dolorem dolore est ipsam',
    body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae'
  },
  {
    id: 9,
    title: 'nesciunt iure omnis dolorem tempora et accusantium',
    body: 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas'
  },
  {
    id: 10,
    title: 'optio molestias id quia eum',
    body: 'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error'
  },
  {
    id: 11,
    title: 'et ea vero quia laudantium autem',
    body: 'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi'
  },
  {
    id: 12,
    title: 'in quibusdam tempore odit est dolorem',
    body: 'itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio'
  },
  {
    id: 13,
    title: 'dolorum ut in voluptas mollitia et saepe quo animi',
    body: 'aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam'
  },
  {
    id: 14,
    title: 'voluptatem eligendi optio',
    body: 'fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum'
  },
  {
    id: 15,
    title: 'eveniet quod temporibus',
    body: 'reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae'
  },
  {
    id: 16,
    title: 'sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio',
    body: 'suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta'
  },
  {
    id: 17,
    title: 'fugit voluptas sed molestias voluptatem provident',
    body: 'eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo'
  },
  {
    id: 18,
    title: 'voluptate et itaque vero tempora molestiae',
    body: 'eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam'
  },
  {
    id: 19,
    title: 'adipisci placeat illum aut reiciendis qui',
    body: 'illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas'
  },
  {
    id: 20,
    title: 'doloribus ad provident suscipit at',
    body: 'qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo'
  },
  {
    id: 21,
    title: 'asperiores ea ipsam voluptatibus modi minima quia sint',
    body: 'repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt'
  },
  {
    id: 22,
    title: 'dolor sint quo a velit explicabo quia nam',
    body: 'eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse'
  },
  {
    id: 23,
    title: 'maxime id vitae nihil numquam',
    body: 'veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis'
  },
  {
    id: 24,
    title: 'autem hic labore sunt dolores incidunt',
    body: 'enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt'
  },
  {
    id: 25,
    title: 'rem alias distinctio quo quis',
    body: 'ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio'
  },
  {
    id: 26,
    title: 'est et quae odit qui non',
    body: 'similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero'
  },
  {
    id: 27,
    title: 'quasi id et eos tenetur aut quo autem',
    body: 'eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur'
  },
  {
    id: 28,
    title: 'delectus ullam et corporis nulla voluptas sequi',
    body: 'non et quaerat ex quae ad maiores\nmaiores recusandae totam aut blanditiis mollitia quas illo\nut voluptatibus voluptatem\nsimilique nostrum eum'
  },
  {
    id: 29,
    title: 'iusto eius quod necessitatibus culpa ea',
    body: 'odit magnam ut saepe sed non qui\ntempora atque nihil\naccusamus illum doloribus illo dolor\neligendi repudiandae odit magni similique sed cum maiores'
  },
  {
    id: 30,
    title: 'a quo magni similique perferendis',
    body: 'alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia'
  },
  {
    id: 31,
    title: 'ullam ut quidem id aut vel consequuntur',
    body: 'debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae'
  },
  {
    id: 32,
    title: 'doloremque illum aliquid sunt',
    body: 'deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime'
  },
  {
    id: 33,
    title: 'qui explicabo molestiae dolorem',
    body: 'rerum ut et numquam laborum odit est sit\nid qui sint in\nquasi tenetur tempore aperiam et quaerat qui in\nrerum officiis sequi cumque quod'
  },
  {
    id: 34,
    title: 'magnam ut rerum iure',
    body: 'ea velit perferendis earum ut voluptatem voluptate itaque iusto\ntotam pariatur in\nnemo voluptatem voluptatem autem magni tempora minima in\nest distinctio qui assumenda accusamus dignissimos officia nesciunt nobis'
  },
  {
    id: 35,
    title: 'id nihil consequatur molestias animi provident',
    body: 'nisi error delectus possimus ut eligendi vitae\nplaceat eos harum cupiditate facilis reprehenderit voluptatem beatae\nmodi ducimus quo illum voluptas eligendi\net nobis quia fugit'
  },
  {
    id: 36,
    title: 'fuga nam accusamus voluptas reiciendis itaque',
    body: 'ad mollitia et omnis minus architecto odit\nvoluptas doloremque maxime aut non ipsa qui alias veniam\nblanditiis culpa aut quia nihil cumque facere et occaecati\nqui aspernatur quia eaque ut aperiam inventore'
  },
  {
    id: 37,
    title: 'provident vel ut sit ratione est',
    body: 'debitis et eaque non officia sed nesciunt pariatur vel\nvoluptatem iste vero et ea\nnumquam aut expedita ipsum nulla in\nvoluptates omnis consequatur aut enim officiis in quam qui'
  },
  {
    id: 38,
    title: 'explicabo et eos deleniti nostrum ab id repellendus',
    body: 'animi esse sit aut sit nesciunt assumenda eum voluptas\nquia voluptatibus provident quia necessitatibus ea\nrerum repudiandae quia voluptatem delectus fugit aut id quia\nratione optio eos iusto veniam iure'
  },
  {
    id: 39,
    title: 'eos dolorem iste accusantium est eaque quam',
    body: 'corporis rerum ducimus vel eum accusantium\nmaxime aspernatur a porro possimus iste omnis\nest in deleniti asperiores fuga aut\nvoluptas sapiente vel dolore minus voluptatem incidunt ex'
  },
  {
    id: 40,
    title: 'enim quo cumque',
    body: 'ut voluptatum aliquid illo tenetur nemo sequi quo facilis\nipsum rem optio mollitia quas\nvoluptatem eum voluptas qui\nunde omnis voluptatem iure quasi maxime voluptas nam'
  },
  {
    id: 41,
    title: 'non est facere',
    body: 'molestias id nostrum\nexcepturi molestiae dolore omnis repellendus quaerat saepe\nconsectetur iste quaerat tenetur asperiores accusamus ex ut\nnam quidem est ducimus sunt debitis saepe'
  },
  {
    id: 42,
    title: 'commodi ullam sint et excepturi error explicabo praesentium voluptas',
    body: 'odio fugit voluptatum ducimus earum autem est incidunt voluptatem\nodit reiciendis aliquam sunt sequi nulla dolorem\nnon facere repellendus voluptates quia\nratione harum vitae ut'
  },
  {
    id: 43,
    title: 'eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis',
    body: 'similique fugit est\nillum et dolorum harum et voluptate eaque quidem\nexercitationem quos nam commodi possimus cum odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis'
  },
  {
    id: 44,
    title: 'optio dolor molestias sit',
    body: 'temporibus est consectetur dolore\net libero debitis vel velit laboriosam quia\nipsum quibusdam qui itaque fuga rem aut\nea et iure quam sed maxime ut distinctio quae'
  },
  {
    id: 45,
    title: 'ut numquam possimus omnis eius suscipit laudantium iure',
    body: 'est natus reiciendis nihil possimus aut provident\nex et dolor\nrepellat pariatur est\nnobis rerum repellendus dolorem autem'
  },
  {
    id: 46,
    title: 'aut quo modi neque nostrum ducimus',
    body: 'voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid'
  },
  {
    id: 47,
    title: 'quibusdam cumque rem aut deserunt',
    body: 'voluptatem assumenda ut qui ut cupiditate aut impedit veniam\noccaecati nemo illum voluptatem laudantium\nmolestiae beatae rerum ea iure soluta nostrum\neligendi et voluptate'
  },
  {
    id: 48,
    title: 'ut voluptatem illum ea doloribus itaque eos',
    body: 'voluptates quo voluptatem facilis iure occaecati\nvel assumenda rerum officia et\nillum perspiciatis ab deleniti\nlaudantium repellat ad ut et autem reprehenderit'
  },
  {
    id: 49,
    title: 'laborum non sunt aut ut assumenda perspiciatis voluptas',
    body: 'inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut'
  },
  {
    id: 50,
    title: 'repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem',
    body: 'error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur'
  }
]

const users = [{
  id: 'ff76c061',
  first_name: 'Elbertina',
  last_name: 'Welton',
  email: 'ewelton0@goodreads.com',
  password: '1234567',
  gender: 'Female',
  birthday: '2009-08-10'
},
{
  id: 'ccc75019',
  first_name: 'Waldon',
  last_name: 'Cuthbert',
  email: 'wcuthbert1@bloglines.com',
  password: 'donOmar24',
  gender: 'Male',
  birthday: '2004-07-08'
},
{
  id: '608e826b',
  first_name: 'Emlyn',
  last_name: 'Langfitt',
  email: 'elangfitt2@theglobeandmail.com',
  password: 'Traversuras',
  gender: 'Female',
  birthday: '2001-12-15'
},
{
  id: 'c806a1c2',
  first_name: 'Blaire',
  last_name: 'Stow',
  email: 'bstow3@wikipedia.org',
  password: 'gitHub',
  gender: 'Female',
  birthday: '2000-09-26'
},
{
  id: '391fb075',
  first_name: 'Tommie',
  last_name: 'Chasmoor',
  email: 'tchasmoor4@4shared.com',
  password: 'mipasword',
  gender: 'Female',
  birthday: '2005-09-15'
}
]

module.exports = { countries, notes, users }
