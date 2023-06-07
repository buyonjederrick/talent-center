'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { 
  FieldValues, 
  SubmitHandler, 
  useForm
} from 'react-hook-form';
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation';
import { useMemo, useState, useEffect } from "react";

import useRentModal from '@/app/hooks/useRentModal';

import Modal from "./Modal";
import Counter from "../inputs/Counter";
import CategoryInput from '../inputs/CategoryInput';
import CountrySelect from "../inputs/CountrySelect";
import { categories } from '../navbar/Categories';
import MediaUpload from '../inputs/MediaUpload';
import Input from '../inputs/Input';
import Heading from '../Heading';
import TinyMce from '../inputs/TinyMce';
import MultiSelect from '../inputs/MultipleSelect';
import { genres, 
    productionsoftwares,
    instruments, 
    productionpurposes, 
    languages, 
    genders, 
    voiceoverpurposes, 
    accents, 
    ageranges, 
    voiceovertones, beatmoods  } from '../navbar/constants';
import MultipleMediaUpload from '../inputs/MultipleMediaUpload';



enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    MEDIA = 4,
    DESCRIPTION = 5,
    MORE_DESCRIPTION =6,
    CONTACT =7,
    PRICE = 8
}

const RentModal = () => {
    const router = useRouter();
    const rentModal = useRentModal();
    const [step, setStep] = useState(STEPS.CATEGORY);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        },
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            category: '',
            location: null,
            YearsOfExperience: 0,
            DeliveryTime: 0,
            RevisionNumber: 0,
            imgSrc: '',
            price: 20000,
            genre: '',
            MediaSrc:'',
            productionsoftware: '',
            instrument: '',
            productionpurpose: '',
            language: '',
            gender: '',
            voiceoverpurpose: '',
            accent: '',
            agerange: '',
            voiceovertone: '',
            beatmood: '',
            title: '',
            description: '',
            shortDescription: '',
            Contact: ''
        }
    });

    const category = watch('category');
    const location = watch('location');
    const genre = watch('genre');
    const YearsOfExperience = watch('YearsOfExperience');
    const DeliveryTime = watch('DeliveryTime');
    const RevisionNumber = watch('RevisionNumber');
    const imageSrc = watch('imageSrc');
    const MediaSrc = watch('MediaSrc');
    const instrument = watch('instrument');
    const productionsoftware = watch('productionsoftware');
    const productionpurpose = watch('productionpurpose');
    const language = watch('language');
    const gender = watch('gender');
    const voiceoverpurpose = watch('voiceoverpurpose');
    const accent = watch('accent');
    const agerange = watch('agerange');
    const voiceovertone = watch('voiceovertone');
    const beatmood = watch('beatmood');
    


    const Map = useMemo(() => dynamic(() => import('../Map'), {
        ssr: false
    }),[location]);

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true
        });

        if (id === 'category') {
            setSelectedCategory(value);
          }
    }

    const onBack = () => {
        setStep((value) => value - 1);
    };

    const onNext = () => {
        setStep((value) => value + 1);
    }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (step !== STEPS.PRICE) {
            return onNext();
          }
          
        setIsLoading(true);

        axios.post('/api/listings', data)
        .then(() => {
            toast.success('Your Professional Listing has been Created Successfully');
            router.refresh();
            reset();
            setStep(STEPS.CATEGORY);
            rentModal.onClose();
        })
        .catch(() => {
            toast.error('Something Went Wrong. Contact System Administrator')
        }).finally(() => {
            setIsLoading(false);
        })
    }

    const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return 'Create'
    }

    return 'Next'
  }, [step]);

  const InstrumentsArray = ['Pianist', 'Guitarist', 'Violinists','Drummers','Bass Guitarists'];
  const MusicProArray = ['Music Producers', 'Sound Desginers'];
  const VoiceOverArray = ['Voice Over Artist'];
  const BeatMoodArray = ['Beat Making'];
  const NotGenreArray = ['Video Editing', 'PhotoGraphers', 'Voice Over Artist','Sound Desginers'];

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined
    }

    return 'Back'
  }, [step]);



    let bodyContent = (
        <div
        className='flex flex-col gap-8'
        >
            <Heading 
                title='Which of these best describes you profession'
                subtitle='Pick a category'
            />
            <div
            className='grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto'
            >
                {categories.map((item) => (
                    <div key={item.label} className='col-span-1'>
                       <CategoryInput
                        onClick={(category) => setCustomValue('category', category)}
                        selected={category == item.label}
                        label={item.label}
                        icon={item.icon}
                       />
                    </div>
                )   
                )}
            </div>
        </div>
    )

    if(step == STEPS.LOCATION) {
        bodyContent = (
            <div className='flex flex-col gap-8'>
                <Heading 
                    title="Where are you located?"
                    subtitle='Help Your Clients Find You'
                />
                <CountrySelect 
                    value={location}
                    onChange={(value) => setCustomValue('location', value)}
                />
                <Map 
                    center={location?.latlng}
                />
            </div>
        )
        
    }

    if(step === STEPS.INFO) {
        bodyContent = (
            <div className='flex flex-col gap-8'>
                <Heading
                title='Share some basics about you Profession'
                subtitle='What amenities do you have ?'
                />
                <Counter 
                    title='Years of Experience'
                    subtitle='How many years of experience do you have?'
                    value={YearsOfExperience}
                    onChange={(value) => setCustomValue('YearsOfExperience', value)}
                />
               
                {/* Hide the Counter component for sound design category */}
                    {selectedCategory !== 'Sound Desginers' && (
                        <>
                        <Counter
                            title='Delivery Time'
                            subtitle='How many days do you take to deliver the project'
                            value={DeliveryTime}
                            onChange={(value) => setCustomValue('DeliveryTime', value)}
                        />
                        </>
                    )}
                
                <Counter 
                    title='Revision'
                    subtitle='How revision do you provide the client'
                    value={RevisionNumber}
                    onChange={(value) => setCustomValue('RevisionNumber', value)}
                />
                
            </div>
        )
    }

    if (step == STEPS.IMAGES) {
        bodyContent = (
            <div className='flex flex-col gap-8'>
                <Heading 
                    title='Add Media showcasing your skills'
                    subtitle='Show Clients what you have got !'
                />
                <MediaUpload 
                 value={imageSrc}
                 onChange={(value) => setCustomValue('imageSrc', value)}
                />
            </div>
        )
    } 

if (step == STEPS.MEDIA) {
        bodyContent = (
            <div className='flex flex-col gap-8'>
                <Heading 
                    title='Add Many Media showcasing your skills'
                    subtitle='Show Clients what you have got !'
                />
                <MultipleMediaUpload
                     value={MediaSrc}
                     onChange={(value) => setCustomValue('MediaSrc', value)}
                />
            </div>
        )
    }

    


    if(step == STEPS.DESCRIPTION){
        bodyContent = (
            <div className='flex flex-col gap-8'>
                <Heading 
                    title='How would you best describe your profession'
                    subtitle='Short and Sweet works best'
                />
                <Input 
                    id='title'
                    label='Title'
                    disabled= {isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                
                <Input 
                    id='shortDescription'
                    label='Short Description'
                    disabled= {isLoading}
                    register={register}
                    errors={errors}
                    required
                />

                <p className='font-semibold'>Description</p>
                <TinyMce 
                    
                    onEditorChange={(value) => setCustomValue('description', value)}
                />
                                
               
            </div>
        )
    }
    if(step == STEPS.MORE_DESCRIPTION){
        bodyContent = (
            <div className='flex flex-col gap-8'>
                <Heading 
                    title='Can you provide a brief overview of you?'
                    subtitle='Select the best ones'
                />

                {InstrumentsArray.includes(selectedCategory) && (
                        <>
                            <MultiSelect
                        placeholder="What music instrument do you use?"
                        options={instruments}
                        value={instrument}
                        onChange={(value) => setCustomValue('instrument', value)}
                    />
                        </>
                    )}

                        {!NotGenreArray.includes(selectedCategory) && (
                                                <>
                                                    <MultiSelect
                        placeholder="What genres do you specialize in?"
                        options={genres}
                        value={genre}
                        onChange={(value) => setCustomValue('genre', value)}
                    />
                                                </>
                                            )}

                {MusicProArray.includes(selectedCategory) && (
                                                <>
                                                    <MultiSelect
                    placeholder="What music production software do you use?"
                    options={productionsoftwares}
                    value={productionsoftware}
                    onChange={(value) => setCustomValue('productionsoftware', value)}
                />

                
                <MultiSelect
                    placeholder="Purpose of your productions?"
                    options={productionpurposes}
                    value={productionpurpose}
                    onChange={(value) => setCustomValue('productionpurpose', value)}
                />
                                                </>
                                            )}

                {VoiceOverArray.includes(selectedCategory) && (
                                                <>
                                                     <MultiSelect
                    placeholder="Please Specify your Gender?"
                    options={genders}
                    value={gender}
                    onChange={(value) => setCustomValue('gender', value)}
                />

                <MultiSelect
                    placeholder="Languages you are fluent with?"
                    options={languages}
                    value={language}
                    onChange={(value) => setCustomValue('language', value)}
                />

                    <MultiSelect
                    placeholder="Voiceover Accents?"
                    options={accents}
                    value={accent}
                    onChange={(value) => setCustomValue('accent', value)}
                />

                    <MultiSelect
                    placeholder="Voiceover Age Range?"
                    options={ageranges}
                    value={agerange}
                    onChange={(value) => setCustomValue('agerange', value)}
                />

                <MultiSelect
                    placeholder="Voiceover Tones?"
                    options={voiceovertones}
                    value={voiceovertone}
                    onChange={(value) => setCustomValue('voiceovertone', value)}
                />


                <MultiSelect
                    placeholder="Purposes for your Voice Overs?"
                    options={voiceoverpurposes}
                    value={voiceoverpurpose}
                    onChange={(value) => setCustomValue('voiceoverpurpose', value)}
                />       
                                                </>
                                            )}
            
                
                {BeatMoodArray.includes(selectedCategory) && (
                                                <>
                                                     <MultiSelect
                    placeholder="Choose the beat moods you make?"
                    options={beatmoods}
                    value={beatmood}
                    onChange={(value) => setCustomValue('beatmood', value)}
                />
                
                                                </>
                                            )}
            
          
            </div>
        )
    }

    if(step == STEPS.CONTACT) {
        bodyContent = (
            <div className='flex flex-col gap-8'>
                 <Heading 
                    title='Provide you clients with your contact information'
                    subtitle='Help clients easily reach you'
                />
                <Input 
                    id='Contact'
                    label='Contact'
                    disabled= {isLoading}
                    register={register}
                    errors={errors}
                    required
                />
     
            </div>
        )
    }

    if(step == STEPS.PRICE){
        bodyContent = (
            <div
            className='flex flex-col gap-8'
            >
                <Heading 
                title='Now, set your price'
                subtitle='How much is your starting charge price ?'
                />  

                <Input 
                    id='price'
                    label='Price'
                    formatPrice
                    type='number'
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />  
            </div>
        )
    }


  return (
    <Modal
    disabled={isLoading}
    isOpen={rentModal.isOpen}
    onClose={rentModal.onClose}
    title='Esom Talent Listing !'
    actionLabel={actionLabel}
    onSubmit={handleSubmit(onSubmit)}
    secondaryActionLabel={secondaryActionLabel}
    secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
    body={bodyContent}
    />
  )
}

export default RentModal