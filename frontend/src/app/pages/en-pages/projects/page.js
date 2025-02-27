'use client';
import { useState, useEffect } from 'react';

import { VStack } from '@chakra-ui/react';
import { Divider } from "@heroui/divider";

import '@/app/styles/variables.css';
import '@/app/styles/glassmorphism.css';
import '@/app/styles/base.css';

import { loadData } from '@/app/utils/data';

import TechStack from '@/app/views/TechStack';
import Info from '@/app/views/Info';

import { BackendRequest } from '@/app/utils/Request.api';

import Footer from '@/app/views/Footer';
import NavBar from '@/app/views/NavBar';
import Project from '../../views/Project';

export default function Home() {
    const [data, setData] = useState(null);
    const [projects, setProjects] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const loadedData = await loadData('en');
                const loadedProjects = await BackendRequest("GET", "views");
                setData(loadedData);
                // console.log(loadedProjects.data);
                setProjects(loadedProjects.data);
            } catch (err) {
                setError(err);
            }
        };

        fetchData();
    }, []);

    if (error) return <div className='flex justify-center items-center m-auto'>Error: {error.message}</div>;
    if (!data) return <div className='flex justify-center items-center m-auto'>Loading...</div>;

    return (
        <div className='h-full py-3 px-6 sm:px-36 sm:py-10'>
            <NavBar />
            <div className="glassmorphism p-5 gap-2">
                <Project data={projects} />
                <Divider className="my-4" />
                <Footer data={data.media} />
            </div>
        </div>
    );
}
