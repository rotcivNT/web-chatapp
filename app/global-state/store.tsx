import { create } from "zustand";
import { MessageItemProps, TypeMessage } from "../types";

interface BearState {
  isOpenConversationInfo: boolean;
  setOpenConversationInfo: () => void;
  userPhone: string;
  user: any;
  setUser: (user: any) => void;
  senders: any;
  setSenders: (senders: any) => void;
  setUserPhone: (phone: string) => void;
  countFriendRequest: number;
  setCountFriendRequest: (count: number) => void;
  conversations: any;
  setConversations: (conversations: any) => void;
  // Số lượng message đang được gửi đi
  sendingCount: number;
  setSendingCount: (count: number) => void;
  friendRequests: any;
  setFriendRequests: (friendRequests: any) => void;
  openAddMemberGroup: boolean;
  setOpenAddMemberGroup: () => void;
  openChildModalConversationInfo: any;
  setOpenChildModalConversationInfo: (key: string, value: boolean) => void;
  memberInfoCurrentGroupConversation: any;
  setMemberInfoCurrentGroupConversation: (memberInfo: any) => void;
  replyMessageData: any;
  setReplyMessageData: (data: any) => void;
  forwardMessage: any;
  setForwardMessage: (data: any) => void;
  isOpenBlockFriend: any;
  setIsOpenBlockFriend: (data: any) => void;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

export const useBearStore = create<BearState>()((set) => ({
  isOpenConversationInfo: true,
  userPhone: "",
  user: null,
  senders: [],
  setSenders: (senders: any) =>
    set((prevState) => ({
      ...prevState,
      senders,
    })),
  setUser: (user: any) =>
    set((prevState) => ({
      ...prevState,
      user,
    })),
  setUserPhone: (userPhone: string) =>
    set((prevState) => ({
      ...prevState,
      userPhone,
    })),
  setOpenConversationInfo: () =>
    set((prevState) => ({
      ...prevState,
      isOpenConversationInfo: !prevState.isOpenConversationInfo,
    })),

  countFriendRequest: 0,
  setCountFriendRequest: (count: number) =>
    set((prevState) => ({
      ...prevState,
      countFriendRequest: count,
    })),
  conversations: [],
  setConversations: (conversations: any) =>
    set((prevState) => ({
      ...prevState,
      conversations,
    })),
  sendingCount: 0,
  setSendingCount: (count: number) =>
    set((prevState) => ({
      ...prevState,
      sendingCount: count,
    })),
  friendRequests: [],
  setFriendRequests: (friendRequests: any) =>
    set((prevState) => ({
      ...prevState,
      friendRequests,
    })),
  openAddMemberGroup: false,
  setOpenAddMemberGroup: () =>
    set((prevState) => ({
      ...prevState,
      openAddMemberGroup: !prevState.openAddMemberGroup,
    })),
  openChildModalConversationInfo: {
    member: false,
    commonGroup: false,
    addMemberIntoGroup: false,
    forwardMessage: false,
    receiveCall: false,
    videoCall: false,
    groupCall: false,
  },
  setOpenChildModalConversationInfo: (key: string, value: boolean) =>
    set((prevState) => ({
      ...prevState,
      openChildModalConversationInfo: {
        ...prevState.openChildModalConversationInfo,
        [key]: value,
      },
    })),
  memberInfoCurrentGroupConversation: [],
  setMemberInfoCurrentGroupConversation: (memberInfo: any) =>
    set((prevState) => ({
      ...prevState,
      memberInfoCurrentGroupConversation: memberInfo,
    })),
  replyMessageData: null,
  setReplyMessageData: (data: any) =>
    set((prevState) => ({
      ...prevState,
      replyMessageData: data,
    })),
  forwardMessage: null,
  setForwardMessage: (data: any) =>
    set((prevState) => ({
      ...prevState,
      forwardMessage: data,
    })),
    isOpenBlockFriend: false,
    setIsOpenBlockFriend: (data: any) =>
      set((state) => ({ ...state, isOpenBlockFriend: data }))
    ,searchTerm: '',
    setSearchTerm: (term: string) => set({ searchTerm: term }),
}));
