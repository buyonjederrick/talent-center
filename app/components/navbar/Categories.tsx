'use client';

import { TfiWrite } from "react-icons/tfi";
import { GiMusicalKeyboard, GiGuitar, GiViolin, GiGuitarBassHead, GiDrumKit } from "react-icons/gi";
import { BsMusicNoteList, BsSoundwave, BsMusicNoteBeamed } from "react-icons/bs";
import { CgMusicSpeaker } from "react-icons/cg";
import { BiUserVoice } from "react-icons/bi";
import { MdOutlineSettingsVoice, MdPhotoCamera } from "react-icons/md";
import { AiOutlineVideoCamera,  } from "react-icons/ai";


export const categories = [
    {
        label: 'Pianist',
        icon: GiMusicalKeyboard,
        description: 'Experience the captivating artistry of a world-class pianist. With unparalleled mastery of the keys, their fingers dance across the piano, weaving melodies that touch your soul. From breathtaking classical compositions to vibrant jazz improvisations, this virtuoso pianist will transport you to a realm of musical brilliance. Allow the enchanting sounds to stir your emotions and leave you spellbound. Immerse yourself in the magic of the piano with this extraordinary performer.'
    },

    {
        label: 'Guitarist',
        icon: GiGuitar,
        description: 'Unleash your inner rockstar with our world-class guitarist! Whether you are looking to set the stage on fire, create mesmerizing melodies, or simply add a touch of musical brilliance to your event, our skilled guitarist is the ultimate maestro you need. With their virtuosic talent, soul-stirring solos, and the ability to effortlessly captivate any audience, they will take your music experience to new heights. Get ready to be transported into a realm of extraordinary sound and unforgettable performances. Book our exceptional guitarist today and let the strings sing your story!'
    },

    {
        label: 'Music Producers',
        icon: BsMusicNoteList,
        description: 'Unlock the power of sound with our talented music producers. From chart-topping hits to unforgettable melodies, our team of skilled professionals will bring your musical vision to life. With years of experience and a keen ear for perfection, they know how to craft the perfect harmonies, mix the beats, and create a captivating sonic experience that will leave a lasting impression. Let our music producers transform your ideas into reality and take your music to new heights. Elevate your sound and captivate your audience with the expertise of our exceptional music producers.'
    },

    {
        label: 'Sound Engineers',
        icon: CgMusicSpeaker,
        description: 'Experience sonic perfection with our team of skilled sound engineers. From recording studios to live events, our experts combine technical mastery with an artistic touch to deliver exceptional audio quality. With an acute understanding of sound dynamics, they meticulously balance frequencies, optimize acoustics, and fine-tune every detail to create an immersive auditory experience. Trust our sound engineers to transform your project into a symphony of sound, ensuring crystal-clear clarity, rich textures, and captivating sonic landscapes that captivate and engage your audience. Unlock the full potential of your audio and let our talented sound engineers bring your vision to life.'
    },

    {
        label: 'Sound Desginers',
        icon: BsSoundwave,
        description: 'Unlock the power of sound with our skilled sound designers! Whether you are creating immersive audio experiences, crafting impactful soundtracks, or enhancing the ambiance of your projects, our team of expert sound designers are here to bring your vision to life. With their keen ears and artistic expertise, they meticulously sculpt every sound element to create a captivating and unforgettable sonic landscape. Harness the magic of sound and elevate your projects to new heights with our talented sound designers!'
    }
    ,

    {
        label: 'Singers',
        icon: BiUserVoice,
        description: 'Experience the soul-stirring melodies and captivating performances of our talented singers. From powerhouse vocals to heartfelt ballads, our artists will enchant and mesmerize you with their unique voices and charismatic stage presence. Whether you are looking for the next big sensation or a seasoned performer, our lineup of singers will leave you craving for more. Let their passion and artistry transport you to a world of unforgettable musical moments. Dont miss the opportunity to be moved by the extraordinary talent of our singers – immerse yourself in a symphony of emotions and let the music speak to your heart.'
    },

    {
        label: 'Voice Over Artist',
        icon: MdOutlineSettingsVoice,
        description: 'Capture the essence of your brand with captivating and compelling voice-over narration provided by our talented Voice Over Artist. From commercials and corporate videos to documentaries and audiobooks, our artists versatile voice brings scripts to life, leaving a lasting impression on your audience. With impeccable diction, flawless delivery, and a range of tones and styles, our Voice Over Artist ensures your message resonates with clarity, authenticity, and professionalism. Trust our artist to deliver a powerful voice that elevates your content and connects with listeners, making your brand truly unforgettable.'
    },

    {
        label: 'Video Editing',
        icon: AiOutlineVideoCamera,
        description: 'Unlock the power of storytelling with our professional video editing services. Transform raw footage into captivating visual masterpieces that engage, inspire, and leave a lasting impact on your audience. Our skilled editors bring your vision to life, combining seamless cuts, stunning effects, and crisp audio to create a truly immersive viewing experience. Whether its a promotional video, corporate presentation, or personal project, our video editing expertise elevates your content to the next level, ensuring it stands out in todays visual-driven world. Experience the magic of transformative editing and let your videos shine like never before.'
    },

    {
        label: 'PhotoGraphers',
        icon: MdPhotoCamera,
        description: 'Capture lifes beautiful moments with our talented photographers. Whether youre looking to preserve precious memories, create stunning portraits, or showcase your products in the best light, our skilled photographers have the expertise to bring your vision to life. With an eye for detail and a passion for storytelling, they artfully compose each shot, ensuring every image reflects the essence and emotion of the subject. Trust our photographers to capture the magic and turn ordinary moments into extraordinary masterpieces. Book a session today and let us capture your story through the lens.'
    },

    {
        label: 'Beat Making',
        icon: TbBrandNeteaseMusic,
        description: 'Elevate your music production game with Beat Makers, the ultimate tool for crafting mind-blowing beats and grooves. Whether you are an aspiring producer or a seasoned musician, our state-of-the-art software empowers you to bring your unique sound to life. With Beat Makers, you have access to a vast library of high-quality sounds, samples, and loops that cover every genre and style imaginable. Experiment with a range of instruments, from classic drums to cutting-edge synthesizers, all meticulously designed to inspire your creative genius.'
    },

    {
        label: 'Violinists',
        icon: GiViolin,
        description: 'Immerse yourself in the enchanting world of music with the mesmerizing melodies of skilled violinists. From classical symphonies to contemporary compositions, these virtuosos masterfully draw the bow across the strings, captivating audiences with their emotional performances. With their precision, passion, and exquisite technique, violinists create a harmonious fusion of elegance and expression that transcends time. Experience the power and grace of the violin as it weaves its spell, evoking emotions and transporting you to a realm of artistic brilliance. Discover the magic of violinists and let their captivating performances resonate in your heart.'
    },

    {
        label: 'Drummers',
        icon: GiDrumKit,
        description: 'Experience the electrifying rhythm and soulful beats that only drummers can deliver. Introducing our latest collection of drumming marvels, where passion meets precision. From explosive solos to flawless grooves, these skilled percussionists will captivate your senses and set your heart pounding. Immerse yourself in the irresistible energy and dynamic artistry of drummers, as they create the pulsating backbone of every unforgettable melody. Unleash the power of percussion and let the beat take you on an exhilarating journey. Discover the heartbeat of music with our extraordinary drummers'
    },

    {
        label: 'Bass Guitarists',
        icon: GiGuitarBassHead,
        description: 'Unleash the power of rhythm with our dynamic bass guitarists. From thunderous grooves to soulful melodies, these masters of the low-end create the heartbeat of every musical composition. With their nimble fingers dancing across the fretboard, they effortlessly produce a rich and resonant sound that resonates deep within your soul. Whether you crave the pulsating energy of rock or the smooth grooves of jazz, our bass guitarists deliver a seamless blend of precision and passion, ensuring your music soars to new heights. Get ready to feel the undeniable groove as our bass guitarists captivate your senses and make your music come alive.'
    },

    
    {
        label: 'Deejays',
        icon: BsMusicNoteBeamed,
        description: 'Experience the ultimate sonic journey with our talented deejays! Immerse yourself in a world of electrifying beats, seamless mixes, and infectious energy that will make your event unforgettable. Our deejays are masters of their craft, curating the perfect blend of music to keep you dancing all night long. Whether its a wedding, club night, or corporate event, our deejays will create a vibrant atmosphere, tailored to your unique tastes and preferences. Get ready to groove to the rhythm of the party and let our deejays elevate your event to new heights of excitement and entertainment.'
    },

    {
        label: 'Song Writers',
        icon: TfiWrite,
        description: 'Unlock the power of words and melody with our team of talented songwriters. From heartfelt ballads to infectious pop anthems, our songwriters have the skill and creativity to bring your musical vision to life. With a keen ear for hooks and a knack for storytelling, they craft captivating lyrics and captivating melodies that resonate with audiences. Whether youre an aspiring artist looking for a hit single or a brand seeking a memorable jingle, our songwriters are here to transform your ideas into unforgettable songs that touch hearts and capture minds. Let our songwriters elevate your music to new heights and make your message soar.'
    }
]


import Container from "../Container";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { TbBrandNeteaseMusic } from "react-icons/tb";

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';
    if (!isMainPage) {
        return null;
    }
     
  return (
    <Container>
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
            {categories.map((item) => (
                <CategoryBox 
                key={item.label}
                label={item.label}
                selected={category === item.label}
                icon={item.icon}
                />
            ))}
        </div>
    </Container>
  )
}

export default Categories;