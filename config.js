var config = {
    style: 'mapbox://styles/dtaylorgoud/ckgtc9hrs20pr19nnrtz0zmbb',
    accessToken: 'pk.eyJ1IjoiZHRheWxvcmdvdWQiLCJhIjoiY2tlbzA1OHltMjJyNjMwcGM2eHZsMGowaiJ9.jtxQ1bgoZL9_sacqiAlTsg',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'San Francisco Market Street : Functional Ambience',
    subtitle: 'A brief walk through the history of Market Street',
    byline: 'By Michelle Wray and Derek Taylor',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Market Street',
            
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-122.44742, 37.75827],
                zoom: 12.03,
                pitch: 9.00,
                bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            title: 'Second Title',
            image:  'images/birdseye.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-122.41641, 37.77744],
zoom: 15.47,
pitch: 41.50,
bearing: 46.40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'three',
            title: 'third Title',
            image: 'images/historic6.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-122.40060, 37.79021],
                zoom: 16.72,
                pitch: 60.00,
                bearing: 76.80
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
