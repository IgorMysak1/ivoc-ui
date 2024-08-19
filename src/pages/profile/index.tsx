import { useUser } from "@/hooks";

export const ProfilePage = () => {
  const { user } = useUser();

  console.log(user);

  return <p>Profile: {user?.firstName}</p>;
};
