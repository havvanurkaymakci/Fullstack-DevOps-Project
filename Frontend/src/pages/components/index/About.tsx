'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';

interface ProfileData {
  bio: string;
  profile_picture: string;
  website: string;
  user: string;
}

export default function About() {
  const { user, authTokens } = useAuth();
  const accessToken = authTokens?.access;
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!accessToken) return;

      try {
        const res = await fetch('http://127.0.0.1:8000/api/accounts/profile/', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!res.ok) throw new Error('Profil bilgileri alınamadı');

        const data = await res.json();
        setProfile(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [accessToken]);

  if (loading) {
    return <p className="text-center text-white">Profil yükleniyor...</p>;
  }

  if (!profile) {
    return <p className="text-center text-red-500">Profil bilgisi bulunamadı.</p>;
  }
const getProfileImage = () => {
  if (!profile?.profile_picture) {
    return '/assets/img/default-avatar.png';
  }

  let picturePath = profile.profile_picture;

  if (picturePath.startsWith('http://') || picturePath.startsWith('https://')) {
    return picturePath;
  }

  if (picturePath.startsWith('/media')) {
    return `http://127.0.0.1:8000${picturePath}`;
  }

  return `http://127.0.0.1:8000/media/${picturePath}`;
};



  return (
    <section className="about__section pt_120 pb_120" id="about">
      <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
        <div className="personal__head text-center mx-auto xl:mb-[60px] md:mb-[50px] mb-[30px]">
          <img
            src="/assets/img/about/section-star.png"
            className="mb-[30px] animate-spin mx-auto"
            alt="star"
          />
          <div className="text-white">
            <div className="mb-4">
                            <Image
                src={getProfileImage()}
                alt="Profile"
                width={120}
                height={120}
                className="rounded-full mx-auto object-cover"
                unoptimized
                />

            </div>
            <p className="text-xl font-semibold">{profile.user}</p>
            <p className="mt-2">{profile.bio || 'Biyografi bilgisi girilmemiş.'}</p>
            {profile.website && (
              <p className="mt-2">
                Website:{' '}
                <a
                  href={profile.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  {profile.website}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
