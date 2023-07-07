import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets';


const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShow: false,

        });
    }, [])

    return (
        <SafeAreaView className="bg-white flex-1 relative">
            {/* First Section */}

            <View className='flex-row px-6 mt-2 items-center space-x-2'>
                <View className='w-12 h-12 bg-black rounded-full items-center justify-center'>
                    <Text className='text-[#00BCC9] text-2xl font-semibold'>Go</Text>
                </View>

                <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
            </View>

            {/* Second section  */}
            <View className='px-6 mt-1 space-y-3'>
                <Text className='text-[#3C6072] text-[34px]'>Enjoy the trip with</Text>
                <Text className='text-[#00BCC9] text-[30px] font-bold '>Good Moments</Text>

                <Text className='text-[#3C6072] text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
                    asperiores!
                </Text>
            </View>

            {/* Circle Section */}
            <View className='w-[290px] h-[290px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-32'></View>
            <View className='w-[250px] h-[250px] bg-[#E99265] rounded-full absolute -bottom-10 -left-28'></View>

            {/* Image container */}
            <View className='flex-1 relative items-center justify-center'>
                <Animatable.Image
                    animation="fadeIn"
                    easing="ease-in-out"
                    source={HeroImage}
                    className="w-full h-[500px] object-cover mt-28"
                />

                <TouchableOpacity
                    onPress={() => navigation.navigate("Discover")}
                    className='absolute bottom-16 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9]
                rounded-full items-center justify-center'>
                    <Animatable.View
                        animation={"pulse"}
                        iterationCount={"infinite"}
                        easing="ease-in-out"
                        className='w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]'>
                        <Text className='text-gray-50 text-[36px] font-semibold'>Go</Text>
                    </Animatable.View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;