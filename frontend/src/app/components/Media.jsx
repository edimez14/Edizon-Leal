// import DynamicIcon from "./DynamicIcon";
'use client'
import { useState } from 'react';
import IconButton from "./IconButton";
import Links from "./Links";
import { Media } from "@/app/utils/data";
import { Icon } from '@chakra-ui/react';

export default function Medias({ data }) {
    const [dataMedia, setDataMedia] = useState(data);
    const d = [
        { name: 'FiFileText', url: dataMedia.cv },
        { name: 'FaGithub', url: dataMedia.github },
        { name: 'FaLinkedin', url: dataMedia.linkedin }
    ];

    return (
        <div className="flex flex-wrap sm:flex-[column, column, row] gap-2">
            <Icon fontSize="2xl">
                <IconButton
                    icon="CiMail"
                    url={`mailto:${dataMedia.email}`}
                    text={dataMedia.email}
                    solid={true}
                    is_t={false}
                />
            </Icon>
            <Icon fontSize="2xl">
                <Links dict={d} />
            </Icon>
        </div>
    );
}