var config = {
    style: 'mapbox://styles/dtaylorgoud/ckhkd45dg4gzv19otkfz325v1',
    accessToken: 'pk.eyJ1IjoiZHRheWxvcmdvdWQiLCJhIjoiY2tlbzA1OHltMjJyNjMwcGM2eHZsMGowaiJ9.jtxQ1bgoZL9_sacqiAlTsg',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Market Street: San Francisco, California',
    subtitle: 'A brief walk through the history of Market Street',
    byline: 'By Michelle Wray and Derek Taylor',
    footer: 'Source: SF MTA',
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
                },
                
            ],
            onChapterExit: [
           
            ]
        },{
            id: 'second',
            title: 'Geographical Context',
            image:'images/transitcenter.jpg',
            description: `- Extends from the Ferry Building (blue dot) along the Embarcadero to the Twin Peaks neighborhood<br>
            - Passes through several major downtown districts:
            <blockquote><strong>Civic Center</strong> (a business hub for SF and major public transit stop) <br>
            <strong>Castro District</strong> (thriving music, arts and culture neighborhood)<br>
           <strong> SOMA</strong> (industrial district, two sports stadiums)<br>
           <strong> Union Square</strong> (central shopping, hotel and theater district)</blockquote>
            - Connects to the Salesforce Transit Center (red circle)`        ,
            location: {
                center: [-122.4240, 37.77528],
                zoom: 13.00,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer:'trans-ferry',
                    opacity:1
                },
                {
                    layer:'neighborhoods',
                    opacity:1

                }
            ],
            onChapterExit: [
                {
                    layer:'trans-ferry',
                    opacity:0
                },
                {
                    layer:'neighborhoods',
                    opacity:0

                }
            ]
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
            image: 'images/emb_free_comp3.jpg',
            description: `<strong>1963: Downtown Plan </strong>:<br>  the city planning department commissioned a Downtown Plan that limited Market Street to only allow buses and emergency vehicles<br>
            <strong>1968: Market Street Redevelopment Plan</strong> <br>
            Put new life into the street as a center for Bay Area business, shopping and entertainment
            SF residents voted for reconstruction and improvement of Market street after the completion of the double-decker subway​<br>
            <strong>1972: BART system opened</strong><br>
            `,
            location: {
                center: [-122.39826, 37.79534],
                zoom: 16.08,
                pitch: 60.00,
                bearing: 101.85
            },
            onChapterEnter: [{
                layer:'bikeped_kill',
                opacity:0
            }],
            onChapterExit: []
        }
        ,{
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
            onChapterEnter: [{
                layer:'market',
                opacity:1
            }],
            onChapterExit: []
        }, {
            id: 'injuries',
            title: 'Injuries',
            image:'images/densitycoll_legenda2.png',
            description: `Market Street is home to half of the top 10 intersections for pedestrian and bicycle collisions. In fact, each year since 2014 the area-averaged over 100 injury collisions per year -- 75 percent of them involving people walking or biking. This heatmap shows densities of injuries for pedestrians and cyclists from 2006 - 2017
            `,
            location: {
                center: [-122.41718, 37.77659],
zoom: 13.20,
pitch: 0.00,
bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'bikeped_col',
                    opacity:1
                }
            ],
            onChapterExit: []
        }, {
            id: 'kill',
            title: 'Deaths',
            image: 'images/deaths_legenda3.png',
            description: `Market Street is also one of the deadliest streets in the Bay Area. Here all deaths are marked for pedestrians and cyclists from 2006 - 2017. It was clear that a change needed to be made.
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
            },
        {layer:'market',
    opacity:0}],
            onChapterExit: [{
                layer: 'bikeped_kill',
                opacity: 0
            }]
        },
        
        {
            id: 'six',
            title: `A “Better Market Street”`,
            image: 'images/plan_ee-level3.jpg',
            description: `- 2-miles of improved accessibility​<br>

           - Ride-sharing and private vehicles are prohibited <br> ​
            
            - Muni buses, taxis, paratransit and commercial vehicles are permitted ​<br>
            
            - Change the current text on this slide to the above
            
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
            image: 'images/cross_section3.png',
            description: `- Center lane will be reserved for Muni riders only​ <br>

           -  Outer lanes will be turned into open roadway for Muni buses, taxis and commercials vehicles​<br>
            
            - Commercial loading will only be allowed during off-peak hours​
            
            - For cyclists, there will be wider bike lanes and the lanes will be at sidewalk level and made of a material that makes them easily identifiable as a bike lane​<br>
            
            4-foot buffer that will separate it from the roadway​
            
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
        image:'images/rendering10.jpg',
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
            onChapterEnter: [
                {
                    layer:'market',
                    opacity:1
                }
            ],
            onChapterExit: [  {
                layer:'market',
                opacity:0
            }]
        },
        {
            id: 'eight',
            title: `Workshop Functional Ambience`,
            description: `<strong>6th Street & Market - 7th Street & Market</strong><br>
            This section of Market Street is the main focus for the Better Market Street Plan. For this workshop you will create a functional ambience spider graph for the current design of the street. After completing that you will look over the new planned design and create an upgraded spider chart. What parts of functional ambience have been improved? What still needs work? Can you see any Dutch inspired designs? What would an interseciton like this look like in the Netherlands?<br>
            
            <strong>Resources:</strong><br>
            <a href='https://www.google.com/maps/place/Market+St+%26+6th+St,+San+Francisco,+CA+94103,+USA/@37.7812331,-122.4120492,258m/data=!3m1!1e3!4m5!3m4!1s0x808580850397161b:0x1f5dcf6b2af5a835!8m2!3d37.7822109!4d-122.4103562?hl=en'target="_blank">Google Maps Current Street</a><br>
            <a class=jsx-1295323620 image-container fill-parent></a>

            <a href='https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=5c7e7f18-280a-11eb-83c8-ebb5d6f907df' target="_blank">Current Street Plan VS Better Market Street Plan</a><br>
            <a href='https://i.imgur.com/DrELtIS.jpg'target="_blank">Rendered Image for Better Market Street</a>`
            
            
            ,
            location: {
                center: [-122.41129, 37.78145],
                zoom: 16.15,
                pitch: 0.00,
                bearing: 1.41
            },
            onChapterEnter: [{
                layer:'market7th',
                opacity:.6
            }],
            onChapterExit: [{
                layer:'market7th',
                opacity:0
            }]
        }
    ]
};
