import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import { initialProfile } from '@/lib/initial-profile';

const SetupPage = async () => {
  // initialize profile...
  const profile = await initialProfile();

  // check for the servers user is a member of...
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  // if we find a server profile is part of, redirect em immediately
  // to that server..
  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  // else
  return <div>create a server</div>;
};

export default SetupPage;
