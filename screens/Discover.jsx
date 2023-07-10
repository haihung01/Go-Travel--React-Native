import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Attractions, Avatar, Hotels, Restaurants } from '../assets';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MenuContainer from '../components/MenuContainer';
import { FontAwesome } from '@expo/vector-icons';
import ItemCarDontainer from '../components/ItemCarDontainer';



const Discover = () => {
    const navigation = useNavigation();

    const [type, setType] = useState("restaurants");
    const [isLoading, setIsLoading] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShow: false,

        });
    }, [])

    return (
        <SafeAreaView className='flex-1 bg-white relative'>
            <View className='flex-row items-center justify-between
            px-8'>
                <View>
                    <Text className='text-[32px] text-[#0B646B] font-bold'>Discover</Text>
                    <Text className='text-[#527283] text-[29px]'>the beauty today</Text>
                </View>

                <View className='w-12 h-12 bg-gray-400 rounded-md items-center 
                justify-center shad'>
                    <Image
                        source={Avatar}
                        className='w-full h-full rounded-md object-cover'
                    />
                </View>
            </View>

            <View className='flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-2'>
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    onPress={(data, details = null) => {
                        console.log(data, details);
                    }}
                    query={{
                        // key: "AIzaSyAm4jtgpm0Tj7uDFiIdsm7IsRcIDRazk2I",
                        language: "en",
                    }}

                />
            </View>

            {/* Menu container */}
            {isLoading ? (<View className='flex-1 items-center justify-center'>
                <ActivityIndicator size="large" color="#0B646B" />
            </View>) : (

                <ScrollView>
                    <View className="flex-row items-center justify-between px-5 mt-1">
                        <MenuContainer
                            key={'hotel'}
                            title="Hotels"
                            imageSrc={Hotels}
                            type={type}
                            setType={setType}
                        />

                        <MenuContainer
                            key={'attractions'}
                            title="Attractions"
                            imageSrc={Attractions}
                            type={type}
                            setType={setType}
                        />

                        <MenuContainer
                            key={'restaurants'}
                            title="Restaurants"
                            imageSrc={Restaurants}
                            type={type}
                            setType={setType}
                        />
                    </View>

                    <View>
                        <View className='flex-row items-center justify-between px-8 mt-4'>
                            <Text className='text-[#2C7379] text-[26px] font-bold'>Top Tips</Text>
                            <TouchableOpacity className='flex-row items-center justify-center space-x-2'>
                                <Text className='text-[#A0C4C7] text-[18px] font-bold'>Explore</Text>
                                <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
                            </TouchableOpacity>
                        </View>

                        <View className='px-4 mt-1 flex-row items-center justify-evenly flex-wrap'>

                            <ItemCarDontainer
                                key={"101"}
                                imageSrc={"https://cdn.pixabay.com/photo/2023/06/28/08/34/people-8093808_1280.jpg"}
                                title="Something a very big "
                                location="Doha"
                            />

                            <ItemCarDontainer
                                key={"102"}
                                imageSrc={"https://media.istockphoto.com/id/478835054/vi/anh/ng%C6%B0%E1%BB%9Di-%C4%91%C3%A0n-%C3%B4ng-ch%C3%A2u-%C3%A1-tr%C3%AAn-th%E1%BB%8B-tr%C6%B0%E1%BB%9Dng-%C4%91%C6%B0%E1%BB%9Dng-ph%E1%BB%91-smile-b%C3%A1n-%E1%BB%9Bt-l%E1%BA%A1nh-%C4%91%E1%BB%8F.jpg?s=612x612&w=is&k=20&c=7DywxqU6zZnE7XOhFJRMNirhI1R1kFdRlYyCzqsUtss="}
                                title="Sample"
                                location="Qatar"
                            />
                        </View>
                    </View>
                </ScrollView>
            )}

        </SafeAreaView>
    )
}

export default Discover;