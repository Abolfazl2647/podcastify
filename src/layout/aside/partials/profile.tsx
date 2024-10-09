import { Avatar } from "@/components";

export default function Profile() {
  return (
    <div className="profile-wrapper m-4 flex flex-row items-center">
      <Avatar
        className="rounded-full"
        id="user-profile.jpeg"
        alt="A portrait of someone"
      />
      <span className="ml-3">John Doe</span>
    </div>
  );
}
