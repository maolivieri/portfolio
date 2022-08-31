import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

interface Props {}

const Page404: React.FC<Props> = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  });

  return null;
};

export default Page404;
