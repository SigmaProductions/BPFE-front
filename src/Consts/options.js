const OPTIONS = {
    generic: [
        {
            name: 'rodzaj lokalu',
            values: ['gastronomiczny', 'handlowy', 'usługowy', 'biurowy', 'przemysłowy'],
        },
    ],
    infrastructure: [
        {
            name: 'punkty zainteresowań',
            values: [
                'szkoły',
                'banki/bankomaty',
                'restauracje i hotele',
                'obiekty rozrywki',
                'supermarkety',
                'stacje PKP',
                'placówki zdrowia',
            ],
        },
        {
            name: 'zabudowanie',
            values: [
                'domy wielorodzinne',
                'wysoka gęstość zabudowy mieszkaniowej',
                'hotele',
                'garaże',
                'tereny rolnicze',
                'lasy',
                'obiekty kultury',
            ],
        },
    ],
    citizens: [
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
    ],
};

export const MAIN_OPTION_NAMES = [
    'gastronomiczny',
    'handlowy',
    'usługowy',
    'biurowy',
    'przemysłowy',
];

export default OPTIONS;
