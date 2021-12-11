const OPTIONS = [
    {
        name: 'rodzaj lokalu',
        values: ['gastronomiczny', 'handlowy', 'usługowy', 'biurowy', 'przemysłowy'],
    },
    { name: 'infrastuktura', values: ['parki', 'bankomaty', 'kultura', 'edukacja', 'transport'] },
    {
        name: 'preferencje mieszkańców',
        values: [
            'motoryzacja',
            'sport',
            'moda',
            'finanse',
            'polityka',
            'zakupy online',
            'technologie',
            'drogerie',
        ],
    },
    {
        name: 'wydatki mieszkańców',
        values: [
            'żywność',
            'alkohole',
            'odzież',
            'restauracje i hotele',
            'transport',
            'rekreakcja i kultura',
        ],
    },
];

export const MAIN_OPTION_NAMES = [
    'gastronomiczny',
    'handlowy',
    'usługowy',
    'biurowy',
    'przemysłowy',
];

export default OPTIONS;
