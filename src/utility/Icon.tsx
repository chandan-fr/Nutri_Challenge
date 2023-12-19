import { Image } from 'react-native'
import React from 'react'

interface IconProps {
    name: string;
    iconColor: string;
    size: number;
}

const Icon: React.FC<IconProps> = ({ name, iconColor, size }) => {
    const curImage: { [key: string]: any; } = {
        home: require("../assets/icons/home.png"),
        tasks: require("../assets/icons/calendar.png"),
        msg: require("../assets/icons/comment.png"),
        profile: require("../assets/icons/user.png")
    };


    return (
        <Image
            style={{
                width: size,
                height: size,
                tintColor: iconColor
            }}
            source={curImage[name]}
        />
    )
}

export default Icon;