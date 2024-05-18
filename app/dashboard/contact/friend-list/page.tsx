import FriendListContent from "@/app/components/main-content/contact-main-content/FriendListContent";
import Header from "@/app/components/main-content/contact-main-content/header/Header";
import { Contact2 } from "lucide-react";
function FriendList() {
  return (
    <div>
      <Header icon={<Contact2 />} title="Danh sách Bạn bè" />
      <div className="p-6">
        <FriendListContent />
      </div>
    </div>
  );
}

export default FriendList;
