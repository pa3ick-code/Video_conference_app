

export const sideBarLinks = [
    {
        label: "Home",
        imgUrl: "./images/home.svg",
        route: "/",
    },
    {
        label: "Upcoming",
        imgUrl: "./images/upcoming.svg",
        route: "/upcoming",
    },
    {
        label: "Previous",
        imgUrl: "./images/previous.svg",
        route: "/previous",
    },
    {
        label: "Recording",
        imgUrl: "./images/recording.svg",
        route: "/recording",
    },
    {
        label: "Personal Room",
        imgUrl: "./images/personal-room.svg",
        route: "/personalRoom",
    },
];

export const meetingTypeList =[
    {
        link: "",
        icon: "/images/newMeeting.svg",
        title: "New Meeting",
        description: "Start new meeting",
        style: "bg-orange-500 ",
        handleClick:"isInstant"
    },

    {
        link: "",
        icon: "/images/joinMeeting.svg",
        title: "Join Meeting",
        description: "Join meeting via link",
        style: "bg-purple-500",
        handleClick:"isJoining"
    },
    {
        link: "",
        icon: "/images/schedule.svg",
        title: "Schedule Meeting",
        description: "Plan a meeting",
        style: "bg-blue-500",
        handleClick:"isSchedule"
    },
    {
        link: "",
        icon: "/images/video.svg",
        title: "Recordings",
        description: "Recorded meetings",
        style: "bg-yellow-500",
    },
]

export const avatarImages = [
  '/images/avatar-1.jpeg',
  '/images/avatar-2.jpeg',
  '/images/avatar-3.jpeg',
  '/images/avatar-4.jpeg',
  '/images/avatar-5.jpeg',
];