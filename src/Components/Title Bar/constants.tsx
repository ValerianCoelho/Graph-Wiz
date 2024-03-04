import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import NoteAddRoundedIcon from "@mui/icons-material/NoteAddRounded";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import FileOpenRoundedIcon from "@mui/icons-material/FileOpenRounded";
import DocumentScannerRoundedIcon from "@mui/icons-material/DocumentScannerRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import RestorePageRoundedIcon from "@mui/icons-material/RestorePageRounded";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

import FullscreenIcon from "@mui/icons-material/Fullscreen";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export const navigationData = [
  {
    title: "File",
    children: [
      [
        {
          option: "Save",
          hotkey: "Ctrl + S",
          icon: <SaveRoundedIcon />,
        },
        {
          option: "Save As",
          hotkey: "Ctrl + Shift + S",
          icon: <SaveAsIcon />,
        },
      ],
      [
        {
          option: "New File",
          hotkey: "Ctrl + N",
          icon: <NoteAddRoundedIcon />,
        },
        {
          option: "New Window",
          hotkey: "Ctrl + Shift + N",
          icon: <LaunchRoundedIcon />,
        },
      ],
      [
        {
          option: "Open File",
          hotkey: "Ctrl + O",
          icon: <FileOpenRoundedIcon />,
        },
        {
          option: "Open Template",
          hotkey: "Ctrl + O + T",
          icon: <DocumentScannerRoundedIcon />,
        },
      ],
      [
        {
          option: "Share",
          hotkey: ">",
          icon: <ShareRoundedIcon />,
          children: [
            [
              {
                option: "Whatsapp",
                icon: <WhatsAppIcon/>,
              },
              {
                option: "Instagram",
                icon: <InstagramIcon/>
              },
              {
                option: "Facebook",
                icon: <FacebookRoundedIcon/>,
              },
              {
                option: "Discord",
              },
            ],
            [
              {
                option: "Copy Link",
                icon: <ContentCopyIcon/>,
              },
              {
                option: "Copy Github Link",
                icon: <ContentCopyIcon/>,
              },
            ],
          ],
        },
      ],
      [
        {
          option: "Revert File",
          icon: <RestorePageRoundedIcon />,
        },
        {
          option: "Settings",
          hotkey: "Ctrl + S",
          icon: <SettingsRoundedIcon />,
        },
        {
          option: "Exit",
          icon: <ExitToAppIcon />,
        },
      ],
    ],
  },
  {
    title: "Edit",
    children: [
      [
        {
          option: "Undo",
          hotkey: "Ctrl +Z",
          icon: <UndoIcon />,
        },
        {
          option: "Redo",
          hotkey: "Ctrl + Shift + Z",
          icon: <RedoIcon />,
        },
      ],
      [
        {
          option: "Cut",
          hotkey: "Ctrl + X",
          icon: <ContentCutIcon />,
        },
        {
          option: "Copy",
          hotkey: "Ctrl + C",
          icon: <ContentCopyIcon />,
        },
        {
          option: "Paste",
          hotkey: "Ctrl + V",
          icon: <ContentPasteIcon />,
        },
      ],
    ],
  },
  {
    title: "View",
    children: [
      [
        {
          option: "Fullscreen",
          hotkey: "Ctrl + Shift + N",
          icon: <FullscreenIcon />,
        },
      ],
      [
        {
          option: "Hide Analysis Panel",
          hotkey: "Ctrl + S",
          icon: <VisibilityOffIcon />,
        },
        {
          option: "Hide Workspace",
          hotkey: "Ctrl + Shift + S",
          icon: <VisibilityOffIcon />,
        },
        {
          option: "Hide Taskbar",
          hotkey: "Ctrl + N",
          icon: <VisibilityOffIcon />,
        },
      ],
      [
        {
          option: "Theme",
          hotkey: ">",
          icon: <DarkModeRoundedIcon />,
          children: [
            [
              {
                option: "Dark",
                icon: <DarkModeIcon/>,
              },
              {
                option: "Light",
                icon: <WbSunnyIcon/>,
              },
            ],
          ],
        },
      ],
    ],
  },
  {
    title: "Help",
    children: [
      [
        {
          option: "documentation",
          hotkey: "",
          icon: <AssignmentRoundedIcon />,
        },
        {
          option: "hotkeys",
          hotkey: "",
          icon: <KeyRoundedIcon />,
        },
        {
          option: "References",
          hotkey: "",
          icon: <PersonRoundedIcon />,
        },
        {
          option: "Tutorials",
          hotkey: "",
          icon: <SubscriptionsRoundedIcon />,
        },
      ],
      [
        {
          option: "About",
          hotkey: "",
          icon: <InfoRoundedIcon />,
        },
      ],
    ],
  },
];
