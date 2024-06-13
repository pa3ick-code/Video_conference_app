"use client"
import {
  StreamVideo,
  StreamVideoClient,
} from '@stream-io/video-react-sdk';
import { useEffect, useState } from 'react';
import { tokenProvider } from '../actions/stream.actions';
import Loader from '../components/Loader';
import { useUser } from '@clerk/nextjs';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

export const StreamVideoProvider = ({children}: {children: React.ReactNode}) => {
    const [videoClient, setVideoClient] = useState<StreamVideoClient>();
    const {user, isLoaded} = useUser();

    useEffect(()=>{
      if(!isLoaded || !user) return;
      if(!apiKey) throw new Error('API key is missing.');

      const client = new StreamVideoClient({
        apiKey: apiKey,
        user: {
          id: user?.id,
          name: user?.username || user?.id,
          image: user?.imageUrl,
        },
        tokenProvider,
      });

      setVideoClient(client);
      console.log("Inside Effect");

    },[user, isLoaded]);
     console.log("Before");
    if(!videoClient) return <Loader />
   console.log("After");

  return (
    <StreamVideo client={videoClient}>
      {children}
    </StreamVideo>
  );
};
