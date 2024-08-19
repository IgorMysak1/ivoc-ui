import { useUser } from "@/hooks";

export const ProfilePage = () => {
  const { user } = useUser();

  return <p>Profile: {user?.firstName}</p>;
};
