var config = {
    style: 'mapbox://styles/dtaylorgoud/ckhex36sj13us19pexzq4v2h3',
    accessToken: 'pk.eyJ1IjoiZHRheWxvcmdvdWQiLCJhIjoiY2tlbzA1OHltMjJyNjMwcGM2eHZsMGowaiJ9.jtxQ1bgoZL9_sacqiAlTsg',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Market Street: San Francisco, California',
    subtitle: 'A brief walk through the history of Market Street',
    byline: 'By Michelle Wray and Derek Taylor',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Market Street',
            
            description: `In one of the densest cities in the USA, Market Street is San Francisco's civic backbone, connecting water to hills, businesses to neighborhoods, cultural centers to recreational opportunities. The movement of people and goods, from the very earliest times, has dominated its design and use.`,
            location: {
                center: [-122.41484, 37.77594],
                zoom: 9.88,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                   layer: 'marketstreet',
                   opacity: 1
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },{
            id: 'second',
            title: 'Geographical Context',
            image:'images/transitcenter.jpg',
            description: `- Northern terminus begins at the Ferry Building along the Embarcadero <br>
            - Southern terminus extends into the Twin Peaks neighborhood <br>
            -Passes through several major downtown districts:
            <blockquote><strong>Civic Center</strong> (a business hub for SF and major public transit stop) <br>
            <strong>Castro District</strong> (thriving music, arts and culture neighborhood)<br>
           <strong> SOMA</strong> (industrial district, two sports stadiums)
           <strong> Union Square</strong> (central shopping, hotel and theater district)</blockquote>
            -Connects to the Salesforce Transit Center (regional transit hub)`        ,
            location: {
                center: [-122.4240, 37.77528],
                zoom: 13.00,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            title: 'History',
            image:  'images/historic6.jpg',
            description: `<strong>Major transit artery for the city</strong><br>
            Historically has serviced different transit cars: <br>
            - horse-drawn streetcars <br>
            - cable cars <br>
            - electric streetcars <br>
            - electric trolley buses <br>
            Currently services electric and diesel buses `,
            
            location: {
                center: [-122.4240, 37.77528],
                zoom: 13.00,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'three',
            title: 'History Pt.2',
            image: 'images/emb_free.jpg',
            description: `<strong>1963</strong>:<br> City planning department commissioned an architecture firm to create the Downtown Plan
            and recommend that Market be limited to buses and emergency vehicles. SF Muni streetcars were moved underground (Muni Metro) in addition to the construction of the BART system in the late 1960’s. <br>
            <strong>1968: Market Street Redevelopment Plan</strong> <br>
            Put new life into the street as a center for Bay Area business, shopping and entertainment. 
            SF residents passed Prop A – issued $24.5 million in bonds to pay for reconstruction and improvement of Market street after the completion of the double-decker subway.<br>
            <strong>1972: BART system opened</strong><br>
            Six years of construction that tore up Market Street
            `,
            location: {
                center: [-122.41220, 37.78057],
zoom: 13.28,
pitch: 10.50,
bearing: 43.44
            },
            onChapterEnter: [],
            onChapterExit: []
        }
        , {
            id: 'injuries',
            title: 'Injuries',
            description: `blah
            `,
            location: {
                center: [-122.41718, 37.77659],
zoom: 13.20,
pitch: 0.00,
bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'bikeped_col',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'bikeped_col',
                opacity: 0
            }]
        }, {
            id: 'kill',
            title: 'Deaths',
            description: `blah
            `,
            location: {
                center: [-122.41718, 37.77659],
                zoom: 13.20,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'bikeped_kill',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'bikeped_kill',
                opacity: 0
            }]
        },
        {
            id: 'four',
            title: `What's Happening on Market Street?`,
            image: 'images/birdseye.jpg',
            description: `500,000 people walk on Market Street daily<br>
            200 buses an hour during peak times<br>
            650 people per hour ride bikes on Market Street during rush hour<br>
            75,000 daily transit riders above ground<br>
            
            `,
            location: {
                center: [-122.42314, 37.77211],
zoom: 14.34,
pitch: 60.00,
bearing: 46.64
            },
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {
            id: 'six',
            title: `A “Better Market Street”`,
            image: 'images/plan_ee-level.jpg',
            description: `For cyclists, there will be wider bike lanes and the lanes will be at sidewalk level and made of a material that makes them easily identifiable as a bike lane<br>
            4-foot buffer that will separate it from the roadway<br>
            The car-free space that encourage people to walk, bike and take transit<br>
            Resulted in 6-12% travel time savings for transit routes on Market Street <br>
            Help the city achieve Vision Zero goals <br>
            Eliminate traffic deaths on one of the city’s busiest corridors<br>
            Cars will be allowed to cross Market Street on most streets <br>
            Loading zones for commercial vehicles and ride-sharing services will be added to a number of cross streets<br>
            Curbside bus stops at each block, with center transit boarding islands <br>
            Traffic effects on other streets are negligible
            
            
            `,
            location: {
               
                center: [-122.41112, 37.77869],
                zoom: 13.5,
                pitch: 0.00,
                bearing: -43.43
            },
            onChapterEnter: [
                {layer: 'market',
                opacity: 0
            }, {
                layer: 'carfree',
                opacity: 0.4
            },
            {
                layer: 'trafficmove',
                opacity: 1
            },
            {
                layer: 'turn-res',
                opacity: 1
            },
            {
                layer: 'oneway',
                opacity: 1
            },
            {
                layer: 'twoway',
                opacity: 1
            }
            ],
            onChapterExit: [{
                layer: 'carfree',
                opacity: 0
            },
            {
                layer: 'trafficmove',
                opacity: 0
            },
            {
                layer: 'turn-res',
                opacity: 0
            },
            {
                layer: 'oneway',
                opacity: 0
            },
            {
                layer: 'twoway',
                opacity: 0
            }]
        },
        {
            id: 'five',
            title: `A “Better Market Street”`,
            image: 'images/cross_section.jpg',
            description: `<stong>Began in January 2020</strong><br>
            - 2-mile stretch of the street<br>
            - Ride-sharing and private vehicles are prohibited from using the roadway <br>
            - Reduce traffic and vehicle-related collisions<br>
            - Most injury-collisions include pedestrians and cycle-related accidents<br>
            - Muni buses, taxis, paratransit and commercial vehicles are permitted to used the roadway<br>
            - Center lane will be reserved for Muni riders only<br>
            - Outer lanes will be turned into open roadway for Muni buses, taxis and commercials vehicles<br>
            - Commercial loading will only be allowed during off-peak hours<br>
            
            `,
            location: {
                center: [-122.4019, 37.789],
                zoom: 18.18,
                pitch: 60.00,
                bearing: 46.64
            },
            onChapterEnter: [{
                layer:'crosssection',
                opacity:1
            }],
            onChapterExit: [{
                layer:'crosssection',
                opacity:0
            }]
        }
        ,
        
        {
            id: 'seven',
            title: `What's the Goal?`,
        
            description: `<strong>Making good city streets starts with trust in people</strong><br>
            The success of a good city street depends on:<br>
            Urban space that functions well for traffic<br>
            Is an enjoyable place for users<br>
            A place for activities<br>
            And a place that city dwellers can identify<br>
            
            
            `,
            location: {
                center: [-122.41940, 37.77528],
                zoom: 13.00,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
