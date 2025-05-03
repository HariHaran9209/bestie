import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import { ref, onValue, set, onDisconnect } from 'firebase/database';

const Status = () => {
    const [isSomeoneOnline, setIsSomeoneOnline] = useState(false);

    useEffect(() => {
        const myRef = ref(db, 'presence/user_' + Math.floor(Math.random() * 10000));
        set(myRef, true);
        onDisconnect(myRef).remove();
    
        const presenceRef = ref(db, 'presence/');
        onValue(presenceRef, (snapshot) => {
          const data = snapshot.val();
          const onlineUsers = data ? Object.keys(data).length : 0;
          setIsSomeoneOnline(onlineUsers > 1); // if more than 1, someone else is here!
        });
      }, []);

      return (
        <div className="absolute top-4 right-4 text-white text-sm font-semibold">
          {isSomeoneOnline && (
            <div className="animate-pulse bg-pink-500 px-4 py-2 rounded-full shadow-lg">
              💖 She’s here right now...
            </div>
          )}
        </div>
      );
}

export default Status