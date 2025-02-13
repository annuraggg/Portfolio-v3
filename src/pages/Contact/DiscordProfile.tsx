import React, { useEffect, useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import { FaMoon, FaMinusCircle } from "react-icons/fa";

export interface DiscordData {
  data: {
    kv: Record<string, unknown>;
    discord_user: {
      id: string;
      username: string;
      avatar: string;
      discriminator: string;
      clan: string | null;
      avatar_decoration_data: unknown | null;
      bot: boolean;
      global_name: string;
      primary_guild: string | null;
      display_name: string;
      public_flags: number;
    };
    activities: {
      id: string;
      name: string;
      type: number;
      state: string;
      created_at: number;
    }[];
    discord_status: string;
    active_on_discord_web: boolean;
    active_on_discord_desktop: boolean;
    active_on_discord_mobile: boolean;
    listening_to_spotify: boolean;
    spotify: unknown | null;
  };
  success: boolean;
}

const statusIcons: Record<string, JSX.Element> = {
  online: <BsCircleFill className="text-green-500" />,
  idle: <FaMoon className="text-yellow-500" />,
  dnd: <FaMinusCircle className="text-red-500" />,
  offline: <BsCircleFill className="text-gray-500" />,
};

const DiscordProfile: React.FC = () => {
  const [discordData, setDiscordData] = useState<DiscordData | null>(null);

  useEffect(() => {
    fetch("https://api.lanyard.rest/v1/users/564130664643952690")
      .then((res) => res.json())
      .then((data) => setDiscordData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!discordData || !discordData.success) {
    return <div className="text-white">Loading...</div>;
  }

  const user = discordData.data.discord_user;
  const status = discordData.data.discord_status || "offline";
  const customStatus = discordData.data.activities.find(
    (activity) => activity.type === 4
  )?.state;

  return (
    <a
      href={`https://discordapp.com/users/${user.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-4 p-4 bg-black bg-opacity-40 text-white rounded-lg w-[400px] cursor-pointer hover:opacity-80"
    >
      <div className="relative">
        <img
          src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
          alt={user.username}
          className="w-12 h-12 rounded-full"
        />
        <span className="absolute bottom-0 right-0 w-4 h-4 flex items-center justify-center border-2 border-black rounded-full">
          {statusIcons[status] || statusIcons["offline"]}
        </span>
      </div>
      <div>
        <div className="font-semibold text-lg">
          {user.display_name || user.username}
        </div>
        <div className="text-sm text-gray-400">{customStatus || status}</div>
      </div>
    </a>
  );
};

export default DiscordProfile;
