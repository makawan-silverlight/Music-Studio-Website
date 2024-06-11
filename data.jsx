import WishfulThinking from './src/assets/audio/Wishful Thinking.mp3'
import GoodVibe from './src/assets/audio/Good Vibe.mp3'
import LazyDay from './src/assets/audio/Lazy Day.mp3'
import RiverBlues from './src/assets/audio/River Blues.mp3'
import SkyMap from './src/assets/audio/Sky Map.mp3'

const pricingInfo = [
    {
        name: "Start",
        year: "199$",
        month: "19$",
        description: "Perfect for freelance, wedding video, creators and podcasters.",
        service: [ 
            {   title:"Website",
                status: true
            },
            {   title:"Podcast",
                status: true
            },
            {   title:"Social accounts up to 1M followers",
                status: false
            },
            {   title:"Cinema / Film Festival",
                status: false
            },
            {   title:"Video Game",
                status: false
            },
            
        ]
    },
    {
        name: "Advance",
        year: "399$",
        month: "39$",
        description: "Perfect for production companies, agencies, brands, and non-profits.",
        service: [ 
            {   title:"Website",
                status: true
            },
            {   title:"Podcast",
                status: true
            },
            {   title:"Social accounts up to 1M followers",
                status: true
            },
            {   title:"Cinema / Film Festival",
                status: false
            },
            {   title:"Video Game",
                status: false
            },
            
        ]
    },
    { 
        name: "Premium",
        year: "599$",
        month: "59$",
        description: "Perfect for large brands or projects that need extended coverage.",
        service: [ 
            {   title:"Website",
                status: true
            },
            {   title:"Podcast",
                status: true
            },
            {   title:"Social accounts up to 1M followers",
                status: true
            },
            {   title:"Cinema / Film Festival",
                status: true
            },
            {   title:"Video Game",
                status: true
            },
            
        ]
    }
]

const audioData = [
    
    {
        id: 1,
        title: 'Lazy Day - Infraction',
        artist: 'Infraction',
        thumbnail: "https://images.unsplash.com/photo-1606103920295-9a091573f160?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        src: LazyDay
    },
    {
        id: 2,
        title: 'Good Vibe - Infraction',
        artist: 'Infraction',
        thumbnail: "https://images.unsplash.com/photo-1485735662814-c4f66e49dbae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        src: GoodVibe
    },
    {
        id: 3,
        title: 'Wishful - Dan Lebowitz',
        artist: 'Dan Lebowitz',
        thumbnail: "https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        src: WishfulThinking
    },
    {
        id: 4,
        title: 'River Blues - TrackTribe',
        artist: 'TrackTribe',
        thumbnail: "https://images.unsplash.com/photo-1519852476561-ec618b0183ba?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        src: RiverBlues
    },
    {
        id: 5,
        title: 'Sky Map - Reed Mathis',
        artist: 'Reed Mathis',
        thumbnail: "https://images.unsplash.com/photo-1586603328377-f23a9d85fa35?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        src: SkyMap
    }
    
  ]

export { pricingInfo,audioData };
