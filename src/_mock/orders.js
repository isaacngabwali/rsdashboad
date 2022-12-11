import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const orders = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(['Paid', 'pending']),
  role: sample([
    'Rotatrim Ream of Paper',
    'Casio Calculator',
    'Picfare Geametry Set',
    '96 Pages Picfare Books',
    'Big Blue Pen',
    'School Bag',
    '3Q Counter Book',
    'Brooms',
    'Mooper',
    'Toilate Paper',
  ]),
}));

export default orders;
